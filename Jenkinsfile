pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy With Docker Compose') {
            steps {
                script {
                    sh 'cd backed/project && /usr/local/bin/docker-compose up --build -d'
                }
            }
        }
    }

    options {
        skipDefaultCheckout(true)
    }
}
