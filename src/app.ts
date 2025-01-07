import morgan from "morgan";
import express from "express";
import * as path from "node:path";
import viewRoutes from "./Route/viewRoutes";

const app = express();

// Parsing JSON
app.use(express.json());

// Adding Logs
app.use(morgan("dev"))

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// API
app.use("/", viewRoutes);

app.all('*', (req, res, next) => {
    res.status(404).json({
        error: "Not Found",
        msg: `Can't find ${req.originalUrl} on this server!`,
    })
});

app.listen(3000, () => {
    console.log("Server started on port 3000!");
})