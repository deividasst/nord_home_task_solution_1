const { url } = require('../../data/apiUrlData');
const { errorMessage } = require('../../data/apiErrorMessageData');

Feature('Itegration Credential API');

Scenario('should be 200 status api response with valid structure', async ({ I, customerApiPage }) => {
  await customerApiPage.getCredentialsRequest();
  I.seeResponseValidByCallback(({ data, expect }) => {
    expect(data.username).to.be.a('string');
    expect(data.password).to.be.a('string');
    expect(data.targetUrl).to.be.a('string');
  });
}).tag('@api').tag('@credential').tag('@failing');

Scenario('should be 200 status api response with valid url', async ({ I, customerApiPage }) => {
  const creditinalResponse = await customerApiPage.getCredentialsRequest();
  I.assertContain(creditinalResponse.targetUrl, url.credentialPost);
}).tag('@api').tag('@credential').tag('@failing');

Scenario('should be 404 status for not existing page', async ({ I, customerApiPage }) => {
  const  creditinalResponse =  await customerApiPage.getCredentialsInvalidRequest();
  I.assertContain(creditinalResponse, errorMessage.postNotFound);
}).tag('@api').tag('@failing');
