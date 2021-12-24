# DevBlog with ReactJS and TailwindCSS

# Developemtn

1. Install create-react-app
2. Install autofixer
```js
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
/* Output: 
Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js
*/
```

3. Modify tailwind config file. 

```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# 2. Editor setup

- Get VSCode and Tailwind CSS Intellisense

# 3. Preprocessor
- It’s important to note that you don’t need to use a preprocessor with Tailwind

# 4 Experiencing Tailwind syntax

- 