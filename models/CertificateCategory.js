const mongoose = require("mongoose");

const CertificateCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "CertificateCategory",
  CertificateCategorySchema
);
