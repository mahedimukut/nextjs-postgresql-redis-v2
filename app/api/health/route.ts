import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { redis } from "@/lib/redis";

export async function GET() {
  let db = "disconnected";
  let cache = "disconnected";
  try {
    await prisma.$queryRaw`SELECT 1`;
    db = "connected";
  } catch (e: any) { db = "error: " + e.message; }
  try {
    const ping = await redis.ping();
    if (ping === "PONG") cache = "connected";
  } catch (e: any) { cache = "error: " + e.message; }
  return NextResponse.json({ status: "ok", database: db, redis: cache });
}
