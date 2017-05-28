function isFingerNumber(n) {
	if( typeof(n) == 'number' && n >= 0 && n<= 10 )
		return true;
	return false;
}
module.exports = isFingerNumber;

