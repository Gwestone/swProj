#build stage
FROM node:18-alpine3.15 AS builder

#crete project file and copy project to it
WORKDIR /frontend
COPY . .
#install dependencies
RUN npm ci
#build project
RUN npm run build

# ==== RUN =======
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /frontend/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
