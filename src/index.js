import express from "express";
import { PORT } from "./secrets.js";
import rootRouter from "./routes/index.js";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middlewares/error.js";
const app = express();
export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.use(express.json());
app.use("/api", rootRouter);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Working on port: ${PORT}`));
