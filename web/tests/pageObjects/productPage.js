const { I } = inject();

module.exports = {
  header: {
    selectProduct: 'Select a product to continue',
  },
  buttons: {
    productGroup: '[data-testid="ProductGroupButton-merchant"]'
  },

  selectProduct() {
    I.amOnPage('https://nordcheckout.com/products');
    I.see(this.header.selectProduct);
    I.waitForVisible(this.buttons.productGroup, 3);
    I.click(this.buttons.productGroup);
  },
}