
var expect = chai.expect;

describe("Get candidates", function() {
    it("button should be diplayed", function() {
      var getCandidates= $('#get-candidates').css('display');
      expect(getCandidates).to.not.equal('none');
    });
});