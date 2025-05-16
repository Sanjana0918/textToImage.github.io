FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve using NGINX
FROM nginx:latest

WORKDIR /usr/share/nginx/html
# Remove default static files
RUN rm -rf ./*

# Copy React build output to NGINX directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


