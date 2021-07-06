const latitude = "37.79"
const longitude = "-122.401"
const altitude = "19.31"
describe("Location test", () => {
    it("should set location to Sauce SF office", () => {

        let alert = $("*//XCUIElementTypeAlert")

        if (alert.isExisting()) {
            let alertBtn = $("~Allow")
            if (alertBtn.isExisting()) {
                alertBtn.click()
            }
            else { //try finding Allow on iOS 13+
                alertBtn = $("~Allow Once")
                alertBtn.click()
            }
        }

        browser.setGeoLocation({
            latitude,
            longitude,
            altitude
        })

        let locationText = $("~locationText")
        let expectedLocation = latitude + ", " + longitude

        expect(locationText).toHaveText(expectedLocation)
    })
})