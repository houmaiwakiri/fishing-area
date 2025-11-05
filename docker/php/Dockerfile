FROM php:8.2-fpm

# 必要な拡張
RUN apt-get update && apt-get install -y \
    git unzip libpq-dev libzip-dev zip \
    && docker-php-ext-install pdo_mysql zip

# Composer install
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
WORKDIR /var/www/html
