FROM node:14

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the command when the container starts
CMD ["npm", "start"]