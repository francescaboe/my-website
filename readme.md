React project without CRA

see https://medium.com/@claude.ando/setting-up-a-react-project-without-create-react-app-6ff7fea9ca51

see for ts: https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph
- package.json
- react and reactDom
- babel (devDependencies) - interpreter
- webpack configurations - bundler to creat optimized output file
- structure:
  - ├── public/
        ├── index.html
    ├── src/
        ├── App.tsx
        ├── index.tsx
    ├── .babelrc
    ├── package.json
    ├── webpack.config.js
- add start and build scripts to package.json
- npm start : app runs http://localhost:8080/
- add .gitignore


TODO
-add ts
-add absolute path
-add prettier and eslint
-add dark mode (francesca - darkchesca)
