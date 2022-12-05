const axios = require('axios');
const { url } = require('../data/apiUrlData');
const { errorMessage } = require('../data/apiErrorMessageData');

describe("Itegration Token API", function() {
  it("should be 200 status - valid credentials", async function() {
    const credentialResponse = await axios.get(url.validTarget).then(response => {
      return response;
    }).catch(err => {
      return err;
    });        
    expect(credentialResponse.status).toBe(200);
      const tokenResponse = await axios.get(credentialResponse.data.targetUrl, {
        auth: {
            username: credentialResponse.data.username,
            password: credentialResponse.data.password
        }
      });
      expect(tokenResponse.status).toBe(200);
      expect(tokenResponse.data).toEqual(jasmine.any(Object));
      expect(tokenResponse.data.ip).toEqual(jasmine.any(String));
      expect(tokenResponse.data.token).toEqual(jasmine.any(String));
    });

    it("should be 401 status - invalid credential", async function() {
        const credentialResponse = await axios.get(url.validTarget).then(response => {
          return response;
        }).catch(err => {
          return err;
        });        
        expect(credentialResponse.status).toBe(200);
        const tokenResponse = await axios.get(credentialResponse.data.targetUrl, {
          auth: {
            username: 'invalidUsername',
            password: credentialResponse.data.password
            }
        }).then(response => { return response;
          }).catch(err => { return err; });        
        expect(tokenResponse.response.status).toBe(401);
        expect(tokenResponse.response.statusText).toBe(errorMessage.unauthorized.statusText);
        expect(tokenResponse.response.data).toBe(errorMessage.unauthorized.dataText);
    });

    it("should be 404 status - invalid url", async function() {
        const credentialResponse = await axios.get(url.validTarget).then(response => {
          return response;
        }).catch(err => {
          return err;
        });      
        console.log(credentialResponse);  
        expect(credentialResponse.status).toBe(200);
        const tokenResponse = await axios.get(url.invalidTarget, {
          auth: {
            username: credentialResponse.data.username,
            password: credentialResponse.data.password
            }
        }).then(response => { return response;
          }).catch(err => { return err; });       
        expect(tokenResponse.response.status).toBe(404);
        expect(tokenResponse.response.statusText).toBe(errorMessage.notFound.statusText);
        expect(tokenResponse.response.data).toBe(errorMessage.notFound.dataText);
    });
});
