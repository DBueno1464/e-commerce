// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'id'
});

Category.hasMany(Products, {
  foreignKey: 'id'
});

//(through ProductTag)
Product.belongsToMany(Tags, {
  foreignKey: 'id'
});

//(through ProductTag)
Tag.belongsToMany(Products, {
  foreignKey: 'id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
