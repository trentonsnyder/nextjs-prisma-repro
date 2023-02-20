import type { Red, Prisma } from "../client/prisma-client";
import cx from "./cx";

async function getFirstRed(): Promise<Red> {
  const found = await cx().red.findFirstOrThrow();
  return found;
}

async function makeRed(toCreate: Prisma.RedUncheckedCreateInput): Promise<Red> {
  const saved = await cx().red.create({
    data: toCreate,
  });
  return saved;
}

export { getFirstRed, makeRed };
