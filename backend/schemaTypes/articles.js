export default {
  name: 'articles',
  title: 'Articles',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'articleThumbnailImage',
      title: 'ArticleThumbnailImage',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'platformImage',
      title: 'PlatformImg',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'articleLink',
      title: 'ArticleLink',
      type: 'url',
    },
    {
      name: 'articlePostedDate',
      title: 'ArticlePostedDate',
      type: 'datetime',
    },
  ],
}
