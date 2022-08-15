

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get newPage () {
        return $('div.web-app__page-header-wrap');
    }

    get fromNY() {
        return $('[value="New York"]')
    }

    get toBerlin() {
        return $('[value="Berlin"]')
    }

    get flightDate() {
        return $('[value="Tue, August 30"]')
    }
}

module.exports = new SecurePage();
