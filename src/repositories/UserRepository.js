class UserRepository {
    constructor(prisma) {
        this.prisma = prisma
    }

    async create(data) {
        return this.prisma.user.create({ data })
    }
}

export { UserRepository }
