# OpenSearch GitOps

GitOps environment repo for OpenSearch and OpenSearch-Dashboards development

> OpenSearch and OpenSearch-Dashboards helm charts are from the official [helm-charts](https://github.com/opensearch-project/helm-charts)

## Create an OpenSearch cluster

1. fork this repo
2. create a empty folder in `deployments/`, for example `deployments/my-app`, use `-` separated number/word
3. create a `config.json` file in `my-app` folder, take `deployments/demo` for example
4. update `owner` with your email address in `config.json`, you will be notified by slack once the cluster is created
5. create a pull request with above changes to `main`
6. once the PR is merged, the opensearch cluster will be deployed automatically

## Roadmap
- [x] support build OpenSearch-Dashboards from source
- [ ] Support automatical builds based on schedule
- [ ] support build OpenSearch from source
- [ ] support k8s cluster autoscaler
