const fs = require("node:fs");
const path = require("node:path");

function createOpenSearchDashboardsYaml(folderName, options) {
  const yaml = `replicaCount: 1
image:
  repository: "opensearchproject/opensearch-dashboards"
  tag: "${options.opensearchVersion}"
config:
  opensearch_dashboards.yml:
    workspace.enabled: true
`;

  fs.writeFileSync(`${folderName}/opensearch-dashboards.yaml`, yaml);
}

function createOpenSearchYaml(folderName, options) {
  const yaml = `replicas: 2
image:
  repository: "opensearchproject/opensearch"
  tag: "${options.opensearchVersion}"
config:
  opensearch.yml:
    plugins:
      ml_commons:
        agent_framework_enabled: true
`;

  fs.writeFileSync(`${folderName}/opensearch.yaml`, yaml);
}

function createConfigJson(folderName, options) {
  const json = `{
  "owner": "${options.email}"
}`;
  fs.writeFileSync(`${folderName}/config.json`, json);
}

function createDeployment(options) {
  const cwd = process.cwd();
  const folderName = path.join(cwd, `./deployments/${options.deploymentName}`);

  if (fs.existsSync(folderName)) {
    throw new Error(
      `Deployment name "${options.deploymentName}" already exists`
    );
  }

  fs.mkdirSync(folderName);

  createOpenSearchYaml(folderName, options);
  createOpenSearchDashboardsYaml(folderName, options);
  createConfigJson(folderName, options);
}

module.exports = createDeployment;
