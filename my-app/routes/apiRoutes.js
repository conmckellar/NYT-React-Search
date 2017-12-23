const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (req, res) => {
  axios
    .get("https://api.nytimes.com/svc/archive/v1/2016/1.json", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
