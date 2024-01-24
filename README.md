# OpenSearch GitOps

GitOps environment repo for OpenSearch and OpenSearch-Dashboards development

> OpenSearch and OpenSearch-Dashboards helm charts are from the official [helm-charts](https://github.com/opensearch-project/helm-charts)

## Create an OpenSearch cluster

1. fork this repo
2. create a empty folder in `deployments/`, for example `deployments/my-app`, you can name it as you like
3. create a `config.json` file in `my-app` folder, take `deployments/demo` for example
4. update `owner` with your email address in `config.json`, you will be notified on slack once the cluster is created
5. create a pull request with above changes to `main`
6. once the PR is merged, the opensearch cluster will be deployed automatically(default is a 2 nodes opensearch cluster) and you will receive slack notifications about the endpoints

## Customize the deployment
