# Node.js 버전 20.11.0을 사용하는 Docker 이미지
FROM node:20.11.0

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 앱 의존성 설치
COPY package*.json ./
RUN npm install

# 앱 소스 복사
COPY . .

# 포트 설정
EXPOSE 3010

# 앱 실행
CMD ["npm", "run", "dev"]
