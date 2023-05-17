import chai from 'chai';
import chaiHttp from 'chai-http';
import nock from 'nock';
import app from '../../src/main';


chai.use(chaiHttp);
chai.should();

const assert = chai.assert;
const expect = chai.expect;


describe('example Controller', () => {
    beforeEach(() => {
        nock.cleanAll();
    });
    it('Successful Request', (done) => {
        chai.request(app)
            .get('/')
            .set({
                'Content-Type': 'application/json',
            }).send()
            .end((err, res) => {
                console.log('res_status: ', res.status);
                console.log('body: ', res.body);
                console.log('response text:', res.text);
                res.should.have.status(200);
                done();
            });
    });

});