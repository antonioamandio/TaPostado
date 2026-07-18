import { prisma } from './config/database.js'
import { CommentRepository } from './repositories/CommentRepository.js'
import { PostRepository } from './repositories/PostRepository.js'
import { UserRepository } from './repositories/UserRepository.js'

const userRepository = new UserRepository(prisma)
const postRepository = new PostRepository(prisma)
const commentRepository = new CommentRepository(prisma)

export { commentRepository }
