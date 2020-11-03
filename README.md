# pizz'n'go - FrontEnd Project

pizz'n'go is a frontend project developed in ReactJs, SCSS with a simple backend in NodeJs using MongoDB.

try it:

https://pizz-n-go.vercel.app/

## Getting Started

For to have this project running on your computer you just need to clone the the repo and run $ yarn or $ npm install.

### Prerequisites

First of all you will need NodeJs, a browser that can run V8 engine like Chrome and a package manager like NPM (but I strongly recommend to use Yarn)


[Get Node Here](https://nodejs.org/en/) 

[Get Yarn Here](https://yarnpkg.com/) 

This project uses DataBase from MongoDB, for use that you will need to have an Cluster with a database "askMe" on atlas MongoDB.

[SingUp MongoDB Here](https://cloud.mongodb.com/)

## Author comments

This is a fast development, it still needs a lot to improve, but as it was a time limit to finish. I'm leaving the next features for the next releases.
Any comments or ideas feel free to collaborate.


## Installing

To open the Dev mode you need to clone the repo, install and initialize both, backend and frontend.


### preparing;

You will need to set some environment variables:
Create an ".env" file on the backend folder that contains these variables;

```
DB_CONNECTION="mongodb+srv://<username>:<password>@cluster0-xfzvp.mongodb.net/askMe?retryWrites=true&w=majority"
PORT=3001
```

To configure the frontend API url create a .env file with;

change in:

```
REACT_APP_BD_URL = "<api base url>";
```

### install;

Open your terminal and navigate to the backend folder on the cloned repo folder and install the dependencies with this command line;

```
$ npm install    (or)       $ yarn 
```
(wait till finished)

Now navigate to frontend folder and use the same;

```
$ npm install    (or)       $ yarn 
```
(wait till finished)


### run the server;

With all the installation finished, now open the backend folder on your terminal again and run the next command line;

```
$ npm run server   (or)       $ yarn server
```

It will prepare the server. When you receive the port info your server is ready to go.


### run the app;

Now open another terminal and past the following command line;

```
$ npm run start   (or)       $ yarn start
```

Now the application is running. It will open on your browser.(if not just open http://localhost:3000/ and wait till load)


## Deployment

The app is deployed on heroku in the following url:


[frontend](https://pizz-n-go.vercel.app/) 

[backend](https://pizz-n-go.herokuapp.com/api/orders)


## Made With

* reactJs
* Redux
* Sass 
* axios 
* Express 
* mongoose
* mongoDB

* git
* vercel
* heroku

-See more at package.json on backend and frontend folder

## Authors

**Mara Oliveira** 


## License

 MIT
