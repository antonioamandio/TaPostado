export class CommentRepository {
    #prisma

    constructor(prisma) {
        this.#prisma = prisma
    }

    async create(data) {
        return this.#prisma.comment.create({ data })
    }
}
