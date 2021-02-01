require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const appRoute = require("./routes/appRoutes");
const app = express();
const PORT = process.env.PORT || 5000;
app.use("/api", appRoute);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongoDB"))
  .catch((error) => console.error(error));
app.listen(PORT, () => console.log(`listening on por ${PORT}`));
