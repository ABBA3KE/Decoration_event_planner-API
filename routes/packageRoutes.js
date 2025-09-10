import express from "express";
const router = express.Router()
import Package from "../model/packageModel.js";

// const router = express.Router();

// Get all packages
router.get("/", async (req, res) => {
  try {
    const packages = await Package.find().populate("serviceId");
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single package
router.get("/:id", async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id).populate("serviceId");
    if (!pkg) return res.status(404).json({ message: "Package not found" });
    res.json(pkg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create package
router.post("/", async (req, res) => {
  try {
    const pkg = new Package(req.body);
    await pkg.save();
    res.status(201).json(pkg);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update package
router.put("/:id", async (req, res) => {
  try {
    const pkg = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pkg) return res.status(404).json({ message: "Package not found" });
    res.json(pkg);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete package
router.delete("/:id", async (req, res) => {
  try {
    const pkg = await Package.findByIdAndDelete(req.params.id);
    if (!pkg) return res.status(404).json({ message: "Package not found" });
    res.json({ message: "Package deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
