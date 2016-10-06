/**
 * GET /demo
 * Upload page.
 */
exports.index = (req, res) => {
  res.render('demo', {
    title: 'Demo'
  });
};
