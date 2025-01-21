FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install


# Copy the current directory contents into the container at /app
COPY . .

# Build the app
RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable

# Run app.js when the container launches
CMD ["node","dist/main.js"]