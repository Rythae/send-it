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

describe('/GET /api/v1/parcels/:id', () => {
    it('should return a specific parcel', (done) => {
        request(server)
        .get('/api/v1/parcels/1')
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        })
    })

    it('should return a 404 status when parcel not found', (done) => {
        request(server)
        .get('/api/v1/parcels/4')
        .end((err,res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            done();
        })
    })
})