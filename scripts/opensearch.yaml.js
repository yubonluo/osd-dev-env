const fs = require("node:fs");

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

module.exports = createOpenSearchYaml;
