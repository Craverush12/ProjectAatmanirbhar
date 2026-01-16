import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const allowed = new Set(["volunteer", "contact", "donate"]);
const dataPath = path.join(process.cwd(), "data", "submissions.json");

function readStore() {
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
    fs.writeFileSync(dataPath, JSON.stringify({ volunteer: [], contact: [], donate: [] }, null, 2), "utf-8");
  }
  return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!allowed.has(type)) {
    return NextResponse.json({ error: "Unsupported form type" }, { status: 400 });
  }

  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  const store = readStore();
  const entry = { ...body, receivedAt: new Date().toISOString() };
  store[type].push(entry);
  fs.writeFileSync(dataPath, JSON.stringify(store, null, 2), "utf-8");

  return NextResponse.json({ ok: true });
}

export async function GET(_: NextRequest, { params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!allowed.has(type)) {
    return NextResponse.json({ error: "Unsupported form type" }, { status: 400 });
  }
  const store = readStore();
  return NextResponse.json({ entries: store[type] || [] });
}
