# ECE-DEVOPS_Project-BENJELLOUN-GAAD-DALIBERT
# DevOps Project: Web Application & Infrastructure

This repository contains the source code and Infrastructure as Code (IaC) configuration for a Node.js web application. The project demonstrates a complete DevOps lifecycle, including automated testing, VM provisioning with Vagrant & Ansible, containerization with Docker, and orchestration with Kubernetes.

## 📋 Work Performed

### Application Development
* **Web Application:** Developed a simple Node.js/Express application serving a static CV page.
* **Health Check:** Implemented a `/health` endpoint for monitoring application status.
* **Testing:** Created unit/integration tests using Jest and Supertest.

### CI/CD & Automation
* **GitHub Actions:** Configured a CI pipeline (`ci.yml`) that triggers on push/pull requests to `main` or `master`. It sets up Node.js v20, installs dependencies, and runs the test suite.

### Infrastructure as Code (IaC)
* **Vagrant:** Configured a local development environment using `ubuntu/jammy64`.
* **Ansible:** wrote a playbook (`site.yml`) to provision the VM:
    * Installs system dependencies (curl, gnupg, etc.).
    * Installs and configures **Redis**.
    * Installs **Node.js 20.x**.
    * Syncs application source code to the VM.
    * Sets up a **Systemd** service (`webapp.service`) to keep the app running in the background.
    * Performs a health check verification after deployment.

### Containerization & Orchestration
* **Docker:** The application is containerized (Image: `rayangaad03/devops-webapp`).
* **Kubernetes:** Created manifests for deployment:
    * `Deployment`: Manages the application pods (1 replica).
    * `Service`: Exposes the application via **NodePort** (Port 30000).

---

## 🚀 Instructions

### 1. Prerequisites
Ensure you have the following tools installed:
* **Node.js & npm** (for local development)
* **Vagrant & VirtualBox** (for VM infrastructure)
* **Docker** (to run containers)
* **Minikube** or a Kubernetes cluster (to test K8s manifests)

### 2. Installation & Usage
You can run the application using any of the following methods. Choose the one that suits your environment.

#### A. Running Locally (Node.js)
To run the application directly on your machine:

```bash
cd webapp
npm install
npm start
```
Access the app at: http://localhost:3000

#### B. Running with Vagrant (VM + Ansible)
This will create a Virtual Machine and automatically provision it using Ansible

```bash
vagrant up
```
Access the app at: http://localhost:3000

#### C. Running with Docker
Pull the pre-built image and run the container

```bash
docker pull rayangaad03/devops-webapp:latest
docker run -p 3000:3000 rayangaad03/devops-webapp:latest
```
Access the app at: http://localhost:3000

#### D. Running on Kubernetes
Apply the Deployment and Service configurations

```bash
kubectl apply -f k8s/
```

Check the status of your pods and services
```bash
kubectl get all
```
Access the app:
> If using Minikube: minikube service devops-webapp-service
> Otherwise: http://localhost:30000 

### 3. Testing
To run the automated test suite (Jest):
```bash
cd webapp
npm test
```
Expected Output:

PASS test/app.test.js GET / should return CV page with correct image path GET /health should return status ok

## Author

**Kamil Benjelloun**
**Rayan Gaad**
**Gabriel Dalibert**

* **Project:** DevOps Project
* **School:** ECE Paris