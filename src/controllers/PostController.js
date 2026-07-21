export class PostController {
    #postService

    constructor(postService) {
        this.#postService = postService
    }
}
