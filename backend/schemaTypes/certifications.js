export default {
  name: 'certifications',
  title: 'Certifications',
  type: 'document',
  fields: [
    {
      name: 'imageLabel',
      title: 'ImageLabel',
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
