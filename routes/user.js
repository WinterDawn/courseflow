var express = require('express');
var router = express.Router();
var User = require("../controllers/user")


/**
 * perform user login 
 */ 
router.post('/login', async function(req, res, next) {
    data = req.body
    return_val = await Events.login(data)
    res.sendStatus(return_val);
})


/**
 * Change password
 */
router.post('/password/change', async function(req, res, next) {
    data = req.body
    return_val = await User.changePassword(data)
    res.sendStatus(return_val);
})

/**
 *  Update User data
 */
router.put('/:id', async function(req, res, next) {
    data = req.body
    return_val = await User.updateUser(data)
    res.sendStatus(return_val);
})

/**
 *  List users
 *  - query 
*/
router.get('/', async function(req, res, next) {
    //data = query string parameters
    // ?
    data = {}

    return_val = await User.listUsers(data)
    res.sendStatus(return_val);
})

/**
 *  Get user details
 */
router.get('/:id', async function(req, res, next) {
    data = req.body
    return_val = await User.getUser(data)
    res.sendStatus(return_val);
})


/**
 *   Get user activity
 *   - query 
 */
router.get('/:id/activity', async function(req, res, next) {
    data = req.body
    return_val = await User.getActivity(data)
    res.sendStatus(return_val);
})



module.exports = router;