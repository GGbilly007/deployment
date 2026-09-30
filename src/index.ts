import express, { type Request, type Response } from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello from Express + TypeScript" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
