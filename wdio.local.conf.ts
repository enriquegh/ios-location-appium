// process.env.NODE_DEBUG = "request";
const baseCapability =         {
    deviceName: 'iPhone 11',
    platformName: "iOS",
    platformVersion: "14.5",
    app: process.env.APP_LOCATION,
}

const config: WebdriverIO.Config  = {
    // debug: true,
    // execArgv: ['--inspect=127.0.0.1:5859'],

    runner: 'local',
    automationProtocol: 'webdriver',
    port: 4723,
    path: '/wd/hub',

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        },
    },
    
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
    connectionRetryTimeout: 2000000,
    connectionRetryCount: 0,
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
}

export { config }