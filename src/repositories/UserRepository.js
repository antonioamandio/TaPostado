class UserRepository {
    #prisma

    constructor(prisma) {
        this.#prisma = prisma
    }

    async create(data) {
        return this.#prisma.user.create({ data })
    }

    async findAll() {
        return this.#prisma.user.findMany()
    }

    async findByEmail(email) {
        return this.#prisma.user.findUnique({
            where: { email },
        })
    }

    async findById(id) {
        return this.#prisma.user.findUnique({
            where: { id },
        })
    }
}

export { UserRepository }
