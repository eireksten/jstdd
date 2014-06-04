describe('factorizer', function () {
	
	var expect = chai.expect;

	describe('factorize', function () {
		
		it('should return an array of numbers', function () {
			expect(factorizer.factorize()).to.include.members([0]);
		});

		it.skip('should factorize the number one into itself', function () {
			expect(factorizer.factorize(1)).to.deep.equal([1]);
		});

		it.skip('should factorize prime numbers into themselves', function () {
			expect(factorizer.factorize(2)).to.deep.equal([2]);
			expect(factorizer.factorize(3)).to.deep.equal([3]);
			expect(factorizer.factorize(5)).to.deep.equal([5]);
		});
		
		it.skip('should factorize the number four', function () {
			expect(factorizer.factorize(4)).to.deep.equal([2, 2]);
		});
		
		it.skip('should factorize the number six', function () {
			expect(factorizer.factorize(6)).to.deep.equal([2, 3]);
		});
		
		it.skip('should factorize negative numbers', function () {
			expect(factorizer.factorize(-15)).to.deep.equal([-1, 3, 5]);
		});

		it.skip('should factorize large numbers', function () {
			expect(factorizer.factorize(119412668675969)).to.deep.equal([119412668675969]);
			expect(factorizer.factorize(56204653964223)).to.deep.equal([3, 1151, 1223, 3571, 3727]);
		});

	});

});