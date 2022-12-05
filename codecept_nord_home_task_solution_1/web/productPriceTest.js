Feature('Product Price');

Scenario('should verify that plan price matches the selected one', async ({ 
    I, 
    productPage, 
    logInPage, 
    planPage, 
    paymentPage 
}) => {
        productPage.selectProduct();
        let productUrl = await I.grabCurrentUrl();
        planPage.openLogInPage();
        I.waitForElement(logInPage.inputs.username, 6)
        I.amOnPage(productUrl);
        planPage.selectPlan();
        paymentPage.assertPrices();
}).tag('@web').tag('@product');
