export default {
  name: 'recommendations',
  title: 'Recommendations',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'string',
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedInUrl',
      type: 'url',
    },
    {
      name: 'imageUrl',
      title: 'ImgURL',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
