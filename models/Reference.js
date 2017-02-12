/**
 * Created by BERT on 12/02/17.
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Reference Model
 * ==========
 */

var Reference = new keystone.List('Reference', {
    autokey: { from: 'name', path: 'key', unique: true }
});

Reference.add({
    name: { type: String, required: true },
    linkaddress: { type: String},
    description:{type: String },
    image: { type: Types.CloudinaryImages }
});
Reference.track = true;
Reference.defaultSort='name';
Reference.defaultColumns = 'name, ref';
Reference.register();