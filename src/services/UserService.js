export class UserService {
    #userRepository

    constructor(userRepository) {
        this.#userRepository = userRepository
    }

    async create(data) {
        return this.#userRepository.create(data)
    }

    async findAll() {
        return this.#userRepository.findAll()
    }

    async findByEmail(email) {
        return this.#userRepository.findByEmail(email)
    }

    async findById(id) {
        return this.#userRepository.findById(id)
    }

    async update(id, data) {
        return this.#userRepository.update(id, data)
    }

    async delete(id) {
        return this.#userRepository.delete(id)
    }
}
