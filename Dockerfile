# 1단계: 빌드 (Node 환경에서 소스 빌드)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2단계: 서비스 (Nginx로 빌드된 파일 서빙)
FROM nginx:alpine
# 빌드된 dist 폴더를 Nginx 경로로 복사
COPY --from=builder /app/dist /usr/share/nginx/html
# 우리가 만들 nginx 설정 파일을 적용
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5984
CMD ["nginx", "-g", "daemon off;"]