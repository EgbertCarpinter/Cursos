const chai = require('chai');
const request = require('supertest');

const mongoosehelper = require('./mongoosehelper'); 
const fictures = require('./fictures'); 
const app =  require('../../src/app');
const expect = chai.expect;

describe('Threads endpoint', () => { // GET /threads
    describe(' when calling GET /threads', () => {
       describe('when basedate has theard', () => {
         before(async () => await fictures.seedThreads());  
         after(async ()=> await mongoosehelper.dropDatabase());    

         
    
         it('return a list of threads', () => {

           return request(app).get('/threads')

           .expect('content-type', /json/)  

           .expect(200)

           .then(response => {
  
            const{body} = response; 

            expect(body.data).to.have.length(2);
            expect(body.data[0].title).to.equal('El sistema de matrícula está dañado');
            expect(body.data[0].slug).to.equal('el-sistema-de-matricula-esta-danado')
            expect(body.data[1].title).to.equal('El problema de transporte en Panamá');
            expect(body.data[1].slug).to.equal('el-problema-de-transporte-en-panama');
           });
         });
        });
      
        describe('when basedate there no tread', () => { 
         it('returns an empty if there are no threads', () => {
            return request(app).get('/threads')
            
                        .expect('content-type', /json/)  
            
                        .expect(200)
            
                        .then(response => {
                
                        const { body } = response; 
            
            
                        expect(body.data).to.have.length(0);
                        
                        });
         });
       });
    });
       

    describe('when calling POST /threads',  () => {
        xit('created a new threads', () => {
        });
        xit('returns HTTPS code 400 if invalid params are sent', () => {
        });
    });
});