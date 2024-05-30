export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'org',
      title: 'Org',
      type: 'string',
    },
    {
      name: 'totalTenure',
      title: 'TotalTenure',
      type: 'string',
    },
    {
      name: 'currentRole',
      title: 'CurrentRole',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'journey',
      title: 'Journey',
      type: 'array',
      of: [
        {
          name: 'detail',
          title: 'Detail',
          type: 'object',
          fields: [
            {
              name: 'designation',
              title: 'Designation',
              type: 'string',
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'tenure',
              title: 'Tenure',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      title: 'Img',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [
        {
          name: 'detail',
          title: 'Detail',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            },
            {
              name: 'imageLabel',
              title: 'Image Label',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
