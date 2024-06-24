const express = require("express");
const bodyParser = require("body-parser");

const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async()=> {
      const app = express();

      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:true}));
      app.listen(PORT,()=> {
        console.log(`Server started at ${PORT}`);

      });
}

setupAndStartServer();