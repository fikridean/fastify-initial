async function helloWorldRoute(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
}

async function helloWorldRoute2(fastify, options) {
  fastify.get('/hello', async (request, reply) => {
    return { hello: 'world2' }
  })
}

const routes = async (fastify, options) => {
  fastify.register(helloWorldRoute)
  fastify.register(helloWorldRoute2)
}

//ESM
export default routes