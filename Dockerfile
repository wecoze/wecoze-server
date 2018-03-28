FROM node:8
WORKDIR /code
COPY package.json package-lock.json .npmrc ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src
RUN npm run build \
 && rm -frv src

COPY docker-entrypoint.sh ./
RUN chmod +x ./docker-entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["./docker-entrypoint.sh"]
