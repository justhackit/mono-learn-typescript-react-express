folder_name=$1
cd packages
yarn create react-app $folder_name --template typescript
cd $folder_name
yarn remove typescript #create react-app might not give us latest version
yarn add -D typescript #so we will add latest version
