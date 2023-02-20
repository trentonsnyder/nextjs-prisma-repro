import type { Blue, Prisma } from "../client/prisma-client";
import cx from "./cx";

async function getFirstBlue(): Promise<Blue> {
  const found = await cx().blue.findFirstOrThrow();
  return found;
}

async function makeBlue(
  toCreate: Prisma.BlueUncheckedCreateInput
): Promise<Blue> {
  const saved = await cx().blue.create({
    data: toCreate,
  });
  return saved;
}

export { getFirstBlue, makeBlue };
