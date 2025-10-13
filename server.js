const express = require("express");
const path = require("path");
const app = express();

const {MongoClient} = require("mongodb");
const uri = "mongodb+srv://slavikden09_db_user:VPG9FNVpVF5upkhH@cluster0.fetmmc8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);



let ordersCollection; // Make it accessible globally

async function connectDB() {
    try {
        await client.connect();
        console.log("Conected to MongoDB")

        const db = client.db("ordersDB");
        const ordersCollection = db.collection("orders");


    } catch (err) {
        console.error("MongoDB connection error: ", err)
    }
}

connectDB();



app.use(express.static(path.join(__dirname, "")));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.post("/api/post", async (req, res) => {
    try {
        const order = req.body; // read the JSON file sent from the webpage
        console.log("New order: ", order)
    
    await ordersCollection.insertOne(order); // save to MongoDB;
    res.json({message: "Order saved!"})
    } catch (err) {
        console.error("Error saving order: ", err);
        res.status(500).json({error: "Something went wrong"})
    }

})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})