let User = require('./models/user')


let login = async() => {
    //ROLES
    return ['user', 'tester']
};

let changePassword = async() => {
    // RETURN PASSORD CHANGED
    return 200
};

let getActivity = async() => {
    return['activity']
};

let updateUser= async() => {
    return['activity']
};

let listUsers= async() => {
    return['activity']
};

let getUser= async() => {
    return['activity']
};


module.exports = {
	changePassword: changePassword,
	login: login,
    getActivity: getActivity,
    updateUser:updateUser,
    listUsers:listUsers,
    getUser:getUser
};
