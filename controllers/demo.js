/**
 * GET /demo
 * Upload page.
 */
exports.index = (req, res) => {
  res.render('demo', {
    title: 'Demo'
  });
};

exports.index2 = (req, res) => {
  res.render('demo2', {
    title: 'Demo2'
  });
};
