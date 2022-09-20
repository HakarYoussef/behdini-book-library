export default {
  name: 'blockContent',
  title: 'کورتیەک لسەر پەرتووکێ',
  type: 'array',
  of: [
    {
      title: 'بلۆک',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
      ],
    },
  ],
};
