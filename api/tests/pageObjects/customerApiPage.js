const { I } = inject();
const { url } = require('../../../data/apiUrlData');

module.exports = {
  async getCredentialsRequest() {
    const response = await  I.sendGetRequest(url.validTarget);
    I.assertEqual(response.status, 200);
    return response.data;
  },

  async getCredentialsInvalidRequest() {
    const response = await  I.sendGetRequest(url.invalidTarget);
    I.assertEqual(response.status, 404);
    return response.data;
  },
}