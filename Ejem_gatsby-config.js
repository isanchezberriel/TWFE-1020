resolve: 'gatsby-source-apiserver',
  options: {
    name: 'Restaurante',
    typePrefix: 'Api',
    url: miapi.url
    method: 'GET',
    auth: false,
    headers: {
      'Content-Type': 'application/json',
    },
    verboseOutput: process.env.NODE_ENV !== 'production',
  }