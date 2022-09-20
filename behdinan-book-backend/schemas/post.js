export default {
  name: 'post',
  title: 'پەتووکخانە',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'تایتل',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'ناڤ و نیشانێ لینکێ',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: '96',
      },
    },
    {
      name: 'author',
      title: 'نڤیسەر',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'translator',
      title: 'وەرگێر',
      type: 'reference',
      to: { type: 'translator' },
    },
    {
      name: 'mainImage',
      title: 'کەڤەر',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'downloadLink',
      title: 'لینکێ داونلودێ',
      type: 'string',
    },

    {
      name: 'categories',
      title: 'بابەت',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'body',
      title: 'کورتیەک لسەر پەرتووکێ',
      type: 'blockContent',
    },
    {
      name: 'likes',
      title: 'likes',
      type: 'number',
    },
    {
      name: 'unLikes',
      title: 'unLikes',
      type: 'number',
    },
    {
      name: 'prepare',
      title: 'ئامادەکرن',
      type: 'string',
    },
    {
      name: 'pageNumber',
      title: 'ژمارا لاپەڕا',
      type: 'number',
    },
  ],
  initialValue: {
    likes: 0,
  },
  initialValue: {
    unLikes: 0,
  },
};
