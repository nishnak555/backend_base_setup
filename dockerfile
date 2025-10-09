# -------- Stage 1: Build --------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build TypeScript
RUN npm run build

# -------- Stage 2: Production --------
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

# Copy build output from builder
COPY --from=builder /app/dist ./dist

# Copy .env if needed at runtime (or mount separately)
# COPY .env .env

EXPOSE 5000

# Start the server
CMD ["node", "dist/server.js"]
