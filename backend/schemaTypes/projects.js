export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'isSoloProject',
      title: 'IsSoloProject',
      type: 'boolean',
    },
    {
      name: 'tenure',
      title: 'Tenure',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'projectLinks',
      title: 'ProjectLinks',
      type: 'object',
      fields: [
        {
          name: 'githubUrl',
          title: 'GithubUrl',
          type: 'url',
        },
        {
          name: 'liveUrl',
          title: 'LiveUrl',
          type: 'url',
        },
      ],
    },
    {
      name: 'image',
      title: 'Img',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
