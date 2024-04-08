import Express from "express";
import shopRouter from "./routes/products.js";
import bodyParser from "body-parser";

const app = Express();

app.use(Express.static("public"));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.set("views", "views");

app.get("/", (req, res) => {
  res.render("home", {});
});

app.use("/shop", shopRouter);

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});
