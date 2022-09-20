import { sanityClient } from '../../lib/sanity.server';

sanityClient.config({
  token: process.env.SANITY_WRITE_TOKEN,
});

export default async function unLikeButtonHandler(req, res) {
  const { _id } = JSON.parse(req.body);

  const data = await sanityClient
    .patch(_id)
    .setIfMissing({ unLikes: 0 })
    .inc({ unLikes: -1 })

    .commit()
    .catch((error) => console.log(error));

  res.status(200).json({ unLikes: data.unLikes });
}
