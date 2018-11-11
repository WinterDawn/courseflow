let Course = require("../models/courses")

// Tree for 3 majors (CS/Electrical Engineering / Math)
// Tree for 3 minors (a least 1 different from major) (CS/Statistics/ + Web Design??)
// A few students with a few completed courses from the ones above
// Freshmen  x3 
// Sophmore  x2
// Junior    x2
// Senior    x2

var getCoursesTreeFromCourse = (course_id) => {
	
};

var getCoursesTreeToCourse = (course_id) => {
	
};

var getTreeForMajor = (major_name) => {

};

var getTreeForMinor = (major_name) => {

};

var getUserCompletedCourses = async (user_id) => {
	let result = await Course.getUserCompletedCourses(user_id).catch((error) => {
		assert.isNotOk(error,'Promise error');
		done();
	  });
	//console.log(result)
	return result
};

var getUserGoalMajor = (user_id, major_name) => {
	// pick user completed courses
	// pick major tree
	// mark the intersection
	// return the reminder

	// |Freshman | Sophomore | Junior| Senior |
	// | C1------> C2--------> C3
    // | Math1-----^
};

var getUserGoalMinor = (user_id, minor_name) => {
	// pick user completed courses
	// pick minor tree
	// mark the intersection
	// return the reminder
};




module.exports = {
	getUserCompletedCourses: getUserCompletedCourses
};





