export class CommentService {
    #commentRepository

    constructor(commentRepository) {
        this.#commentRepository = commentRepository
    }

    async create(data) {
        return this.#commentRepository.create(data)
    }

    async findAll() {
        return this.#commentRepository.findAll()
    }

    async findById(id) {
        return this.#commentRepository.findById(id)
    }

    async update(id, data) {
        return this.#commentRepository.update(id, data)
    }

    async delete(id) {
        return this.#commentRepository.delete(id)
    }
}
