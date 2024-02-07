FROM nginx:latest

# 파일 서버에 사용할 동영상 파일들을 ./videos 디렉터리에 복사합니다.
COPY ./videos /usr/share/nginx/html

# 기본 설정 파일 복사
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Nginx를 시작합니다.
CMD ["nginx", "-g", "daemon off;"]
