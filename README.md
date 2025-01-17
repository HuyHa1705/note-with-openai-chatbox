


# Note-with-openai-chatbox Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all the required libraries:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
Then, run the development server:
 npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

API Requirements
This project requires the following APIs:

MongoDB Atlas API: For database management.
Pinecone API: For vector search capabilities.
OpenAI API: For integrating OpenAI's AI capabilities.
Clerk API: For authentication and user management.
Setting Up APIs
MongoDB Atlas:

Create a MongoDB Atlas account at MongoDB Atlas.
Set up a new cluster and get the connection string.
Add the connection string to your environment variables.
Pinecone:

Sign up for Pinecone at Pinecone.
Get your API key and add it to your environment variables.
OpenAI:

Sign up for OpenAI at OpenAI.
Get your API key and add it to your environment variables.
Clerk:

Sign up for Clerk at Clerk.
Get your API key and add it to your environment variables.

Environment Variables
Create a .env.local file in the root of your project and add the following environment variables:
DATABASE_URL="youre mongo server"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your clerk key
CLERK_SECRET_KEY=your clerk key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/notes
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/notes

OPENAI_API_KEY="your open ai api key"
PINECONE_API_KEY="your pinecone api key"

 
