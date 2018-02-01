node getDB.js > data.json
node createSites.js
cd docs/
currentDate=`date`
git add -A ..
git pull origin master
git commit -m "Directory updated on: $currentDate"
git push origin master
