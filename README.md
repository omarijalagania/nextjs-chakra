<h1>Test Dashboard</h1>

<P style="font-size: 16px">Test Dashboard... sorting table</P>

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

#

### Prerequisites

- _Node JS @16.X and up_
- _npm @6 and up_

#

### Tech Stack

- [Next.js v12.2.1](https://nextjs.org) - full stack framework

- [Chakra UI v2.2.1](https://chakra-ui.com) - Chakra UI is a simple, modular and accessible component library

#

## Getting Started

#

### Clone repository

#

1\. First of all you need to clone Covid repository from github:

```sh
git clone https://github.com/omarijalagania/nextjs-chakra
```

2\. Next step requires install all the dependencies.

```sh
npm install
```

#

### How to setup environment variables

#

</hr>
<p style="margin: 10px 0">We use environment variables heavily in our projects. It allows us to have personalized configurations, but it also makes it easy to deploy our projects without having to store sensitive values in our codebase.</p>

#### A short introduction to the config file

<p>In the root of project you find example env file looks like this:</p>

```sh
NEXT_PUBLIC_SUPABASE_URL=API_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=Service_API_KEY
```

<p>Create your .env file in the root of project and copy everything from .env.example to your .env.local, in your terminal type:</p>

```sh
cp .env.example .env.local
```

<P>After you copy everything in your env file, replace dummy urls with your own</p>

#

3\. After installing all dependencies and env setup you can start project

```
 npm run dev

```

#

### Project Structure

```bash
├─── readme   # readme assets
│   ├─── assets       # project images and fonts
│   ├─── components   # reusable components
│   ├───├─── component-folder   # component folder name
│   ├───├───├─── index.js               # export default component
│   ├───├───├─── component.js     # react component
    ├─── pages      # react navigation screens
│   ├───├─── pages-folder  # react navigation screens
│   ├───├───├─── index.js            # export default screen
│   ├─── utils      # global utils
- .eslintrc.json   # eslint config file
- package.json     # dependency manager configurations
- .env.example     # env variables example

```

### Deployment

npm run build creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like /static/js/main.<hash>.js are served with the contents of the /static/js/main.<hash>.js file. For more information see the [production](https://create-react-app.dev/docs/production-build/) build section.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
