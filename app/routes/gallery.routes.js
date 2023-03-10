module.exports = app => {
    const gallery = require("../controllers/gallery.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all gallery items
    router.get("/", gallery.findAll);
  
    // Retrieve a single gallery item with id
    router.get("/:id", gallery.findOne);
  
    app.use('/pa/gallery', router);
  };
  