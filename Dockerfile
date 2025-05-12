FROM node:18.18.0-alpine AS deps
WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies with more verbose logging
RUN npm install --legacy-peer-deps --verbose

# Builder stage
FROM node:18.18.0-alpine AS builder
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
# Copy project files
COPY . .

# Add more verbose logging during build
RUN echo "Starting build process..." && \
    NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Runner stage
FROM node:18.18.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Create a non-root user to run the app
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set proper ownership
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set hostname
ENV HOSTNAME "0.0.0.0"
ENV PORT 3000

# Start the application
CMD ["npm", "start"]
