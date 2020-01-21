axeSource = require('axe-core').source;
axeReports = require('axe-reports');
assert = require('assert');

describe('lux-residence homepage', () => {
    it('should pass accessibility test', () => {
        browser.url('https://www.lux-residence.com');
        browser.execute(axeSource);

        let results = browser.executeAsync(function (done) {
            return axe.run(function (err, results) {
                if (err) done(err);
                done(results);
            });
        });
        
        if (results.violations.length !== 0) {
            axeReports.processResults(results, 'csv', 'test-results', true)
        }
        assert.equal(results.violations.length, 0, 'accessibility rules violations');
    })
})

