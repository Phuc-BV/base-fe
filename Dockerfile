# Stage 1: Build the Angular application
FROM node:16.14.2 as build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire project
COPY . .

# Build the Angular app
RUN npm run prod

# Stage 2: Serve the Angular app with any web server
FROM nginx:latest

# Copy the build output from the previous stage
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the Nginx server
EXPOSE 80
