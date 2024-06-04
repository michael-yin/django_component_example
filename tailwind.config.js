const Path = require("path");
const pwd = process.env.PWD;

// We can add current project paths here
const projectPaths = [
  Path.join(pwd, "./frontend/src/**/*.js"),
  Path.join(pwd, "./django_component_app/templates/**/*.html"),
  // django-viewcomponent
  Path.join(pwd, "./components/**/*.py"),          // new
  Path.join(pwd, "./components/**/*.html"),        // new
  // add js file paths if you need
];

const contentPaths = [...projectPaths];
console.log(`tailwindcss will scan ${contentPaths}`);

module.exports = {
  content: contentPaths,
  theme: {
    extend: {},
  },
  plugins: [],
}
