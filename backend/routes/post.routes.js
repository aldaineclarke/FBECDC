const PostsController = require("../controllers/post.controller");

const router = require("express").Router();

router
    .route("/")
    .get(PostsController.getAllPosts)
    .post(PostsController.createPost)

router
    .route("/:id")
    .get(PostsController.getSinglePost)
    .patch(PostsController.updatePost)
    .delete(PostsController.deletePost)



module.exports = router;