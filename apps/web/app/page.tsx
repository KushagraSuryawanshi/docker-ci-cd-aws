import { connection } from "next/server";

export default async function Home() {
  await connection();
  const { prisma } = await import("@repo/db");
  const users = await prisma.user.findMany();
  return <div>{JSON.stringify(users)}</div>;
}
