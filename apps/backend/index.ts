import { prisma } from "@repo/db";
import express, { type Request, type Response } from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/users", (req: Request, res: Response) => {
  prisma.user
    .findMany()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.post("/user", (req: Request, res: Response) => {
  console.log(req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: "username and password are required" });
  }

  prisma.user
    .create({
      data: {
        username,
        password,
      },
    })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening at port${PORT}`);
});
