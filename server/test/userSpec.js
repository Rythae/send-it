import {should as _should, use, request} from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const should = _should();

use(chaiHttp);

describe('/POST /api/v1/auth/signup', () => {
    it('it should sign up a user', (done) => {
    const user = {
        firstname: "Mary",
        lastname: "Smith",
        othernames: "Lucy",
        email: "mary23lossy14@gmail.com",
        username: "marylosky",
        password: "passkeytt",
        isAdmin: 1
    }
    request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err,res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            done();
        })
    })

    it('it should return a 400 error if firstname is null', (done) => {
        const user = {
            lastname: "Smith",
            othernames: "Lucy",
            email: "maryheroku@gmail.com",
            username: "marylosky",
            password: "passkey12",
            isAdmin: 1
        }
    request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err,res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            done();
        })
    })

    it('should return a 400 error,if firstname is below or above length', (done) => {
        const user = {
            firstname: "Ma",
            lastname: "Smith",
            othernames: "Lucy",
            email: "maryheroku@gmail.com",
            username: "marylosky",
            password: "passkey12",
            isAdmin: 1
        }
        request(server)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err,res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
        })
    
        it('it should return a 400 error, if email is null', (done) => {
            const user = {
                firstname: "Mary",
                lastname: "Smith",
                othernames: "Lucy",
                username: "marylosky",
                password: "passkey12",
                isAdmin: 1
            }
        request(server)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err,res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
        })
    
        it('it should return a 400 error, if email is invalid', (done) => {
            const user = {
                firstname: "Mary",
                lastname: "Smith",
                othernames: "Lucy",
                email: "maryheroku",
                username: "marylosky",
                password: "passkey12",
                isAdmin: 1
            }
        request(server)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err,res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
        })
    
        it('should return a 400 error, if email is below or above length', (done) => {
            const user = {
                firstname: "Mary",
                lastname: "Smith",
                othernames: "Lucy",
                email: "ma.com",
                username: "marylosky",
                password: "passkey12",
                isAdmin: 1
            }
        request(server)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err,res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
        })

    
        it('should return a 400 error, if password is null', (done) => {
            const user = {
                firstname: "Mary",
                lastname: "Smith",
                othernames: "Lucy",
                email: "maryheroku@gmail.com",
                username: "marylosky",
                isAdmin: 1
            }
        request(server)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err,res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
        })
    
        it('should return a 400 error, if lastname is null', (done) => {
            const user = {
                firstname: "Mary",
                othernames: "Lucy",
                email: "maryheroku@gmail.com",
                username: "marylosky",
                password: "passkey12",
                isAdmin: 1
            }
        request(server)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err,res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
        })
    
        it('should return a 400 error, if password is invalid length', (done) => {
            const user = {
                firstname: "Mary",
                lastname: "Smith",
                othernames: "Lucy",
                email: "maryheroku@gmail.com",
                username: "marylosky",
                password: "passkey1269999999999990000000000000000000000",
                isAdmin: 1
            }
        request(server)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err,res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
        })
    
    })
    
    describe('/POST /api/v1/auth/login', () => {
        before((done) => {
            const user = {
                firstname: "Mary",
                lastname: "Smith",
                othernames: "Lucy",
                email: "marylossy14@gmail.com",
                username: "marylosky",
                password: "pass12345",
                isAdmin: 1
            }
        request(server)
            .post('/api/v1/auth/signup')
            .send(user)
            .end((err,res) => {
                done();
            })
        })
    
        it('it should login a user', (done) => {
        const user = {
            email: "mary23lossy14@gmail.com",
            password: "passkeytt"
        }
        request(server)
            .post('/api/v1/auth/login')
            .send(user)
            .end((err,res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
        })
    
        it('it should return a 400 error, if email is null', (done) => {
        const user = {
            password: "passkey12"
        }
        request(server)
            .post('/api/v1/auth/login')
            .send(user)
            .end((err,res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
        })
    
        it('it should return a 400 error, email syntax is invalid', (done) => {
        const user = {
            email: "lumary@gmail",
            password: "passkey12"
        }
        request(server)
            .post('/api/v1/auth/login')
            .send(user)
            .end((err,res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
        })
    
        it('it should return a 400 error, password is null', (done) => {
        const user = {
            email: "lumaryheroku@gmail.com"
        }
        request(server)
            .post('/api/v1/auth/login')
            .send(user)
            .end((err,res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
        })
    
        it('return a 400 error, password is below or above length', (done) => {
        const user = {
            email: "lumaryheroku@gmail.com",
            password: "111"
        }
        request(server)
            .post('/api/v1/auth/login')
            .send(user)
            .end((err,res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                done();
            })
        })
    
        it('return a 401 error, if user access not granted', (done) => {
        const user = {
            email: "lumary@gmail.com",
            password: "123456789"
        }
        request(server)
            .post('/api/v1/auth/login')
            .send(user)
            .end((err,res) => {
                res.should.have.status(401);
                res.body.should.be.a('object');
                done();
            })
        })
    
        it('return a 401 error, if incorrect password', (done) => {
        const user = {
            email: "lumaryheroku@gmail.com",
            password: "sheexypop"
        }
        request(server)
            .post('/api/v1/auth/login')
            .send(user)
            .end((err,res) => {
                res.should.have.status(401);
                res.body.should.be.a('object');
                done();
            })
        })
    })

