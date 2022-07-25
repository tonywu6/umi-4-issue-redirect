export default {
  npmClient: 'npm',
  routes: [
    { path: '/', component: 'index' },
    {
      path: '/lorem',
      routes: [
        {
          path: '',
          redirect: 'ipsum',
        },
        {
          path: 'ipsum',
          routes: [
            {
              path: '',
              redirect: 'dolor',
            },
            {
              path: 'dolor',
              component: 'main',
            },
          ],
        },
      ],
    },
  ],
}
