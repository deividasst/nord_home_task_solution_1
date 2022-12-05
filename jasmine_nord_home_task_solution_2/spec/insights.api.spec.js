const axios = require('axios');
const { url } = require('../data/apiUrlData');
const { errorMessage } = require('../data/apiErrorMessageData');


describe("Itegration Insights API", function() {
  it("should be 200 status credentials api response with valid structure", async function() {
    const res = await axios.get(url.insightsValid, {
      responseType:'json',}).then(response => {
        return response;
      }).catch(err => {
        return err;
    });    
    expect(res.status).toBe(200);
    expect(res.data).toEqual(jasmine.any(Object));
    expect(res.data.ip).toEqual(jasmine.any(String));
    expect(res.data.country).toEqual(jasmine.any(String));
    expect(res.data.country_code).toEqual(jasmine.any(String));
    expect(res.data.city).toEqual(jasmine.any(String));
    expect(res.data.isp).toEqual(jasmine.any(String));
    expect(res.data.country_code).toEqual(jasmine.any(String));
    expect(res.data.isp_asn).toEqual(jasmine.any(Number));
    expect(res.data.protected).toEqual(jasmine.any(Boolean));
    expect(res.data.longitude).toEqual(jasmine.any(Number));
    expect(res.data.latitude).toEqual(jasmine.any(Number));
    expect(res.data.state_code).toEqual(jasmine.any(String));
    expect(res.data.zip_code).toEqual(jasmine.any(String));
  });

//     it("should contain target url structure", async function() {
//       const res = await axios.get(url.validTarget).then(response => {
//           return response;
//         }).catch(err => {
//           return err;
//         });        
//         expect(res.data.targetUrl).toEqual(jasmine.stringContaining("http://ptsv2.com/t/"));
//   });

//   it("should be 404 status for not existing post", async function() {
//     const res = await axios.get(url.invalidTarget).then(response => {
//         return response;
//       }).catch(err => {
//         return err;
//       });        
//       expect(res.response.status).toBe(404);
//       expect(res.response.statusText).toBe(errorMessage.notFound.statusText);
//       expect(res.response.data).toBe(errorMessage.notFound.dataText);
//   });
});
