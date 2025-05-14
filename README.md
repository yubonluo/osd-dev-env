# OpenSearch GitOps

GitOps environment repo for OpenSearch and OpenSearch-Dashboards development

> OpenSearch and OpenSearch-Dashboards helm charts are from the official [helm-charts](https://github.com/opensearch-project/helm-charts)

## Create an OpenSearch cluster

1. fork this repo
2. In your forked repository, navigate to the `playgrounds/` directory
3. Create a new subdirectory for your deployment, for example `playgrounds/my-playground`
4. Within this new directory, create the following 3 files, see below
5. Commit and create pull request, once the PR is merged, the playground will be deployed automatically in a few minutes

### config.json
```json
{
  "owner": "<your_email@example.com>",
  "cluster": {
    "name": "opensearch-dev"
  }
}
```
cluster.name MUST be `opensearch-dev` or `opensearch-playground`, for development purpose, please use `opensearch-dev`

### opensearch-dashboards.yaml
```yaml
replicaCount: 1
image:
  repository: "opensearchproject/opensearch-dashboards"
  tag: "2.19.0"
```

### opensearch.yaml
```yaml
replicas: 2

image:
  repository: "opensearchproject/opensearch"
  tag: "2.19.0"
```

With the these config, you will have a OSD playground with an OpenSearch cluster of two nodes created.

If you wish to build the cluster with the latest code, you should do a few extra steps to deploy the cluster:
1. You can refer to yaml files from opensearch build repo. For example, this is the [yml file](https://github.com/opensearch-project/opensearch-build/blob/main/manifests/2.19.0/opensearch-dashboards-2.19.0.yml) for 2.19.0 opensearch dashboards.
2. Go to `Actions` and select `Build OSD Manually`, and then initiate a workflow as is shown in the following figure. Upon workflow completion, A PR will be generated automatically. By manually merge this PR, your cluster will be updated with the latest built image.

![image (7)](https://github.com/user-attachments/assets/75421b7a-1899-4611-ac27-251631826bf6)

## Roadmap
- [x] support build OpenSearch-Dashboards from source
- [x] Support automatic builds based on schedule
- [ ] support build OpenSearch from source
- [x] support k8s cluster auto-scaler
