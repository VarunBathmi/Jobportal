const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
  {
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totaljobsPosted: { type: Number, default: 0 },
    totalApplicationsRecived: { type: Number, default: 0 },
    totalHired: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

modulr.exports=mongoose.model("Analytics",analyticsSchema)