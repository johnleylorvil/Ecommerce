# Simple Ecommerce

A simple ecommerce interface built with Next.js and containerized with Docker.

## Features

- Product listings
- Shopping cart functionality
- Responsive design
- Persistent cart using localStorage

## Docker Setup

This project is configured to run in Docker containers, making it easy to deploy anywhere that supports Docker.

### Prerequisites

- Docker and Docker Compose installed on your machine

### Running with Docker

1. Build and start the container:

\`\`\`bash
docker-compose up -d
\`\`\`

2. Access the application at http://localhost:3000

### Building the Docker image manually

\`\`\`bash
docker build -t simple-ecommerce .
docker run -p 3000:3000 simple-ecommerce
\`\`\`

## Deployment on Railway with Docker

1. Push your code to GitHub
2. Log in to your Railway account
3. Create a new project and select "Deploy from GitHub repo"
4. Select your repository
5. Railway will detect the Dockerfile and use it for deployment

## Development without Docker

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
\`\`\`

## Environment Variables

No environment variables are required for basic functionality.
