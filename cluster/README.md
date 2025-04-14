1. create cluster

```
eksctl create cluster -f cluster-config.yaml
```

2. install `aws-load-balancer-controller`

```
helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
  -n kube-system \
  --set clusterName=opensearch-dev \
  --set serviceAccount.create=false \
  --set serviceAccount.name=aws-load-balancer-controller
```

Verify `aws-load-balancer-controller` is installed correctly:

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.7/docs/examples/2048/2048_full.yaml
```

You should see the public load balancer after while, and now you can play game 2048 on: k8s-game2048-ingress2-666bab170a-1051333107.us-west-1.elb.amazonaws.com

Cleanup

```
kubectl delete -f https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.7/docs/examples/2048/2048_full.yaml
```

3. Verify that ebs successfully install

```
https://github.com/kubernetes-sigs/aws-ebs-csi-driver/blob/master/examples/kubernetes/dynamic-provisioning/README.md
```

Note: the default StorageClass should be `gp2` is `kubectl get sc` shows `gp2` is NOT the default, then need to update `values.yaml` to specify `persistence.storageClass: gp2`
Or:

```
kubectl patch storageclass gp2 -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
```

4. Install autoscaler

```
helm install cluster-autoscaler autoscaler/cluster-autoscaler \
  --namespace kube-system \
  --set autoDiscovery.clusterName=opensearch-dev \
  --set awsRegion=us-east-1
```

5. Setup external-dns(optional)

```
helm repo add external-dns https://kubernetes-sigs.github.io/external-dns
helm repo update
helm install external-dns external-dns/external-dns -f cluster/external-dns.yaml -n kube-system
```

Verify that external-dns works

```
k apply -f cluster/verify-external-dns.yaml -n verify-external-dns
```

You should see something like:

```
NAME         CLASS   HOSTS                              ADDRESS                                                                   PORTS   AGE
echoserver   alb     echoserver.example.com             k8s-verifyex-echoserv-f50a8036e6-1815840583.us-east-1.elb.amazonaws.com   80      9h
```

### TODO

1. Setup ArgoCD
2. Secrets management
