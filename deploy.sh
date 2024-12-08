# go to directory
cd /opt/ganeshapp/schoolapp
#get latest code from repo
git pull
#run install
npm install
#stop app
pm2 stop 1
#run build
npm run build
#start app
pm2 start 1
