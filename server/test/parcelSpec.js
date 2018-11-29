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
        });
    });
});

describe('/GET /api/v1/parcels/:id', () => {
    it('should return a specific parcel', (done) => {
        request(server)
        .get('/api/v1/parcels/2')
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });

    it('should return a 404 status when parcel not found', (done) => {
        request(server)
        .get('/api/v1/parcels/73')
        .end((err,res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            done();
        });
    });
});

describe('/GET /api/v1/users/:id/parcels', () => {
    it('should return all parcels', (done) => {
        request(server)
        .get('/api/v1/users/7/parcels')
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});

describe('/PUT /api/v1/parcels/:id/status', () => {
    it('should return a 404 error, No parcels exist for the id', (done) => {
        const status = {
            status: 'processing'
        };
        request(server)
        .put('/api/v1/parcels/71/status')
        .send(status)
        .end((err,res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            done();
        });
    });

    it('should cancel a Parcel, Parcel successfully cancelled', (done) => {
        const status = {
            status: 'cancelled'
        };
        request(server)
        .put('/api/v1/parcels/7/cancel')
        .send(status)
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });

    it('it should update the status of a Parcel, Status successfully changed', (done) => {
        const test_status = {
            status: "processing"
        }
        request(server)
            .put('/api/v1/parcels/3/status')
            .send(test_status)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });

//    it('should return a 400 error, status field required', (done) => {
//         const status = {
//         };
//         request(server)
//         .put('/api/v1/parcels/7/status')
//         .send(status)
//         .end((err,res) => {
//             res.should.have.status(400);
//             res.body.should.be.a('object');
//             done();
//         }); 
//     });
});

describe('/POST /api/v1/parcels', () => {
    it('should create a parcel', (done) => {
        const parcel = {
            placedBy: 1,
            weight: "500KG",
            weightMetric: "200KG",
            status: "pending",
            to: "Lagos",
            from: "Abuja",
            currentLocation: "Benin"
        };
        request(server)
            .post('/api/v1/parcels')
            .send(parcel)
            .end((err,res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            });
    });
    
});

