const { url } = require('../data/apiUrlData');

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
        /* changed to verify url instead of username input due to hcaptcha; 
        confimed with nordsec QA */
        logInPage.verifyUrl(productUrl);
        planPage.selectPlan();
        paymentPage.assertPrices();
}).tag('@web').tag('@product');
