# README

1/14/19

This is a baseline I set up for a React app with a Redux state, React Router, and a Rails API, intended for deployment to Heroku. The intention is to use clones of this as a launching pad for future React apps.  

After forking and cloning the repository, and then cd'ing into the root directory, the command `rake start` will launch the app in development mode.

BUT the app depends on a Postgres database (in order to work with Heroku), so before trying to launch a development server, make sure you have Postgres running.  As of the current date, it seems the best way to get Postgres running is to download and run the Postgres stand-alone app: https://postgresapp.com/.  Then run `rake db:setup` in the terminal from the parent directory. After that, running `rake start` should get the React app running, with a few test routes handled by React Router, and a test message viewable in the console that the React app has connected with the Rails API.

There are a few components, reducers, routes, etc. labeled "test"-something under:

- app/controllers
- config/routes.rb
- client/src/reducers
- client/src/actions
- client/src/components_container
- client/src/components_presentational
- client/src/App.js

The preparation for deploying the app to Heroku generally followed the instructions [here](https://blog.heroku.com/a-rock-solid-modern-web-stack), but without adding Devise and ActiveAdmin.

  
