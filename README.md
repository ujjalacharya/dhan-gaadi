# API, CRM, Client and Mobile application of dhan-gaadi, an online bus booking system

## Demo (Client => NextJS): 

![](./demo/client.gif)
### To run -> 
* #### clone the entire repo
* #### go to server repo
* #### make environment file with the following keys' values:
```
MONGO_URI = "path to mongodb url"
userEmail = "your email"
userPass = "your password"
JWT_SECRET = "your secret here"
```
* #### yarn
* #### yarn server
* #### go to client repo
* #### yarn
* #### yarn dev



## Demo (CRM => React):
![](./demo/CRM.gif)
### To run -> 
* #### clone the entire repo
* #### go to server repo
* #### make environment file with the following keys' values:
```
MONGO_URI = "path to mongodb url"
userEmail = "your email"
userPass = "your password"
JWT_SECRET = "your secret here"
```
* #### yarn
* #### yarn server
* #### go to CRM repo
* #### make environment file with the following keys' values: 
```
REACT_APP_API_URL = http://localhost:8525/api
REACT_APP_SERVER_ROUTE = http://localhost:8525
REACT_APP_JWT_SECRET = "your secret here"
```
* #### yarn
* #### yarn start

## Demo (Mobile App => React-Native) *Under construction*
![](./demo/App.gif)
### To run -> 
* #### clone the entire repo
* #### go to app repo
* #### yarn
* #### having expo installed in your system, expo start