import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'GET') {
    const allUsers = await prisma.favoritedImages.findMany();

    //Let's take the array and just return the array of urls.
    const favoritedURLs = allUsers.map((user) => user.url);
    return res.status(200).json(favoritedURLs);
  } else if (req.method === 'POST') {
    const { url } = req.body;
    try {
      const newFavorite = await prisma.favoritedImages.create({
        data: {
          url: url,
        },
      });
      return res.status(200).json(newFavorite.url, { success: true });
    } catch (e) {
      console.error('Request error', e);
      res
        .status(500)
        .json({ error: 'Error favoriting picture.', success: false });
    }
  }
  // const posts = await prisma.post.findMany();
  // res.json(posts);
}
