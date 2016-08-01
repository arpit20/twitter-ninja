import express from 'express'
import exphbs from  'express-handlebars'
import http from 'http'
import mongoose from 'mongoose'
import twitter from 'twitter'
import routes from './routes'
import { renderToString } from 'react-dom/server'
import React from 'react' 
import { match ,RoutingContext } from 'react-router'
import config from './config'
import ContextWrapper from './components/common/ContextWrapper' 
 

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));
app.use("/js",express.static(__dirname+"/node_modules/bootstrap/dist/js"));
app.use("/js",express.static(__dirname+"/node_modules/jquery/dist"));

// Connect to our mongo database
// mongoose.connect('mongodb://localhost/react-tweets');

// Create a new ntwitter instance
var twit = new twitter(config.twitter);

var that=this;

class AugmentedRoutingContext extends RoutingContext {
    createElement(component, props) {
        const context = this.props.context;
        return component == null ? null : this.props.createElement(component, {...props, ...{context}});
    }
};


var render = function(renderProps, data) {

        const additionalProps = {context: data};
        const html = renderToString(
            <AugmentedRoutingContext {...renderProps} {...additionalProps}/>
        );

        return html;
  }

app.get('*', function(req, res){
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
  	
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.

       // const html = renderToString(<RouterContext {...renderProps} />);
      // Set a stream listener for tweets matching tracking keywords
        twit.get('statuses/home_timeline',{count:20} ,function(error,data,response){
          var tweets={tweets:data};
          // const html = render(renderProps, JSON.stringify(tweets));
          // renderProps.context = tweets;
           const html = renderToString(<ContextWrapper data={tweets}><RoutingContext {...renderProps} /></ContextWrapper>);
          // const html = render(renderProps, tweets);
          console.log(html);
          //  console.log(JSON.stringify(tweets));
           console.dir(renderProps.components);
          res.render('home', {
                        markup: html,
                        context:JSON.stringify(tweets)
                    });
        });
      
    } else {
      res.status(404).send('Not found')
    }
  })
})



// Fire this bitch up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});


