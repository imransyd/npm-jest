const sellProduct = require('../sellProduct.js');

describe('sellProduct', () => {
	test('valid object', () => {
		let obj = {
			name: 'Hello Kitty umbrella',
			price: '299',
			count: 3
		};
		sellProduct(obj);
		expect(obj.count).toBe(2);
	});
    test('valid object when the number is 0', () => {
		let obj = {
			name: 'Hello Kitty umbrella',
			price: '299',
			count: 0
		};
        let func = () =>{sellProduct(obj.count)};
		
		expect(func).toThrow();
        
        
        /*
        test('null should throw', () => {
		let func = () => { backwards(null) };
		expect( func ).toThrow();
	})
        */
	});
        test('valid object when the number is string', () => {
		let obj = {
			name: 'Hello Kitty umbrella',
			price: '299',
			count: '0'
		};
            let func = ()=>{sellProduct(obj.count)};
		expect(func).toThrow();
	});
    
     test('not a valid valid object', () => {
		let obj2 = true;
		};
          
		let func =()=>{sellProduct(obj2)};
		expect(func).toThrow(Error);
	});
/*
    test('valid object', () => {
		let obj3 = {
			name: 'Hello Kitty umbrella',
			price: '299',
			count: 0
		};
		sellProduct(obj3);
		expect(obj3.count).toBe(Error);
	});*/
    
});