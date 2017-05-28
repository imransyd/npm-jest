function sellProduct(product) {
if( typeof(product) != 'object' )
		throw new Error('Parameter not an object');
    else if( typeof(product.count) != 'number' )
		throw new Error('Count is not a number');
	else if( product.count < 1 )
		throw new Error('No more products');
	product.count--;
}

module.exports = sellProduct;