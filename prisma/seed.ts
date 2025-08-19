import { seedData } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

async function up() {
  console.log('UP');
  await prisma.category.createMany({
    data: seedData.categories,
  });
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

  await prisma.product.createMany({
    data: seedData.products,
  });

  await prisma.ingredient.createMany({
    data: seedData.ingredients,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Шинка і гриби',
      imgUrl: '/pizza/ham-and-mushrooms.avif',
      categoryId: 1,
      ingredients: {
        connect: seedData.ingredients.slice(0, 12),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Карбонара',
      imgUrl: '/pizza/carbonara.avif',
      categoryId: 1,
      ingredients: {
        connect: seedData.ingredients.slice(7, 16),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Пепероні',
      imgUrl: '/pizza/pepperoni.avif',
      categoryId: 1,
      ingredients: {
        connect: seedData.ingredients.slice(1, 11),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: pizza1.id,
        pizzaType: 1,
        size: 20,
        price: 300,
      },
      {
        productId: pizza1.id,
        pizzaType: 1,
        size: 30,
        price: 400,
      },
      {
        productId: pizza1.id,
        pizzaType: 1,
        size: 40,
        price: 500,
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        size: 20,
        price: 350,
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
        price: 450,
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        size: 40,
        price: 550,
      },
      //pizza2
      {
        productId: pizza2.id,
        pizzaType: 1,
        size: 20,
        price: 309,
      },
      // {
      //   productId: pizza2.id,
      //   pizzaType: 1,
      //   size: 30,
      //   price: 409,
      // },
      // {
      //   productId: pizza2.id,
      //   pizzaType: 1,
      //   size: 40,
      //   price: 509,
      // },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 20,
        price: 359,
      },
      // {
      //   productId: pizza2.id,
      //   pizzaType: 2,
      //   size: 30,
      //   price: 459,
      // },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 40,
        price: 559,
      },
      //pizza3
      {
        productId: pizza3.id,
        pizzaType: 1,
        size: 20,
        price: 199,
      },
      {
        productId: pizza3.id,
        pizzaType: 1,
        size: 30,
        price: 299,
      },
      {
        productId: pizza3.id,
        pizzaType: 1,
        size: 40,
        price: 399,
      },
      {
        productId: pizza3.id,
        pizzaType: 2,
        size: 20,
        price: 222,
      },
      {
        productId: pizza3.id,
        pizzaType: 2,
        size: 30,
        price: 333,
      },
      // {
      //   productId: pizza3.id,
      //   pizzaType: 2,
      //   size: 40,
      //   price: 444,
      // },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '22222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      cartId: 1,
      productItemId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
    console.log('Seed data was successfully completed');
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
