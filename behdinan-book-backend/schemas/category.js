export default {
  name: 'category',
  title: 'بابەت',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'بابەت',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'پروفایلا بابەتی',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 42,
      },
    },
  ],
};
