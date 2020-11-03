# instant - FullStack Project

instant was made to experiment more with fullStack development in ReactJs, NodeJs, MongoDB and lots of libraries.

try it:

https://instant-phi.vercel.app/

[![](https://github.com/maradelynie/instant/blob/master/video.png)](https://www.youtube.com/watch?v=UC28as3uB0k)

### Next fase

- keep runing with closed page
- UI tests with Snapshot
- Register and Login
- PWA

## Getting Started

For to have this project running on your computer you just need to clone the the repo and run $ yarn or $ npm install.

### Prerequisites

First of all you will need NodeJs, a browser that can run V8 engine like Chrome and a packege manager like NPM (but I strongly recommend to use Yarn)

[Get Node Here](https://nodejs.org/en/)

[Get Yarn Here](https://yarnpkg.com/)

This project uses DataBase from MongoDB, for use that you will need to have an Cluster with a database "askMe" on atlas MongoDB.

[SingUp MongoDB Here](https://cloud.mongodb.com/)

## Installing

To open the Dev mode you need to clone the repo, install and initialize both, backend and frontend.

### preparing;

You will need to set some environment variables:
Create an ".env" file on the backend folder that contains these variables;

```
DB_CONNECTION="mongodb+srv://<username>:<password>@cluster0-xfzvp.mongodb.net/askMe?retryWrites=true&w=majority"
PORT=3001
```

To configure the fonrtend API adress you can put your own or do use mine.
For to use your API adress go to the file frontend>src>api>index.js

change in:

```
const base = "<your new url>";
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

## Running the tests

There is unitary tests for all utils functions used here.
it can be run with the following command line at the frontend folder:

```
$ npm run test    (or)       $ yarn test
```

## Deployment

The app is deployed on heroku in the following url:

[frontend](https://instant-phi.vercel.app/)

[backend](https://dashboard.heroku.com/apps/instant-back)

## Made With

- reactJs
- Redux
- Sass
- Styled components
- Jest
- axios
- Express
- mongoose
- mongoDB

- git
- vercel
- heroku

-See more at packege.json on backend and frontend folder

## Authors

**Mara Oliveira**

## License

MIT
