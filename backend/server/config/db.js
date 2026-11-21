require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");


const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: Number(process.env.DATABASE_PORT || 3306),
  connectionLimit:10
});

const prisma = new PrismaClient({adapter});

async function testConnection() {
  try {
    await prisma.$connect();
    console.log("Connected to database successfull!");
    console.log(`DB Name: ${process.env.DATABASE_NAME}`);
  } catch(error) {
    console.log("Connection failed", error.message);
  }
}

testConnection();

module.exports = { prisma };

