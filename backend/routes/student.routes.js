const router = require("express").Router();
const studentController = require("../controlers/student.controller")
router.
    route("/")
    .get(studentController.getAllStudents)
    .post(studentController.createStudent)


module.exports = router;