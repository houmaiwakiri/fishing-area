FROM php:8.3-fpm

# 必要なパッケージ
RUN apt-get update && apt-get install -y \
    git unzip zip curl vim \
    nodejs npm \
    && docker-php-ext-install pdo_mysql

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# npm キャッシュ最適化
RUN npm install -g npm@latest
