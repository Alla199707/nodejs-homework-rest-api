const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        "Database connection successful"
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
