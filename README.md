This template generates the project structure, dependencies and environment. Refer https://dev.to/alexeagleson/how-to-create-a-node-and-react-monorepo-with-git-submodules-2g83

### To bootstrap the project structure, dependencies and environment...
```
make PACKAGE_NAME=superapp-backend backend
```
and/or
```
make PACKAGE_NAME=superapp-frontend frontend
```
and finally...
```
make lerna
```

Now to be able to directly run `yarn start`, make the following changes:

In backend folder:
```
vi tsconfig.json
outDir:"./dist"
vi package.json
"scripts":{"start":"tsc && node ./dist/server.ts"}
```
