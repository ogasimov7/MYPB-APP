FROM node:15.13-alpine
WORKDIR /MY-APP
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build