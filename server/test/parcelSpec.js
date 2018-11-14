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

describe('/PUT /api/v1/parcels', () => {
        it('should update the status of a parcel', (done) => {
            const obj = {
                status: 'processing'
            }
            request(server)
            .put('/api/v1/parcels/'+2)
            .send(obj)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
        })
        it('should return a 404 error, parcel not found', (done) => {
            const status = {
                status: 'processing'
            }
            request(server)
            .put('/api/v1/parcels/5')
            .send(status)
            .end((err,res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                done();
            })
        })
        it('should return a 400 error, status field required', (done) => {
            const status = {
            }
            request(server)
            .put('/api/v1/parcels/1')
            .send(status)
            .end((err,res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
        })
   

})