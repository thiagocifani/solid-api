import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Thiago Cifani',
    email: 'cifani.thiago@gmail.com',
  },
})
