const express = require('express');
const multer = require('multer');
const path = require('path');
const Member = require('../models/Member');

const router = express.Router();

// ✅ Setup multer to save uploaded files into /uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// ✅ POST route with multer middleware
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, role, email } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!image) {
      return res.status(400).json({ error: 'Image upload failed' });
    }

    const newMember = new Member({
      name,
      role,
      email,
      image
    });

    await newMember.save();
    res.json(newMember);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add member' });
  }
});

// ✅ GET all members
router.get('/', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// ✅ GET member by ID
router.get('/:id', async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

module.exports = router;
