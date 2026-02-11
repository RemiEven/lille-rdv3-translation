#!/bin/bash

find -name readme.md -exec sed -i 's/localhost:1080/translation-api:8080/g' {} \;
find -name readme.md -exec sed -i 's/localhost:1081/product-api:8080/g' {} \;

find -name readme.md -exec sed -i 's|- .documentation for translation-api.(http://localhost:8080)|- documentation for translation-api: see exposed port 8080 in vscode|g' {} \;
find -name readme.md -exec sed -i 's|- .documentation for product-api.(http://localhost:8081)|- documentation for product-api: see exposed port 8081 in vscode|g' {} \;

find -name translation_api.yml -exec sed -i 's/localhost:1080/translation-api:8080/g' {} \;
find -name product_api.yml -exec sed -i 's/localhost:1081/product-api:8080/g' {} \;
