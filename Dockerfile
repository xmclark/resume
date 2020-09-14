FROM node:lts
WORKDIR /opt/app
COPY package-lock.json .
COPY package.json .
RUN npm ci
COPY package-scripts.yaml .
COPY src/resume.md src/resume.md
COPY src/generate.js src/generate.js
RUN npx nps build
COPY src/index.js src/index.js
ENTRYPOINT ["npx", "nps", "watch"]
