import { Mongo } from 'meteor/mongo';

const collection = new Mongo.Collection(null);
console.log('Collection', collection);

export default collection;