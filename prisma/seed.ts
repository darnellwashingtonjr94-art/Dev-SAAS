import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  // Example: Seed an initial admin user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@dev-saas.com' },
    update: {},
    create: {
      email: 'admin@dev-saas.com',
      name: 'System Admin',
      role: 'ADMIN', // Assuming 'Role' enum exists in schema
    },
  });

  console.log(`Created admin user: ${admin.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
