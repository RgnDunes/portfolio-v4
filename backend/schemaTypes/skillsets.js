export default {
  name: 'skillsets',
  title: 'Skillsets',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Img',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
