# Weather App Nodejs

#### Project Can be found in here :
 **[Live version](https://stark-ocean-15905.herokuapp.com)**
<p align="center">
	
<img src="https://user-images.githubusercontent.com/57604500/121777975-076bc100-cb95-11eb-9bf5-231232f9b13a.png" width=956>
<br />
<h3 align="center">Weather App NODE.JS</h3>
</p>

# Weather App


### Weather App Node.js (Asynchronous Node.js)


* NOTES 

```
   - Run node app.js ;
   - Call Stack --> Node APIs ---> (Event Loop) Callback Queue ;
   - Search in browser : http://api.weatherstack.com/current?access_key=5d603d1b7243e2be9be5afe01e214167&query=37.8267,-122.4233 ;
   - npm init ;
   - npm init -y ;
   - npm i request@2.88.0 ;
   - node app.js ;
   - node app.js ;
   - Notes : ( If you use darksky Api key(old) --> (console.log(data.currently) OR, If you use weatherstack (new) ---> (console.log(data.current)) ;
   - node app.js ;
   - (ERROR in github to solve): (fatal: Could not read from remote repository.) =====> Run this command --> git push origin dev ;
   - node app.js Boston ; 
   -  node app.js "New York" ;
   - node app.js dublin ;
   - 


```



* NOTES : WEB SERVERS

```
   - npm init -y ;
   - npm i express@4.16.4 ;
   - node src/app.js ;
   - // Lesson 1 : Hello Express! ;
   - VISIT localhost:3000/ --- after running node src/app.js command;
   - Shut down : Press ctrl + c;
   - Run the server: nodemon src/app.js ;
   - see in browser: http://localhost:3000/help ;
   - see in the browser: http://localhost:3000/about ;
   - see in the browser: http://localhost:3000/weather ;
   - // Lesson 2: Serving up HTML and JSON ;
   - see in the browser: http://localhost:3000/help.html;
   - see in the browser: http://localhost:3000/about.html;
   - // Lesson 3: Serving up Static Assets ;
   - // Lesson 4: Serving up CSS, JS, Images and More ;
   - // Dynamic Pages with Templating: 
          npm i hbs@4.0.1 ;
   - Delete static file from public folder(index.html & about.html & help.html);
   - // Customizing the Views Directory;
   - // Advanced Templating: 
   - // 404 Pages: see in the browser--> http://localhost:3000/help/data + http://localhost:3000/help/test;
   - // Styling the Application : Part 1 & 2;
   - Run this command nodemon src/app.js -e js,hbs;
   - ACCESSING API FROM BROWSER:
   - See in browser: localhost:3000/products?search=games&rating=5 ;
   - Run the server: nodemon src/app.js -e js,hbs ;
   - See in browser: http://localhost:3000/weather?address=boston ;
   - Run now npm i request@2.88.0 ;
   - Run this nodemon src/app.js -e js,hbs ;

   * HEROKU SETUP :
   - heroku -v ;
   - heroku login ;
   - git --version;
   - Setting up SSH KEYS: ls -a -l ~/.ssh ;
   - ssh-keygen -t rsa -b 4096 -C "email address" ;
   - eval "$(ssh-agent -s)" ;
   - ssh-add -K ~/.ssh/id_rsa ;
   - heroku keys:add ;
   - heroku create node-weather-app ;
   - npm run start ;
   - git remote ;
   - git push origin master --force;
   - git push heroku master ;
  - 


```
