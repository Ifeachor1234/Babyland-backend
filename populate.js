require("dotenv").config();

const mongoose = require("mongoose");

const productModel = require("./models/Product");

const productAPI = require("./json/products.json");

const upload = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Database Connected");

    console.log("Deleting previous products...");
    await productModel.deleteMany();

    console.log("previous products deleted sucessfully");

    console.log("Uploading products or updated products");

    try {
      await productModel.create(productAPI);

      console.log(productAPI);

      console.log("Product uploading sucessfully");
    } catch (creationError) {
      console.log("Error uploading products:", creationError);
    }

    process.exit(0);
  } catch (error) {
    console.log("Error:", error.message);

    console.log("Unable to connect");
    process.exit(1);
  }
};

upload();
