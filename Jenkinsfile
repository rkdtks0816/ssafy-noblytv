pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://lab.ssafy.com/s10-webmobile3-sub2/S10P12C103.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    docker.build("BackEnd", "./backend/project")
                }
            }
        }

        stage('Deploy With Docker Compose') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}
