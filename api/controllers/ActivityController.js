module.exports = {
    index: function (req, res) {      
        Activity.find({}).exec(function(err, activities) {
            if (err) {
                sails.log.err("-----------err", err);
                res.send(400);
                return;
            }

            var data = {activities: activities};

            res.view(data);
        });
    }
};
