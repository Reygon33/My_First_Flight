const Page = require('./page');

class SelectFlight extends Page {

    //WebElements

    get newPage () {
        return $('div.web-app__page-header-wrap');
    }

    get fromNY() {
        return $('//div[@data-test-id="city" and text()="New York"]');
    }

    get toBerlin() {
        return $('//div[@data-test-id="city" and text()="Berlin"]');
    }

    get flightDate() {
        return $('//div[@data-test-id="date" and text()="Tue, Aug 30"]');
    }
}

module.exports = new SelectFlight();
