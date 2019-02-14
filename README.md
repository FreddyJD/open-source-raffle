# open-source-raffle
Open source raffle is an open source software created to fulfil the need to subscribe to a "contest maker" with a public RESTfull easy to use.

We divided our software into two main segments designed so any developer can pick up the code at wherever they feel is their strongest point.

## 👷‍♂️ Front-end infrastructure 
Our Fron-End is created in Next.JS/React which allows any person with an entry-level in react to pick up the code and start coding. 


NextJs is an awesome library that does all the heavy lifting from React and helps keep the front-end rendering fast.

### 📁 Folder structure  
```
Front-End 
│   settings.js                 # Auth0 ClientID & Domain config file
│
└───Components
│   │   MainPage                # The index components 
│   │   Raffles                 # The Raffle "user-side" components
│   │   Users                   # All the "Dashboad" components 
│ 
└───Pages
│   │   Index                   # Single Page - Simple route 
│   │   Dashboard               # Single Page - Main component route  > ./Component/User/index
│   │   Raffles                 # Simple page with data Fetch.
│   │   Login & Redirect        # Page Helpers 
│   
└───Static
    │   auth.js                 # All the authentication methods (Login/Logout/...) 
    │   auth0.js                # Auth0 methods are define
    │   secure-template.js      # A HOC (High Order component) to protect routes
    │   template.js             # A HOC (High Order component) to use on un protected routes
    │ 
    └───Assets                  # Normal CSS files, fonts, static images and more.
```

## 👷‍♂️ Back-end infrastructure 
This Back-end on the other side its planned to be a flexible NodeJS/Express server working with Prisma as the ORM layer to a "In-development" simple GraphQL API layer.

Meanwhile, our server side is created to handle daily updates with Cron Jobs that performs a check in every single Raffle that your users are running.

### 📁 Folder structure  
```
Back-End 
│   prisma.yml                  # Entry point to your Prisma Server
│   datamodel.prisma            # Where you create your TypeDef to your database Schema
│
└───Controllers
│   │   RaffleAPI.js            # a RESTfull express route that helps with the POST/GET req
│   │   sellerAPI.js            # [deprecated] a RESTfull express route that helps user fetching
│ 
└───Models
│   │   dbCron.js               # Daily updater in the database
│   │   index.js                # Entry point
│   
└───Generated                   # Generated data from Prisma CLI [/prisma generate]
```

## Installation

Use the package manager [npm](https://www.npmjs.com/) to instal the both sides of the application.

##
1. Lets run the Front-End 🤟  
```bash
$ cd front-end
```
2. Install all the dependency of the app
```node
$ npm install
```
3. Get your credentials in [Auth0.com](https://auth0.com) and add *[localhost:3000/redirect](localhost:3000/redirect)* as your callback URL.

4. Modify the file settings.js with your own credentials.

5. Start the beast 🐻with
```node
$ npm run dev
```
##
1. Lets run the 🚀 Back-End   
```bash
$ cd back-end
```
2. Install all the dependency of the app
```node
$ npm install
```

5. Start the serverwith
```node
$ nodemon app.js or node app.js
```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)