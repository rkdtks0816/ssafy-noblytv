pipeline {
    agent any

    tools {
        gradle 'gradle-8.5'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build JAR') {
            steps {
                script {
                    sh './gradlew build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh '''
                        cd ./backend/project
                        docker build -t easyho1129/c103_back .
                    '''
                }
            }
        }

        stage('Delete Previous Docker Container') {
            steps {
                script {
                    sh '''
                        docker stop springboot
                        docker rm springboot
                    '''
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker run -d -p 3000:3000 --network=project_default --name springboot easyho1129/c103_back"
                }
            }
        }
    }
}