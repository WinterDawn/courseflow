var express = require('express');
var router = express.Router();
var Course = require("../controllers/courses")

router.get('/user/:user_id', async function(req, res, next) {
    data = req.params.user_id
    return_val = await Course.getUserCompletedCourses(data)
    res.json(return_val);
});

module.exports = router;