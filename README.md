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
You'd need a nodejs based development environment and a more-than-basic 
understanding of node js, npm

```
install nodejs
run git clone https://github.com/maxcc0/ngoapp.git
npm i <This will install all the required dependencies>
npm start <This will start a local webpack dev server at http://localhost:8080/>
```

#### Build Src
Distribution package is sourced into /dist folder after running the command. Please
that there are 2 index files there:<br />
index.html is required for local development<br />
index.php is required for the production php server <br />

```
npm run build <This is build the JS scr and put distirbution ready content in /dist folder>
```