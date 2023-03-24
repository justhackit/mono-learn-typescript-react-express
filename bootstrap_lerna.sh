yarn init 
yarn add -D lerna
npx lerna init
cat <<EOT > lerna.json
{
    "packages":[
        "packages/*"
    ],
    "version":"0.0.0",
    "npmClient":"yarn",
    "useWorkspaces":true
}
EOT
awk 'NR==5{print "\"private\":true,"}1' package.json > package_bkp.json
rm package.json
mv package_bkp.json package.json
yarn install

#Now, lets say we want to add a dependency for both the projects and keep them in sync
npx lerna add lodash
