FROM php:8.2-fpm

# 必要な拡張をインストール
RUN apt-get update && apt-get install -y \
    zip unzip git libzip-dev \
    && docker-php-ext-install pdo_mysql

# 作業ディレクトリ
WORKDIR /var/www/html

# composer インストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Laravel 権限設定
RUN mkdir -p storage bootstrap/cache \
    && chown -R www-data:www-data storage bootstrap/cache
