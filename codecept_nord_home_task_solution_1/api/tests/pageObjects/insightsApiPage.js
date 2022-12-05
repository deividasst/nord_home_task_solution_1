const { I } = inject();

module.exports = {
  async getInsightsRequest(url, status) {
    const response = await  I.sendGetRequest(url);
    I.assertEqual(response.status, status);
    return response.data;
  },
}