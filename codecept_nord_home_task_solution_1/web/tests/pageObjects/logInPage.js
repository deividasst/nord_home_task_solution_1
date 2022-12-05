const { I } = inject();
const { url } = require('../../../data/apiUrlData');

module.exports = {
  verifyUrl(productUrl) { 
    I.waitInUrl(url.nordAccountAuth, 3); 
    I.amOnPage(productUrl);
  },
}