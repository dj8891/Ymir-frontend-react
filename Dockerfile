FROM node:20.8.0-alpine as dependencies
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

FROM node:20.8.0-alpine as builder
WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn build


FROM node:20.8.0-alpine as runner

# Create a user to be used by the application
RUN addgroup -S app && adduser -S app -G app

# RUN useradd -ms /bin/bash app
WORKDIR /home/app
#Give user read and write permissions
RUN chown -R app:app /home/app
RUN chmod 755 /home/app
USER app


ENV NODE_ENV production

COPY --from=builder /app/build .

EXPOSE 80
CMD ["yarn", "start"]
