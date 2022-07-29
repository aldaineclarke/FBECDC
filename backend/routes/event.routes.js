const router = require("express").Router();
const EventsController = require("../controlers/event.controller");

router
    .route("/")
    .get(EventsController.getAllEvents)
    .post(EventsController.createEvent);

router
    .route("/:id")
    .get(EventsController.getSingleEvent)
    .patch(EventsController.updateEvent)
    .delete(EventsController.deleteEvent)



module.exports = router;