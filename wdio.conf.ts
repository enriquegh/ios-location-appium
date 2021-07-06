// process.env.NODE_DEBUG = "request";
const baseCapability =         {
    deviceName: 'iPhone 11 Simulator',
    platformName: "iOS",
    platformVersion: "13.4",
    app: "storage:filename=SimpleLocationApp.zip",
    name: 'iOS Location App Test',
    appiumVersion: '1.19.2'
}

const config: WebdriverIO.Config  = {
    // debug: true,
    // execArgv: ['--inspect=127.0.0.1:5859'],

    runner: 'local',
    automationProtocol: 'webdriver',

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        },
    },

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    // sauceConnect: true,
    
    
    specs: [
        './tests/*.ts'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 20,
    capabilities: [
        baseCapability
    ],
    logLevel: 'debug',
    // logLevels: {
        // webdriver: 'info',
        // 'wdio-applitools-service': 'info'
    // },
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 0,
    services: ['sauce'],
    framework: 'mocha',
    reporters: [
        'spec',
    ],
    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        timeout: 400000,
        compilers: ['ts:ts-node/register'], 
    },

    before: function (capabilities, specs) {
    },
}

export { config }