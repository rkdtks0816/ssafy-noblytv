# OpenJDK 21 이미지를 베이스로 사용
FROM openjdk:21-jdk-slim

# 애플리케이션을 빌드할 소스 코드 및 리소스 복사
COPY . /app

# 작업 디렉토리 설정
WORKDIR /app

# xargs 설치를 위해 apt-get update 및 findutils 설치
RUN apt-get update && apt-get install -y findutils

# Gradle 설치
RUN apt-get install -y curl unzip && \
    curl -s https://services.gradle.org/distributions/gradle-8.5-bin.zip -o gradle.zip && \
    unzip -d /opt gradle.zip && \
    rm gradle.zip && \
    ln -s /opt/gradle-8.5/bin/gradle /usr/bin/gradle

# Spring Boot 애플리케이션 빌드
RUN gradle clean bootJar

# JAR 파일을 /app 디렉토리로 복사
RUN cp build/libs/*.jar /app/app.jar

# 빌드 과정에서 생성된 불필요한 파일들 삭제
RUN gradle clean

# Spring Boot 애플리케이션 실행을 위한 명령 설정
ENTRYPOINT ["java", "-Dspring.profiles.active=docker", "-jar", "/app/app.jar"]
