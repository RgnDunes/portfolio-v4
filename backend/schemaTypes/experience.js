export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
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
      name: 'journey',
      title: 'Journey',
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
          type: 'string',
        },
        {
          name: 'tenure',
          title: 'Tenure',
          type: 'string',
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
      type: 'object',
      fields: [
        {
          name: 'awardImage',
          title: 'AwardImg',
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'awardImageLabel',
          title: 'AwardImgLabel',
          type: 'string',
        },
      ],
    },
  ],
}
