const { I } = inject();
const { url } = require('../../../data/apiUrlData');

module.exports = {
  buttons: {
    logIn: '[data-testid="UserProfile-login-button"]',
    payment: '[data-testid="PaymentButton"]',
  },
  cursorNotAllowed: '//*[contains(@class,"cursor-not")]',
  card: {
    product: '[data-testid="MainPlanCard-button"]',
  },

  openLogInPage() {
    I.waitInUrl(url.productGroup, 3);
    I.waitForVisible(this.cursorNotAllowed, 3);
    I.waitForInvisible(this.cursorNotAllowed, 5);
    I.waitForVisible(this.buttons.logIn, 3);
    I.click(this.buttons.logIn);
  },

  selectPlan() {
    I.waitForVisible(locate(this.card.product).at(2));
    I.click(locate(this.card.product).at(2))
    I.waitForVisible(this.buttons.payment)
    I.click(this.buttons.payment)
  },
}