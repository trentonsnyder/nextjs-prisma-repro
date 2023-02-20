import { makeRed } from "../src";

async function main() {
  try {
    await makeRed({ name: "red-ranger" });
  } catch (e) {
    console.error("failed seed", e);
  }
}

main();
