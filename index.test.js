const request = require('supertest')
const app = require('./index.js');

describe('GET  Route',()=>{
    it('should return Hello World', async (done) => {
        const res = await request(app)
          .get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            message: 'Hello World!'
          });
        done();
      })
})

describe('POST  Route',()=>{
    it('should return the NAME from the request', async (done) => {
        const res = await request(app)
          .post('/name')
          .send({
            name: 'Gowtham Ravichandran'
          })
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            name: 'Gowtham Ravichandran'
          });
        done();
      })
})