export default {
  name: 'author',
  title: 'نڤیسەر',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'ناڤێ نڤیسەری',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'پروفایلا نڤیسەری',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 42,
      },
    },
    {
      name: 'bio',
      title: 'ژیانناما نڤیسەری',
      type: 'text',
    },
  ],
};
