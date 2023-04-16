import { readdirSync, readFile } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

const song = "runaway"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const folder = './src/pages/api/lyrics';
  const songsList = readdirSync(folder);

  readFile(`./src/pages/api/lyrics/${song}.json`, 'utf8', function (err, data) {
    if (err) throw err;
    res.status(200).json({ data });
  })
}
