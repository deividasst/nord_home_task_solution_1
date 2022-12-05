const { I } = inject();
const { url } = require('../../../data/apiUrlData');

module.exports = {
  header: {
    selectProduct: 'Select a product to continue',
  },
  buttons: {
    productGroup: '[data-testid="ProductGroupButton-merchant"]'
  },

  selectProduct() {
    I.amOnPage(url.nordProducts);
    I.see(this.header.selectProduct);
    I.waitForVisible(this.buttons.productGroup, 3);
    I.click(this.buttons.productGroup);
  },
}