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

If you wish to build the cluster with the latest code, you should do a few extra steps to deploy the cluster:
1. You can refer to yaml files from opensearch build repo. For example, this is the [yml file](https://github.com/opensearch-project/opensearch-build/blob/main/manifests/2.19.0/opensearch-dashboards-2.19.0.yml) for 2.19.0 opensearch dashboards.
2. Go to `Actions` and select `Build OSD Manually`, and then initiate a workflow as is shown in the following figure. Upon workflow completion, A PR will be generated automatically and you need to manually merge this PR.

## Roadmap
- [x] support build OpenSearch-Dashboards from source
- [ ] Support automatic builds based on schedule
- [ ] support build OpenSearch from source
- [ ] support k8s cluster auto-scaler
