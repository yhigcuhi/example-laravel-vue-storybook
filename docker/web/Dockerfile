FROM nginx

# タイムゾーン 日本設定s
ENV TZ=Asia/Tokyo
# システム時間等の書き換え
RUN echo "${TZ}" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

# nginx config file
COPY ./docker/nginx/*.conf /etc/nginx/conf.d/
COPY ./docker/nginx/security/*.conf /etc/nginx/conf.d/security/

# docker compose exec xxx bash とかの 最初のカレントディレクトリの設定
WORKDIR /var/www/html