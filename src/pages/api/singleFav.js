import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//FoundURL is null if no entry is found.
export default async function handler(req, res) {
  const { urlLookup, method } = req.body;
  if (method === 'find') {
    const foundURL = await prisma.favoritedImages.findFirst({
      where: {
        url: urlLookup,
      },
    });
    const url = foundURL ? foundURL.url : null;
    return res.status(200).json(url);
  } else if (method === 'add') {
    await prisma.favoritedImages.create({
      data: {
        url: urlLookup,
      },
    });
    return res.status(200).json(null);
  } else if (method === 'remove') {
    await prisma.favoritedImages.delete({
      where: {
        url: urlLookup,
      },
      select: {
        id: true,
      },
    });
    return res.status(200).json(null);
  }
}
