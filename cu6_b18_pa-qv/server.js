const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobRoutes = require("./routes/job")
const employerRoutes = require("./routes/employer")
const applicationRoutes = require("./routes/application")
const app = express();
const port = 5123;

app.use(express.json());

// INSTRUCTION: setup cors
const corsHandler = cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE,PATCH",
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
    preflightContinue: true,
});

app.use(corsHandler);

// INSTRUCTION: setup MongoDB Connection
mongoose
    .connect("mongodb://localhost:27017/Job-Application-PA")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => console.log(err));

// INSTRUCTION: setup routes
app.use("/jobs", jobRoutes);
app.use("/employers", employerRoutes);
app.use("/applications", applicationRoutes);

app.get("/", (req, res) => {
    res.send("Good luck with the exam!");
});

// Server listening
app.listen(port, () => console.log(`Server started on port ${port}`));
