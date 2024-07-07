import { Router } from "express";
import {
  createItem,
  deleteItem,
  editItem,
  getItem,
  getItems,
} from "../controllers/item.js";

const itemRoutes = Router();

itemRoutes.post("/", createItem);
itemRoutes.get("/", getItems);
itemRoutes.get("/:id", getItem);
itemRoutes.put("/:id", editItem);
itemRoutes.delete("/:id", deleteItem);

export default itemRoutes;
