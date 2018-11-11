import {should as _should, use, request} from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const should = _should();

use(chaiHttp);

describe('/GET /api/v1/parcels', () => {
    it('should return all parcels', (done) => {
        request(server)
        .get('/api/v1/parcels')
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        })
    })
})