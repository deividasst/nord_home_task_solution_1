const { url } = require('../../data/apiUrlData');
const { errorMessage } = require('../../data/apiErrorMessageData');

Feature('Itegration Credential API');

Scenario('GET request - validate response body structure of existing post', async ({ I, customerApiPage }) => {
  await customerApiPage.getCredentialsRequest();
  I.seeResponseValidByCallback(({ data, expect }) => {
    expect(data.username).to.be.a('string');
    expect(data.password).to.be.a('string');
    expect(data.targetUrl).to.be.a('string');
  });
}).tag('@api').tag('@credential');

Scenario('GET request - validate response body of existing post', async ({ I, customerApiPage }) => {
  const creditinalResponse = await customerApiPage.getCredentialsRequest();
  console.log(creditinalResponse);
  I.assertContain(creditinalResponse.targetUrl, url.credentialPost);
}).tag('@api').tag('@credential');

Scenario('GET request - validate response body of not existing post ', async ({ I, customerApiPage }) => {
  const  creditinalResponse =  await customerApiPage.getCredentialsInvalidRequest();
  I.assertContain(creditinalResponse, errorMessage.postNotFound);
}).tag('@api').tag('@credential');
