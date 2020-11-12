# Test
FROM node:14.9.0-alpine as test-target
ENV NODE_ENV=development
ENV PATH $PATH:/usr/src/app/node_modules/.bin

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --pure-lockfile

COPY . .

# Build
FROM test-target as build-target
ENV NODE_ENV=production

# Use build tools, installed as development packages, to produce a release build.
RUN yarn build


# Archive
FROM node:14.9.0-alpine as archive-target
ENV NODE_ENV=production
ENV PATH $PATH:/usr/src/app/node_modules/.bin

WORKDIR /usr/src/app

# Include only the release build and production packages.
COPY --from=build-target /usr/src/app/node_modules node_modules
COPY --from=build-target /usr/src/app/.next .next

EXPOSE 3000
CMD ["next", "start"]
