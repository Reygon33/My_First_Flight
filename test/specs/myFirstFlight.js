const HomePage = require('../pageobjects/home.page');
const selectFlight = require('../pageobjects/selectFlight.page');
const datepicker = require('js-datepicker')

describe('My first flight to Berlin', () => {
    it('should select a flight from NY to Berlin', async () => {

        const FROM = "John F. Kennedy International Airport";
        const TO = "Berlin";
        //const picker = datepicker(HomePage.departureDay, { startDay: 30 })
        const Date = "Tue, August 30"

        browser.url('https://www.aviasales.com/')
        await HomePage.open();

        await HomePage.clickDayNightSwitch();
        await HomePage.setOriginFlight(FROM);
        await HomePage.setDestinationFlight(TO);
        await HomePage.clickDepartureDate();
        await HomePage.clickReturnDateBtn();
        await HomePage.clickDontReturnBtn();
        await HomePage.clickPassengerBtn();
        await HomePage.clickIncreasePassengersBtn();
        await HomePage.clickSearchFlichtBtn();
    
        await expect(selectFlight.newPage).toBeDisplayed();
        await expect(selectFlight.fromNY).toBeDisplayed();
        await expect(selectFlight.toBerlin).toBeDisplayed();
        await expect(selectFlight.flightDate).toBeDisplayed();
    

    });
});


