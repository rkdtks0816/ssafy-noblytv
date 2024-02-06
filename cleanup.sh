#!/bin/bash

# 이미지를 삭제할 서비스 이름
SERVICES=("sdb" "sapi" "sweb")

# 이미지 삭제 함수
remove_images() {
  for service in "${SERVICES[@]}"; do
    docker-compose -f docker-compose.yml down
    docker rmi "$(docker images -q $service)"
  done
}

# 이미지 삭제 실행
remove_images
