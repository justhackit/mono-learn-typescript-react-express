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

###To deploy only the changed Packages using lerna:
https://itnext.io/how-to-deploy-only-changed-packages-in-a-lerna-monorepo-7e5fb234b32a

```
npm install lerna
npx lerna bootstrap
npx lerna run deploy --since HEAD~1
```

# Dependencies added:

```
npx lerna add @mui/material --scope mui-admin-board
npx lerna add @emotion/react --scope mui-admin-board
npx lerna add @emotion/styled --scope mui-admin-board
npx lerna add @mui/x-data-grid --scope mui-admin-board
npx lerna add @mui/icons-material --scope mui-admin-board
npx lerna add react-router-dom@6 --scope mui-admin-board
npx lerna add react-pro-sidebar@0.7.1 --scope mui-admin-board
npx lerna add formik --scope mui-admin-board
npx lerna add yup --scope mui-admin-board
npx lerna add @fullcalendar/daygrid --scope mui-admin-board
npx lerna add @fullcalendar/timegrid --scope mui-admin-board
npx lerna add @fullcalendar/list --scope mui-admin-board
npx lerna add @nivo/core --scope mui-admin-board
npx lerna add @nivo/pie --scope mui-admin-board
npx lerna add @nivo/line --scope mui-admin-board
npx lerna add @nivo/bar --scope mui-admin-board
npx lerna add @nivo/geo --scope mui-admin-board
npx lerna add react-redux --scope mui-admin-board
npx lerna add redux --scope mui-admin-board
```
