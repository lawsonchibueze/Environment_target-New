import { prisma } from "../../lib/prismadb";

interface IParams {
  id: string;
}

export default async function getJounal() {
  try {
    // const { id } = params;

    const journal = await prisma.upload.findMany();

    return journal;
  } catch (error: any) {
    throw new Error(error);
  }
}
