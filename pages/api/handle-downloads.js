import { sanityClient } from '../../lib/sanity.server';

sanityClient.config({
  token: process.env.SANITY_WRITE_TOKEN,
});

export default async function likeButtonHandler(req, res) {
  const { _id } = JSON.parse(req.body);

  const data = await sanityClient
    .patch(_id)
    .setIfMissing({ downloads: 0 })
    .inc({ downloads: 1 })
    .commit()
    .catch((error) => console.log(error));

  res.status(200).json({ downloads: data.downloads });
}
