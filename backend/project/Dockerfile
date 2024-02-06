# OpenJDK 21을 기반으로 하는 Dockerfile

# OpenJDK 21 이미지를 베이스로 사용
FROM openjdk:21

# 애플리케이션을 빌드할 소스 코드 및 리소스 복사
COPY . /app

# 작업 디렉토리 설정
WORKDIR /app

# Gradle Wrapper를 이용하여 애플리케이션 빌드
RUN ./gradlew clean bootJar

# JAR 파일을 /app 디렉토리로 복사
RUN cp build/libs/*.jar /app/app.jar

# 빌드 과정에서 생성된 불필요한 파일들 삭제
RUN rm -rf build

# Spring Boot 애플리케이션 실행을 위한 명령 설정
ENTRYPOINT ["java", "-Dspring.profiles.active=docker", "-jar", "/app/app.jar"]
