

const Page = require('./page');

class HomePage extends Page {

    //WebElements

    get dayNightSwitcht() {
        return $('[data-test-id="switch"]');
    }

    get originFlight() {
        return $('#origin');
    }

    get destinationFlight() {
        return $('#destination');
    }

    get departureDate() {
        return $('[data-test-id="departure-date-input"]');
    }

    get departureDay() {
        return $('//div[@aria-label="Tue Aug 30 2022"]');
    }

    get returnDateBtn() {
        return $('[data-test-id="return-date-field"]')
    }
    get dontReturnBtn() {
        return $('//button[@data-test-id="no-return-ticket"]');
    }

    get passengerBtn() {
        return $('[data-test-id="passengers-field"]');
    }

    get increasePassengersBtn() {
        return $('.--increment')[0];
    }

    get searchFlichtBtn() {
        return $('[type="submit"]');
    }

    //Functions

    async clickDayNightSwitch() {
        await this.dayNightSwitcht.click();
    }

    async setOriginFlight(FROM) {
        await this.originFlight.click();
        await this.originFlight.setValue(FROM);
    }

    async setDestinationFlight(TO) {
        await this.destinationFlight.click();
        await this.destinationFlight.setValue(TO);
    }

    async clickDepartureDate() {
        await this.departureDate.click();
        //await this.departureDate.setValue(Date);
    }

    async clickPassengerBtn() {
        await this.passengerBtn.click();
    }

    async clickIncreasePassengersBtn() {
        await this.increasePassengersBtn.click();
    }

    async clickSearchFlichtBtn(){
        return this.searchFlichtBtn.click();
    }

    async selectDepartureDay(date){
        return this.departureDay(date).click();
    }

    async clickReturnDateBtn() {
        return this.returnDateBtn.click();
    }
    
    async clickDontReturnBtn(){
        return this.dontReturnBtn.click();
    }





    open () {
        return super.open('login');
    }
}

module.exports = new HomePage();
