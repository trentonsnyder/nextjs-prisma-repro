import { makeBlue } from "../src";

async function main() {
  try {
    await makeBlue({ name: "blue-ranger" });
  } catch (e) {
    console.error("failed seed", e);
  }
}

main();
