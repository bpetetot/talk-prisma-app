import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  const rawPlanet = fs.readFileSync('./prisma/seeds/planet.json').toString();
  const planet = JSON.parse(rawPlanet);
  await prisma.planet.createMany({ data: planet });

  const rawPeople = fs.readFileSync('./prisma/seeds/people.json').toString();
  const people = JSON.parse(rawPeople);
  await prisma.people.createMany({ data: people });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
