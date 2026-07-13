import { prisma } from './config/database.js'
import { UserRepository } from './repositories/UserRepository.js'

const userRepository = new UserRepository(prisma)

export { userRepository }
