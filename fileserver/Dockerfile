FROM nginx:latest

# 기본 설정 파일 복사
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# 볼륨 설정
VOLUME /usr/share/nginx/html

# Nginx를 시작합니다.
CMD ["nginx", "-g", "daemon off;"]
