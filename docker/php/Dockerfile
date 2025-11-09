FROM php:8.2-fpm-alpine

# 基本ツールと PHP 拡張
RUN apk add --no-cache \
    bash \
    git \
    curl \
    libzip-dev \
    oniguruma-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo_mysql mbstring zip bcmath

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www
