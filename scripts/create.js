#!/usr/bin/env node

const prompts = require("prompts");
const createDeployment = require("./create_deployment");

const questions = [
  {
    type: "text",
    name: "deploymentName",
    message: "Deployment name",
    validate: (value) => {
      const namespaceRegex = /^[a-z0-9]([-a-z0-9]*[a-z0-9])?$/;
      return namespaceRegex.test(value);
    },
  },
  {
    type: "text",
    name: "opensearchVersion",
    message: "OpenSearch version",
  },
  {
    type: "text",
    name: "email",
    message: "Email",
  },
];

(async () => {
  let cancelled = false;
  const response = await prompts(questions, {
    onCancel: () => {
      cancelled = true;
    },
  });

  if (cancelled) {
    return;
  }

  createDeployment(response);

  console.log(
    `Congratulations! deployments/${response.deploymentName} created successfully.\n`
  );
  console.log(`Run 'git add deployments/${response.deploymentName}'`);
  console.log(
    `Run 'git commit -m"deployment(${response.deploymentName}): create new deployment ${response.deploymentName}"`
  );
  console.log(
    "\nFinally, create a pull request to https://github.com/ruanyl/osd-dev-env"
  );
})();
