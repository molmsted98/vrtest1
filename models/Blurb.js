const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const blurbSchema = new mongoose.Schema({
  email: String,
  fileName: String
}, { timestamps: true });

const Blurb = mongoose.model('Blurb', blurbSchema);

module.exports = Blurb;
