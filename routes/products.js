import express from "express";
import { getProducts } from "../controller/productController";
import { getProductById } from "../controller/productController";
import { deleteProduct } from "../controller/productController";
import { createProduct } from "../controller/productController";
import { udpateProduct } from "../controller/productController";
const router = express.Router();

// GET http://localhost:3003/shop (voir tous les produits)
router.get("/", getProducts);

// GET http://localhost:3003/shop/1 (voir un produit)
router.get("/:id", getProductById);
//
//// POST http://localhost:3003/shop (création)
router.post("/", createProduct);
//
//// PUT http://localhost:3003/shop/1 (edition)
router.put("/:id", udpateProduct);
//
//DELETE http://localhost:3003/shop/1 (suppression)
router.delete("/:id", deleteProduct);

export default router;
