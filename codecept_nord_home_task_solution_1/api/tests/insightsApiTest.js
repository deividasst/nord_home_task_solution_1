const { url } = require('../../data/apiUrlData');
const { errorMessage } = require('../../data/apiErrorMessageData');

Feature('Itegration Insights API');

Scenario('should be 200 status api response with valid structure', async ({ I, insightsApiPage }) => {
  await insightsApiPage.getInsightsRequest(url.insightsValid, 200);
  I.seeResponseValidByCallback(({ data, expect }) => {
    expect(data.ip).to.be.a('string');
    expect(data.country).to.be.a('string');
    expect(data.country_code).to.be.a('string');
    expect(data.city).to.be.a('string');
    expect(data.isp).to.be.a('string');
    expect(data.isp_asn).to.be.a('number');
    expect(data.protected).to.be.a('boolean');
    expect(data.longitude).to.be.a('number');
    expect(data.latitude).to.be.a('number');
    expect(data.state_code).to.be.a('string');
    expect(data.zip_code).to.be.a('string');
  });
}).tag('@api').tag('@insights');

Scenario('should be 404 status for not existing page', async ({ I, insightsApiPage }) => {
  const insightsResponse = await insightsApiPage.getInsightsRequest(url.insightsInvalid, 404);
  I.assertContain(insightsResponse.message, errorMessage.notFound.dataMessage);
}).tag('@api').tag('@insights');

Scenario('should be 405 status for not allowed POST method ', async ({ I }) => {
  const insightsResponse = await  I.sendPostRequest(url.insightsValid);
  I.seeResponseCodeIs(405);
  I.assertContain(insightsResponse.data.message, errorMessage.methodNotAllowed.dataMessage);
}).tag('@api').tag('@insights');

Scenario('should be 405 status for not allowed PUT method ', async ({ I }) => {
  const insightsResponse = await  I.sendPutRequest(url.insightsValid);
  I.seeResponseCodeIs(405);
  I.assertContain(insightsResponse.data.message, errorMessage.methodNotAllowed.dataMessage);
}).tag('@api').tag('@insights');

Scenario('should be 405 status for not allowed DELETE method ', async ({ I }) => {
  const insightsResponse = await  I.sendDeleteRequest(url.insightsValid);
  I.seeResponseCodeIs(405);
  I.assertContain(insightsResponse.data.message, errorMessage.methodNotAllowed.dataMessage);
}).tag('@api').tag('@insights');
