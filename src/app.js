'use strict';

/**
 * Server instance used to view and convert Postfix Expressions 
 */
const Hapi = require('hapi');
const Hoek = require('hoek');

const Postfix = require('./lib/Postfix');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
  host: 'localhost', 
  port: process.env.PORT || 3501
});

// Register inert (static file serving) and vision (handlebars) 
server.register([require('inert'), require('vision')], (err) => {

  // Handle errors
  Hoek.assert(!err, err);

  // Setup view logic
  server.views({
      engines: {
          html: require('handlebars')
      },
      relativeTo: __dirname,
      path: './views',
      layout: 'index',
      layoutPath: './views/layout',
      partialsPath: './views/partials'
  });

  ////
  // ROUTES
  ////

  // Handle conversion calls with no query
  server.route({
    method: 'get',
    path: '/to-infix/',
    handler: function (request, reply) {
      return reply({
        expression: '',
        error: {
          message: 'Please enter an expression.'
        }
      })
    }
  });

  // Handle conversion calls with a query
  server.route({
    method: 'GET',
    path: '/to-infix/{q}',
    handler: function (request, reply) {
      const exp = request.params.q;

      try {
        const val = Postfix.toInfix(exp);

        return reply({
          expression: exp,
          value: val
        });
      } catch (e) {
        return reply({
          expression: exp,
          error: {
            name: e.name,
            message: e.message
          }
        });
      };
    }
  });

  // Handle style requests
  server.route({
      method: 'get',
      path: '/styles/{file}',
      handler: {
          directory: {
              path: './public/styles'
          }
      }
  });

  // Handle script requests
  server.route({
      method: 'get',
      path: '/scripts/{file}',
      handler: {
          directory: {
              path: './public/scripts'
          }
      }
  });

  // Handle Postfix to Infix converter view
  server.route({
    method: 'GET',
    path:'/', 
    handler: {
      view: {
        template: 'index',
        context: {
          title: 'Expression Converter',
          subtitle: 'Postfix to Infix '
        }
      }
    }
  });

  // Start the server and log local url 
  server.start((err) => {
    if (err) throw err;
  
    console.log('Server running at:', server.info.uri);
  });
});
