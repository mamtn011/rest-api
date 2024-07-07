import { Router } from "express";
import itemRoutes from "./item.js";

const rootRouter = Router();

rootRouter.use("/items", itemRoutes);

export default rootRouter;
