const express = require("express");
const app = express();
const port = 5000;
var cors = require("cors");
const fs = require("fs");

app.use(cors());
app.use(express.json());

var corsOptions = {
  origin: "http://localhost:4200",
};

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./storage");
}

const localStorageService = require("./src/services/localStorageService");

let paitings = JSON.parse(fs.readFileSync("storage/paintings", "utf8"));
let categories = JSON.parse(fs.readFileSync("storage/categories", "utf8"));

localStorage.setItem("paintings", JSON.stringify(paitings));
localStorage.setItem("categories", JSON.stringify(categories));

// Get all paitings
app.get("/api/paintings", cors(corsOptions), (req, res) => {
  let paintings = localStorageService.all("paintings");
  res.status(200).json(paintings);
});

// Get all categories
app.get("/api/categories", (req, res) => {
  let categories = localStorageService.all("categories");
  res.status(200).json(categories);
});

// app.get("/api/paintings/:categoryId", (req, res) => {
//   const categoryId = parseInt(req.params.categoryId);
//   let paintings = localStorageService.all("paintings");
//   const filteredPaintings = paintings.filter(
//     (painting) => painting.categoryId === categoryId
//   );
//   res.status(200).json(filteredPaintings);
// });

app.get("/api/painting/:paintingId",cors(corsOptions), (req, res) => {
  const paintingId = parseInt(req.params.paintingId);
  let paintings = localStorageService.all("paintings");
  const painting = paintings.find((painting) => painting.id === paintingId);

  if (painting) {
    res.status(200).json(painting);
  } else {
    res.status(404).json({ error: "Painting not found" });
  }
});

app.get("/api/category/:categoryId", (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  let categories = localStorageService.all("categories");
  const category = categories.find((category) => category.id === categoryId);

  if (category) {
    res.status(200).json(category);
  } else {
    res.status(404).json({ error: "Category not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
