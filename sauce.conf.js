/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    // saucelabs
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    multiCapabilities: [
        {
            'name': 'Chrome',
            'browserName': 'chrome',
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            'build': process.env.TRAVIS_BUILD_NUMBER
        }, {
            'name': 'Firefox',
            'browserName': 'firefox',
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            'build': process.env.TRAVIS_BUILD_NUMBER
        }, {
            'name': 'IE 10',
            'browserName': 'internet explorer',
            'version': '10.0',
            'tags': ['ie'],
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            'build': process.env.TRAVIS_BUILD_NUMBER
        }, {
            'name': 'IE 11',
            'browserName': 'internet explorer',
            'version': '11.0',
            'tags': ['ie'],
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            'build': process.env.TRAVIS_BUILD_NUMBER
        }
    ],
    getPageTimeout: 40000,
    baseUrl: 'http://localhost:4200/',

    allScriptsTimeout: 40000,
    specs: [
        './e2e/**/*.e2e-spec.ts'
    ],
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 40000,
        isVerbose: true,
        includeStackTrace: true
    },
    useAllAngular2AppRoots: true,
    onPrepare: function() {
        require('ts-node').register({
            project: 'e2e'
        });
        jasmine.getEnv().addReporter(new SpecReporter());
    }
};
