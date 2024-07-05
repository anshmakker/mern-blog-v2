const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        const manualMongoUrl = "mongodb://localhost:27017"; // MongoDB server URL without database name

        // Specify database name in options object
        const options = {
            useNewUrlParser: true,
            dbName: "mydatabase" // Replace 'mydatabase' with the name of your database
        };

        await mongoose.connect(manualMongoUrl, options);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = connectDatabase;
