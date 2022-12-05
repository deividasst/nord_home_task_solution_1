const { errorMessage } = require('../../data/apiErrorMessageData');
const { url } = require('../../data/apiUrlData');

Feature('Itegration Token API');

Scenario('Authorized GET request - validate response body', async ({ I, customerApiPage }) => {
  const userCredentialResponse = await customerApiPage.getCredentialsRequest();
  await I.sendRequestWithBasicAuth(
    'get',
    userCredentialResponse.username,
    userCredentialResponse.password,
    userCredentialResponse.targetUrl,
  );
  I.seeResponseValidByCallback(({ data, status, expect }) => {
    expect(status).to.eql(200);
    expect(data.ip).to.be.a('string');
    expect(data.token).to.be.a('string');
  });
}).tag('@api').tag('@token').tag('@failing');

Scenario('Unauthorized GET request - validate response body', async ({ I, customerApiPage }) => {
  const userCredentialResponse = await customerApiPage.getCredentialsRequest();
  const tokenRequestReponse = await I.sendRequestWithBasicAuth(
    'get',
    userCredentialResponse.username,
    'userCredentialResponse.password',
    userCredentialResponse.targetUrl,
  );
  I.seeResponseValidByCallback(({ status, expect }) => {
    expect(status).to.eql(401);
  });
  I.assertContain(tokenRequestReponse.data, errorMessage.noAuthTokenApi);
}).tag('@api').tag('@token').tag('@failing');

Scenario('GET request - invalid token authorization url', async ({ I, customerApiPage }) => {
  const userCredentialResponse = await customerApiPage.getCredentialsRequest();
  const tokenAuthResponse = await I.sendRequestWithBasicAuth(
    'get',
    userCredentialResponse.username,
    userCredentialResponse.password,
    url.invalidAuthToken
  );
  I.assertEqual(tokenAuthResponse.status, 404)
  I.assertContain(tokenAuthResponse.data, errorMessage.postNotFound)
}).tag('@api').tag('@token').tag('@failing');