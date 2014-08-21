/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  require('express-helpers')(sails.hooks.http.app);

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap, or your server will never start.
  Activity.destroy({}, function confirm(err,x) {
    Activity.create({name: "Hiking", type: "Physical", points: 5}, 
      function confirm(err, activity) {
        console.log(err);
        if (err) {
          cb(err);
          return;
        }
        else {
          console.log('created: ', activity);
        }
    });

    Activity.create({name: "Walking", type: "Physical", points: 1},
      function confirm(err, activity) {
        console.log(err);
        if (err) {
          cb(err);
          return;
        }
        else {
          console.log('created: ', activity);
        }
    });
  });

  cb();
};
