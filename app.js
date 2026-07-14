require("dotenv").config();

const express = require("express");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();

app.set("view engine","ejs");

app.use(expressLayouts);

app.set("layout","layouts/layout");

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")));

const pool = require("./config/db");

(async () => {
    try {
        const connection = await pool.getConnection();

        console.log("✅ Database Connected");

        connection.release();
    } catch (err) {
        console.error("❌ Database Connection Failed");
        console.error(err.message);
    }
})();

const publicRoutes = require("./routes/publicRoutes");
app.use("/", publicRoutes);

//sitemap
const sitemapRoute = require('./routes/sitemapRoute');
app.use('/', sitemapRoute);


app.listen(3001,()=>{
    console.log("Server Start");
});