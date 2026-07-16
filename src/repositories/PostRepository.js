export class PostRepository {
    #prisma

    constructor(prisma) {
        this.#prisma = prisma
    }

    async create(data) {
        return this.#prisma.post.create({ data })
    }
}
