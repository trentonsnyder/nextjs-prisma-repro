import { PrismaClient } from "../client";

// singleton of DB
class CX {
  public prisma: PrismaClient;

  private static instance: CX;

  private constructor() {
    this.prisma = new PrismaClient();
  }

  public static getInstance = () => {
    if (!CX.instance) {
      CX.instance = new CX();
    }
    return CX.instance;
  };
}

function cx(): PrismaClient {
  return CX.getInstance().prisma;
}

export default cx;
