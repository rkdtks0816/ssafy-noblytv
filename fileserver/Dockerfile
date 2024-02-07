FROM nginx:latest

# 기본 설정 파일 복사
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Nginx를 시작합니다.
CMD ["nginx", "-g", "daemon off;"]
