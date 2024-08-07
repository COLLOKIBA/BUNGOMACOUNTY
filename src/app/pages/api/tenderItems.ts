import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tenderItems = await prisma.tenderItem.findMany();
    res.status(200).json(tenderItems);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch tender items' });
  } finally {
    await prisma.$disconnect();
  }
}
