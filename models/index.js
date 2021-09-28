// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'id'
});

Category.hasMany(Product, {
  foreignKey: 'id'
});

//(through ProductTag)
Product.belongsToMany(Tag, {
  // foreignKey: 'id',
  through: {
    model: ProductTag,
  }
});

//(through ProductTag)
Tag.belongsToMany(Product, {
  // foreignKey: 'id'
  through: {
    model: ProductTag,
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
