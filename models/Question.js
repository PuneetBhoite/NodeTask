const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    questionText: {
      type: String,
      required: true,
      trim: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CertificateCategory",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);
