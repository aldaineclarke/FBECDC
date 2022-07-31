const router = require("express").Router();
const studentsRouter = require("../routes/student.routes")
const postsRouter = require("../routes/post.routes")
const eventsRouter = require("../routes/event.routes")
const usersRouter = require("../routes/user.routes")

router.use("/students/", studentsRouter);
router.use("/posts/", postsRouter);
router.use("/events/", eventsRouter);
router.use("/users/", usersRouter);




module.exports = router