const express = require("express");
const router = express.Router();
const fileUploader = require("../config/cloudinary.config");
const user = require("../models/User.model");


router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.put('/api/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  const { image } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, { image }, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/api/users/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST "/api/upload" => Route that receives the image, sends it to Cloudinary via the fileUploader and returns the image URL
router.post("/upload", fileUploader.single("image"), (req, res, next) => {
  // console.log("file is: ", req.file)
 
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  
  // Get the URL of the uploaded file and send it as a response.
  // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend
  
  res.json({ fileUrl: req.file.path });
});


module.exports = router;
