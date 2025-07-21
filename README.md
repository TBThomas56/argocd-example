# ArgoCD Example Repository

This repository demonstrates several ArgoCD deployment concepts using a simple "hello-argo" frontend example and NGINX using manifests and helm charts. Each branch in this repository highlights a different ArgoCD pattern or use case.

## Branches and Concepts

### 1. `single-app-instance`
- **Description:** Deploys a single ArgoCD Application for the packaged image of the `hello-argo` frontend example.
- **Use Case:** Basic ArgoCD usage for deploying a single application.

### 2. `two-apps`
- **Description:** Adds a separate NGINX deployment alongside the `hello-argo` frontend. Both are managed as independent ArgoCD Applications.
- **Use Case:** Demonstrates managing multiple applications with ArgoCD, each with its own configuration and lifecycle.

### 3. `app-of-apps`
- **Description:** Implements the "App of Apps" pattern, where a parent ArgoCD Application manages the deployment of both the `hello-argo` frontend and the NGINX application as child Applications.
- **Use Case:** Showcases advanced ArgoCD patterns for managing complex deployments and grouping related applications.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. **Checkout the desired branch:**
   ```bash
   git checkout <branch-name>
   ```

3. **Apply the manifests using ArgoCD:**
   - Apply the `argo.yaml` file to the correct namespace according to your setup K8s cluster
   - In the case of `two-apps`, apply `argo1.yaml` as well

   ```bash
   kubectl apply -f argo.yaml -n <namespace>
   ```

## Requirements

- Kubernetes cluster
- ArgoCD installed and configured


