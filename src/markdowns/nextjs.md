# NextJS

You will understand......
- Server Side Rendering (SSR)
- Static Generation

# Introduction

- What are the difference between reactjs and nextjs?
- NextJs allows us to create production-ready application.
- Official Documentation: nextjs.org
- Many big companies such as Twitch, Nike, Netflix, Marvel, Expo, Ferrari use nextjs

# Benefits:
- It shows an error code without you having to implement error pages. This makes the debugging process easier and faster.
- You have to import most of the libraries that you need to import with ReactJS.
- The page on the nextjs will be pre-rendered.
    - ReactJS itself is *Client-side render*
    - **Client-side render:**
        - ReactJS > One Div > 


# Q & A

## How do you start nextjs application?
- Run below script
```bash
# Install latest nextjs app.
npx create-next-app@latest
```
## How do you run the dev server?
- Run below script
```bash
# Start a development server.
npm run dev
```
## What are the difference between the library and framework?

- If you create a index.js file in the pages folder, and export return something as below, it will return hi on the page.

index.js
```js
export default function Home() {
  return "hi";
```

- Library: you call and you use the library
- Framework: you put the code in the right place.
    - you have to follow certain rules. 
- ReactJS starts with index.js, but NextJS does not have index.js file. 


