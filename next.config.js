// must restart server whenever you make changes in next.config
module.exports = {
  
  env: {
    MONGO_SRV: "mongodb+srv://dcujoe:1234@reactfurnicommerce.bz5ct.mongodb.net/furnicommerce?retryWrites=true&w=majority",
    JWT_SECRET: "cooljoo",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dauy2gohl/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
