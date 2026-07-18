export class CommentRepository {
    #prisma

    constructor(prisma) {
        this.#prisma = prisma
    }

    async create(data) {
        return this.#prisma.comment.create({ data })
    }

    async findAll() {
        return this.#prisma.comment.findMany()
    }

    async findById(id) {
        return this.#prisma.comment.findUnique({
            where: { id },
        })
    }
}
