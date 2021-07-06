# ios-location-appium


To run locally:
- Make sure to set env var `APP_LOCATION` to the full path of the Location app provided.
- Start your Appium server manually
- Might need to change platformVersion and deviceName
```bash
npm install
npm run local
```

To run on Sauce:
- Make sure to upload the Location app provided to Sauce's Application Storage.
```bash
npm install
npm test
```
