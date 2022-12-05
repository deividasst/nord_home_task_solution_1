const { url } = require('../data/apiUrlData');

Feature('Career Categories');

Scenario('should count catogries number on the page', async ({ I, careerCategoriesPage }) => {
    I.amOnPage(url.tesonetTarget);
    I.waitForVisible(careerCategoriesPage.menuItem.career);
    I.click(careerCategoriesPage.menuItem.career);
    I.seeInCurrentUrl(url.tesonetCareer);
    I.waitForVisible(careerCategoriesPage.boxItem.jobCard);
    const numOfElements = await I.grabNumberOfVisibleElements(careerCategoriesPage.boxItem.jobCard);
    I.say('Number of visible career category elements is: ' + numOfElements);
}).tag('@web').tag('@career');
