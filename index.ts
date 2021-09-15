import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  // log: ['query'],
});

async function main() {
  // code here
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
