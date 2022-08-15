const HomePage = require('../pageobjects/home.page');
const selectFlight = require('../pageobjects/selectFlight.page');

describe('My first flight to Berlin', () => {
    it('should select a flight from NY to Berlin', async () => {

        const FROM = "John F. Kennedy International Airport";
        const TO = "Berlin";
        const Date = "Tue, August 30"

        browser.url('https://www.aviasales.com/')
        
        await HomePage.clickDayNightSwitch();
        await HomePage.setOriginFlight(FROM);
        await HomePage.setDestinationFlight(TO);
        await HomePage.selectDepartureDay("Tue Aug 30 2022");
        await HomePage.clickReturnDateBtn();
        await HomePage.clickDontReturnBtn();
        await HomePage.clickPassengerBtn();
        await HomePage.clickIncreasePassengersBtn();
        await HomePage.clickSearchFlichtBtn();

        browser.switchWindow("https://www.aviasales.com/search");
        await expect(selectFlight.fromNY).toBeDisplayed();
        await expect(selectFlight.toBerlin).toBeDisplayed();
        await expect(selectFlight.flightDate).toBeDisplayed();
    

    });
});


