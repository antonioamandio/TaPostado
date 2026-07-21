// Database
import { prisma } from './config/database.js'

// Repositories
import { UserRepository } from './repositories/UserRepository.js'
import { PostRepository } from './repositories/PostRepository.js'
import { CommentRepository } from './repositories/CommentRepository.js'

// Services
import { UserService } from './services/UserService.js'
import { PostService } from './services/PostService.js'
import { CommentService } from './services/CommentService.js'

// Instances
const userRepository = new UserRepository(prisma)
const postRepository = new PostRepository(prisma)
const commentRepository = new CommentRepository(prisma)

const userService = new UserService(userRepository)
const postService = new PostService(postRepository)
const commentService = new CommentService(commentRepository)

// Export
//export { userService, postService, commentService }
