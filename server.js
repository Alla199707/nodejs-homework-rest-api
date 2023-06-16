// const app = require("./app");

// app.listen(3000, () => {
//   console.log(
//     "Server running. Use our API on port: 3000"
//   );
// });

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
    console.log(error);
    process.exit(1);
  });
