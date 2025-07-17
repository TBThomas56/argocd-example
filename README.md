ArgoCD Example of how to deploy your apps in a GitOps Manner. 

Apply the argo.yaml file in each branch to understand the different patterns. 

`kubectl apply -f argo.yaml`

Branch: single-app 
- focuses on a packaged app in the same repository

Branch: two-apps
- two argo.yaml files for two different applications: THe single app and an nginx deployment

Branch: app-of-apps
- one argo.yaml file that will deploy and manage both apps in previous branches using the app of apps patterns
