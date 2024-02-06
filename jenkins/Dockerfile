# Use the official Jenkins image as the base image
FROM jenkins/jenkins:latest

# Switch to root user to install additional packages
USER root

# Install dependencies (update and install Docker)
RUN apt-get update \
    && apt-get install -y docker

# Install Docker Compose
RUN curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose

# Switch back to the Jenkins user
USER jenkins
