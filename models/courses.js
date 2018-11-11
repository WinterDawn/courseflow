let mysql = require('../common/mysql');





/**
 * Returns the current user completed courses
 * @param {*} major_name 
 */
let getUserCompletedCourses = async (user_id) => {
    // MYSQL
    // select * from user_x_courses where user_id = ?
    let result = await mysql.query('SELECT * FROM users').catch((err) => console.log(err));
	// Do something with result.
	return result
    

};


/**
 * Returns the Course tree for the specified Major
 * @param {*} major_name 
 */
let getMajorTree = async (major_name) => {
	//NEO
};

/**
 * Returns the Course tree for the specified Minor
 * @param {*} major_name 
 */

let getMinorTree = async (major_name) => {
	//NEO
};

/**
 * Returns the list of courses originated from the specified course
 * @param {*} course_id 
 */
let getCourseTreeFrom = async (course_id) => {
    
};

/**
 * Returns the list of courses required for the specified course
 * @param {*} course_id 
 */
let getCourseTreeTo = async (course_id) => {
    
};





/********* */


let getUserGoalMajor = async (user_id, major_name) => {
	// pick user completed courses
	// pick major tree
	// mark the intersection
	// return the reminder

	// |Freshman | Sophomore | Junior| Senior |
	// | C1------> C2--------> C3
    // | Math1-----^
};

let getUserGoalMinor = async (user_id, minor_name) => {
	// pick user completed courses
	// pick minor tree
	// mark the intersection
	// return the reminder
};




module.exports = {
	getUserCompletedCourses: getUserCompletedCourses
};
