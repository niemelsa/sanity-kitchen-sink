export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6019425027a7758853b31eee',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-voer4y1s',
                  apiId: 'e678faaa-b2ab-43f0-b061-27a9f8ed14af'
                },
                {
                  buildHookId: '601942502056d18368644730',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vfhrex7c',
                  apiId: '4c3dee44-eb1d-4131-9c81-43a978064b27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/niemelsa/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vfhrex7c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
