const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

app.get("/", (req, res) =>{
    res.send("HI");
});
app.get("/testlisting", async (req, res) =>{
    let sampleListing = new Listing({
        title: "Beautiful Goa",
        description: "Enjoy the serene beaches of Goa with this exclusive listing.",
        price: 1200,
        location: "Goa", 
        country: "India"
    });
    await sampleListing.save();
    console.log("Sample listing saved:", sampleListing);
    res.send("Listing created");


});

app.listen(8080, () => {
    console.log("Server is running");
});

// Database connection
const MONGO_URL="mongodb://127.0.0.1:27017/TripHaven";
main()
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}