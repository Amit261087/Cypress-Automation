const faker = require('faker')

describe('Customer API', function(){

    let customerid;

    

    it('Get All Customer', function(){
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Customer'
        }).then(response=>{
            cy.log(JSON.stringify(response));

            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        });
    });

    it('Create New Customer', function(){
        //const id = faker.random.number()
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Customer',
            body:{
                id: faker.random.number(),
                name: faker.internet.userName(),
                email: faker.internet.email(),
                location: faker.address.country()
            }
        }).then(response=>{
            cy.log(JSON.stringify(response));

            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created');

            const customer = response.body;
            customerid = customer.id;
            cy.log(customerid);
        });
    });

    it('Get Customer by ID', function(){
        cy.request({
            method: 'GET',
            url: `http://restapi.adequateshop.com/api/Customer/${customerid}`
        }).then(response=>{
            cy.log(JSON.stringify(response));

            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        });
    });

    it('Update Customer by ID', function(){
        cy.request({
            method: 'PUT',
            url: `http://restapi.adequateshop.com/api/Customer/${customerid}`,
            body:{
                name: faker.internet.userName(),
                email: faker.internet.email(),
                location: faker.address.country()
            }
        }).then(response=>{
            cy.log(JSON.stringify(response));

            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        });
    });

    it('Delete Customer by ID', function(){
        cy.request({
            method: 'DELETE',
            url: `http://restapi.adequateshop.com/api/Customer/${customerid}`
        }).then(response=>{
            cy.log(JSON.stringify(response));

            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        })
    })
});