// server.js
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/yourDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB", err);
  });

app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//cd ~/Desktop/"FRONT-END 2023 FALL 6150"/WEEK10
//npm start

// http://localhost:3000/user/create
// {
//     "fullName": "John Doe",
//     "email": "john@example.com",
//     "password": "password123"
//   }

// http://localhost:3000/user/edit?email=john@example.com
// {
//     "fullName": "Johnny Doe",
//     "password": "newpassword123"
//   }

// http://localhost:3000/user/delete
// 在“Params”部分添加：
// Key: email
// Value: john@example.com

// http://localhost:3000/user/getAll
