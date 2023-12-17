const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
const blogsRoutes = require("./blogsRoutes");
mongoose
  .connect(
    "mongodb+srv://rageh:0cFcSkCjHBACv6n8@cluster1.2ivn4tk.mongodb.net/crud-operations-blogs"
  )
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/blogs", blogsRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`App running running on port ${PORT}`);
});
