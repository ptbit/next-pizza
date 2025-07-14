import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

async function up() {
  console.log('UP');
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User',
        email: 'user@test.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'admin@test.com',
        password: hashSync('222222', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });
}

async function down() {
  const deleteUsers = await prisma.user.deleteMany({});
  console.log('Del', deleteUsers);
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log('error:', error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
