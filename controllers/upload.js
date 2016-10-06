var Blurb = require('../models/Blurb')

/**
 * GET /upload
 * Upload page.
 */
exports.index = (req, res) => {
  res.render('upload', {
    title: 'Upload'
  });
};

/**
 * POST /upload/uploadGo
 */
exports.postImage = (req, res, next) => {
  //Create a new image for the upload
  const blurb = new Blurb({
    email: req.user.id,
    fileName: req.file.filename
  });

  //Save the new image to the database
  blurb.save((err) => {
    if (err) { return next(err); }
  });

  //Return to the image upload page
  req.flash('success', { msg: 'File was uploaded successfully.' });
  return res.redirect('/upload');
};

/**
 * GET /getPhotos/:userId
 */
exports.getImages = (req, res, next) => {
  //Find all photos that correspond to the user.
  const userId = req.params.userId;

  Blurb.find({ email: userId }, (err, usersPictures) => {
    if (err) { return next(err); }
    if (existingUser) {
      req.flash('errors', { msg: 'Account with that email address already exists.' });
      return res.redirect('/signup');
    }
    user.save((err) => {
      if (err) { return next(err); }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
    });
  });
};
