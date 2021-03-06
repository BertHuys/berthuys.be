/**
 * Created by BERT on 28/01/17.
 */
var keystone = require('keystone');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'references';
    view.query('references', keystone.list('Reference').model.find().sort('title'));
    // Render the view
    view.render('references');
};