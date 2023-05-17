FROM node:18-alpine
RUN mkdir /app
WORKDIR /app
COPY node_modules /app/node_modules/
COPY dist /app/dist/
COPY package.json docker/run.sh .env /app/
RUN chmod +x /app/run.sh
CMD ["sh", "/app/run.sh"]