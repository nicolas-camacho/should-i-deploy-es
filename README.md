This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project has been created just for learning purposes, using the following resources:

 - [Should I deploy today](https://shouldideploy.today/) - This app has been taken as a base for the development of this project, taking advantage of its idea, architecture and API
 - [OpenAI](https://openai.com/api/) - In order to translate the messages received by the "Should I deploy" API, the Open AI API is used through the completion's functionality 

# Running the project

This project can be visualized in three ways, both ways need you to have an environment variable, since it is using the OpenAi API to perform the translation of the messages.

## Set up ENV variable

create a `.env.local` file and add:

```
OPENAI_API_KEY={"your OpenAI API key"}
```

## Firts way (using local enviroment)

You can clone the repository and use node to run the project

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
```

## Second way (deploying the project)

Here you can use your favorite service to deploy the project, just make sure of setting the environment variable.

## Third way (Docker)

Make sure you have docker install in your machine and have created the `.env.local` file once you cloned the repository.

```bash
docker build -t {name of image}
# then
docker run -p 3000:3000 --env-file ./.env.local {name of image}
```

# Testing the project

This project implement [Playwright](https://playwright.dev/) for making e2e testing, you can run the test locally in the following way:

```bash
npm run build
npm start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

Then in another terminal run:

```bash
npm run test:e2e
# or
yarn run test:e2e
# or
pnpm run test:e2e
```
