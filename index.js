const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const CertificateCategory = require("./models/CertificateCategory");
const Question = require("./models/Question");

const app = express();
app.use(bodyParser.json());

// Mongo connection
mongoose.connect("mongodb://localhost:27017/certificates", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Category
app.post("/categories", async (req, res) => {
  const category = new CertificateCategory(req.body);
  const result = await category.save();
  res.json(result);
});

// Get all Categories
app.get("/categories", async (req, res) => {
  const categories = await CertificateCategory.find();
  res.json(categories);
});

// Question
app.post("/questions", async (req, res) => {
  const question = new Question(req.body);
  const result = await question.save();
  res.json(result);
});

// Get all questions with category
app.get("/questions", async (req, res) => {
  const questions = await Question.find().populate("categoryId", "name");
  res.json(questions);
});

// server
app.listen(3000);
