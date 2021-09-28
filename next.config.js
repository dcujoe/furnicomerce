// must restart server whenever you make changes in next.config
module.exports = {
  
  env: {

    MONGO_SRV: "mongodb+srv://dcujoe:1234@reactfurnicommerce.bz5ct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "<insert-cloudinary-url>",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
