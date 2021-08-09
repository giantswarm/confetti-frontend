# Install.
FROM node:16.6.1-alpine as install-target
ENV NODE_ENV=development
ENV PATH $PATH:/usr/src/app/node_modules/.bin

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --pure-lockfile

COPY . .

# Build.
FROM install-target as build-target
ENV NODE_ENV=production

# Use build tools, installed as development packages, to produce a release build.
RUN yarn build

# Archive.
FROM node:16.6.1-alpine as archive-target
ENV NODE_ENV=production
ENV PATH $PATH:/usr/src/app/node_modules/.bin

WORKDIR /usr/src/app

# Include only the release build and production packages.
COPY --from=build-target /usr/src/app/scripts scripts
COPY --from=build-target /usr/src/app/public public
COPY --from=build-target /usr/src/app/node_modules node_modules
COPY --from=build-target /usr/src/app/.next .next
COPY --from=build-target /usr/src/app/package.json package.json

RUN chown 1000:1000 -R ./

EXPOSE 3000
CMD ["sh", "-c", "yarn make-env && yarn start"]
