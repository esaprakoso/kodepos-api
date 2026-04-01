# ---------- STAGE 1: BUILD ----------
FROM node:20-alpine AS builder

WORKDIR /app

# install deps (cache friendly)
COPY package*.json ./
RUN npm install

# copy source
COPY . .

# build (hasilkan dist/)
RUN npm run build


# ---------- STAGE 2: RUNNER ----------
FROM node:20-alpine

WORKDIR /app

# hanya copy yang dibutuhkan
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# install production deps only
RUN npm install --omit=dev

# optional: non-root user
USER node

# expose port (optional, sesuaikan app)
EXPOSE 3001

# start app
CMD ["node", "dist/server.js"]