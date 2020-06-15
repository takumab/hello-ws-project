const request = require('supertest');
const app = require('../src/app');

describe('Hello world', () => {
    it('should display hello world', (done) => {
        request(app)
            .get('/hello-world')
            .expect('Content-Type', /html/)
            .then((response) => {
                expect(response.text).toEqual("Hello, world!");
                done()
            })
            .catch(done)
    });
});