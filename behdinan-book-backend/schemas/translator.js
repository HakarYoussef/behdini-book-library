export default {
  name: 'translator',
  title: 'وەرگێر',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'ناڤێ وەرگێری',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'پروفایلا وەرگێری',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 42,
      },
    },
    {
      name: 'bio',
      title: 'ژیانناما وەرگێری',
      type: 'text',
    },
  ],
};
