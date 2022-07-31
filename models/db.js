const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/sirket", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo connect success"))
  .catch((error) => console.log(error));
