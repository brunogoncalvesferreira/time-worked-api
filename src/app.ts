import fastify from 'fastify'

import fastifySwagger from '@fastify/swagger'
import scalarReference from '@scalar/fastify-api-reference'

export const app = fastify()

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'API Time Worked',
      description: 'API para calcular o tempo trabalhado pelo colaborador.',
      version: '1.0.0',
    },
  },
})
app.register(scalarReference, {
  routePrefix: '/docs',
  configuration: {
    theme: 'deepSpace',
  },
})
