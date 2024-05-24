export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'tenure',
      title: 'Tenure',
      type: 'string',
    },
    {
      name: 'course',
      title: 'Course',
      type: 'string',
    },
    {
      name: 'grade',
      title: 'Grade',
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
