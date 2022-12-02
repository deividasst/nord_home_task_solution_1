Feature('Career Categories');

Scenario('Authorized POST request - validate response body', async ({ I, careerCategoriesPage }) => {
    I.amOnPage('https://www.tesonet.com');
    I.waitForVisible(careerCategoriesPage.menuItem.career);
    I.click(careerCategoriesPage.menuItem.career);
    I.seeInCurrentUrl('/career/');
    I.waitForVisible(careerCategoriesPage.boxItem.jobCard);
    const numOfElements = await I.grabNumberOfVisibleElements(careerCategoriesPage.boxItem.jobCard);
    I.say('Number of visible career category elements is: ' + numOfElements);
}).tag('@web').tag('@career');
