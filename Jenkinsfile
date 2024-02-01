pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'easyho1129/c103_back'
        DOCKERFILE_PATH = './backend/project/Dockerfile'
        CONTAINER_NAME = 'springcontainer'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh '''
                        cd ./backend/project
                        docker build -t ${DOCKER_IMAGE_NAME} .
                    '''
                }
            }
        }

        stage('Delete Previous Docker Container') {
            steps {
                script {
                    sh '''
                        docker stop ${CONTAINER_NAME}
                        docker rm ${CONTAINER_NAME}
                    '''
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker run -d --name ${CONTAINER_NAME} -p 3000:3000 ${DOCKER_IMAGE_NAME}"
                }
            }
        }
    }
}