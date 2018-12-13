const superTest = require('supertest');
const expect = require('expect');
var app1 = require('./server').app;
describe('Async Test', () => {
    it('should test express server', (done) => {
        superTest(app1)
            .get('/')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page Not Found',
                });
            })
            .end(done);
    });

    it('user object & HTTP test', (done) => {
        superTest(app1)
            .get('/users').expect(200).expect((res) => {
                expect(res.body).toInclude({
                    name: 'KS', age: 25
                })
            }).end(done)
    });
})
