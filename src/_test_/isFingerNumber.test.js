const isFingerNumber = require('../isFingerNumber.js');

//test
describe('isFingerNumber test suite', () =>{
   
    test('isFingerNumber no fingers', () => {
        
   		let actual = isFingerNumber(0);
		let expected = true;//"<p>0</p>"
		expect(actual).toBe(expected);
	});

	test('isFingerNumber is between 0 and 10', () => {
		expect(isFingerNumber(5)).toBe(true);
	})
    test('isFingerNumber more than 10', ()=>{
       
        expect(isFingerNumber(11)).toBe(false);
    });
    test('isFingerNumber is less than 0', ()=>{
        expect(isFingerNumber(-1)).toBe(false);
    })
    test('isFingerNumber is a string', ()=>{
        expect(isFingerNumber('2')).toBe(false);
    })
    test('isFingerNumber is empty', ()=>{
        expect(isFingerNumber()).toBe(false);
    })
})
    


/*
// Testfall 3: number
actual = makeHTML(5);
expected = "<p>5</p>";
if( actual === expected ) {
	console.log('Test passed: number');
} else {
	console.log(`Test failed: number, actual=${actual}, expected=${expected}`);
}




function test(actual, expected, description) {
	if( actual === expected ) {
		console.log('Test passed: ' + description);
	} else {
		console.log(`Test failed: ${description}, actual=${actual}, expected=${expected}`);
	}
}

*/