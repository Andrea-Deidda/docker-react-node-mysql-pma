FROM node:10

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 3001
EXPOSE 3001

# Run the command when the container starts
CMD ["npm", "start"]