export class CommentController {
    #commentService

    constructor(commentService) {
        this.#commentService = commentService
    }
}
