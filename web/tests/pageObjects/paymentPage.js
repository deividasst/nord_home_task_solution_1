const { I, paymentApiPage } = inject();

module.exports = {
  block: {
    cartSummary: '[data-testid="NordVPNCartSummarySelectedItem"]',
  },

  async assertPrices() {
    I.waitForVisible(this.block.cartSummary, 3);
    const productPrice = await paymentApiPage.getPricingRequest();
    I.see(productPrice.monthlyPrice);
    I.see(productPrice.totalPrice);
  },
}