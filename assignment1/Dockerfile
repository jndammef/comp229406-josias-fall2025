FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci && npm cache clean --force

COPY . .

RUN npm run build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodeapp

# Set ownership and switch user
RUN chown -R nodeapp:nodejs /app
USER nodeapp

# Expose port 3000 since we are using that in the start script
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start application (we could have used run dev too, but start is more appropriate for production)
CMD ["npm", "start"]