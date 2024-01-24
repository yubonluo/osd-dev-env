## ArgoCD notifications setup
1. update config map `argocd-notifications-cm`
```
k apply -f kustomize/argocd/argocd-notifications-cm.yaml
```

2. update ArgoCD application annotations
```
metadata:
  annotations:
    notifications.argoproj.io/subscribe.on-deployed.slack_webhook: ""
    notifications.argoproj.io/subscribe.on-health-degraded.slack_webhook: ""
    notifications.argoproj.io/subscribe.on-sync-failed.slack_webhook: ""
    notifications.argoproj.io/subscribe.on-deleted.slack_webhook_deleted: ""
```

Then run: `argocd appset create appset/opensearch-appset.yaml --upsert`
