describe('reverser', function () {

	var expect = chai.expect,
		rev;

	beforeEach(function () {
		rev = reverser.create();
	});

	describe('create', function () {

		it('should create a div with class reverse', function () {

			expect(rev.el.tagName).to.match(/div/i);
			expect(rev.el.className).to.equal('reverser');

		});

		it('should contain a jquery reference to its element', function () {

			expect(rev.$el.get(0)).to.equal(rev.el);

		});

		it('should contain an indata input', function () {
			expect(rev.$el.find('input.indata').size()).to.equal(1);
		});

		it('should contain a result span', function () {
			expect(rev.$el.find('span.result').size()).to.equal(1);
		});

	});

	describe('reversing', function () {

		
		
	});

});