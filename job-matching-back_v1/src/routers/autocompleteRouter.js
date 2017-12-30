const AutocompleteInfo = require('../models/autocomplete');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AutocompleteRouter = (router) => {
  router.get('/autocompletes', (req, res, next) => {
    AutocompleteInfo.find().exec((err, autocompletes) => {
      res.status(200).json({
        autocompletes,
      });
    });

  });
}

module.exports = AutocompleteRouter;
