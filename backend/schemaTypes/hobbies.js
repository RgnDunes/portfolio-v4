export default {
  name: 'hobbies',
  title: 'Hobbies',
  type: 'document',
  fields: [
    {
      name: 'hobbiesList',
      title: 'Hobbies List',
      type: 'array',
      of: [
        {
          name: 'hobby',
          title: 'Hobby',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'details',
              title: 'Details',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'detail',
                  title: 'Detail',
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
        },
      ],
    },
  ],
}
