export class UserController {
    #userService

    constructor(userService) {
        this.#userService = userService
    }
}
