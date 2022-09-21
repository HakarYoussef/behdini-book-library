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
      name: 'downloads',
      title: 'داگرتن',
      type: 'number',
      readOnly: true,
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
    body: '------------------------------',
  },
  initialValue: {
    translator: '---',
  },
  initialValue: {
    author: '---',
  },
  initialValue: {
    title: '---',
  },
  initialValue: {
    downloads: 0,
  },
  initialValue: {
    pageNumber: 0,
  },
  initialValue: {
    prepare: '---',
  },
};
