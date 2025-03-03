import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import admin from "./firebase";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Middleware for authentication
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid token" });
  }
};

// Authentication endpoint
app.post("/auth/login", async (req, res) => {
  const { token } = req.body;
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    res.json({ uid: decodedToken.uid, email: decodedToken.email });
  } catch (error) {
    res.status(401).json({ error: "Invalid Token" });
  }
});

// CRUD API for products
app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.get("/products/:id", async (req, res) => {
  const product = await prisma.product.findUnique({ where: { id: req.params.id } });
  res.json(product);
});

app.post("/admin/products", verifyToken, async (req, res) => {
  const { name, description, price, stock, category, image } = req.body;
  const product = await prisma.product.create({ data: { name, description, price, stock, category, image } });
  res.status(201).json(product);
});

app.listen(5000, () => console.log("Server running on port 5000"));
