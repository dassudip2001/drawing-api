import { PrismaClient } from '@prisma/client';
// import config from './config/config';

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends Global {
    prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

const prisma =
    global.prisma ||
    new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
        errorFormat: 'pretty'
    });

if (process.env.ENVIRONMENT === 'development') global.prisma = prisma;

export default prisma;
