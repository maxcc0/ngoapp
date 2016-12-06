# domutti-app
“Do Mutthi ka dum” (Power in couple of fist full) is a NGO run by XXXX is trying to make a difference in the lives of under privileged children of the locality by providing them with the toys , clothes and other basic products collected from local donors. 
The out reach of this organization depends on enhancing its digital presence as well as increasing its digital penetration in the locality. Keeping that in mind, it seeks to develop a web app / android app which will enable them to get more donors as well as it will enable the volunteers to efficiently collect the donations and drop the same at designated locations.

### TechStack
The app uses ReactJS for UI, PHP based backend server and mySql DB.

### Prerequisites
```
php capable hosting environment
mySql DB
SSL certificate installed (needed of google apis)
```

### Installation
```
download zip
create mysql DB with the scripts present in migrations folder
update DB connection string in dist/api/database.class.php
deployment is present in dist folder, copy the contents and 
put it on the server
```

### Develop
```
You'd need a nodejs based development environment
install nodejs
run git clone https://github.com/maxcc0/fabric-ui.git
npm i <This will install all the dependencies>
npm start <This will start the app at http://localhost:8080/>
```

#### Build Src
```
npm run build <This is build the JS scr and put content in dist folder>
```