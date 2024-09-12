const fs = require("node:fs");

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

module.exports = createOpenSearchDashboardsYaml;
