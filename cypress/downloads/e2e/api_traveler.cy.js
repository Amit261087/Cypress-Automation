const faker = require('faker');
const xml2js = require('xml2js');
const { Builder } = require('xml2js');
//const token = "a8a459e2-4d18-4d24-9391-49f611e7dadf"


describe('Travaler API', function(){

    let travelerId;
    let token;

    it('Create Token', function(){
      cy.request({
          method: 'POST',
          url: 'http://restapi.adequateshop.com/api/AuthAccount/Login',
          body:{
              email: 'amit.sharmaamit.sharma692@gmail.com',
              password: 'May@2023'
          }
      }).then(res=>{
          cy.log(JSON.stringify(res));

          expect(res.status).to.equal(200);
          expect(res.statusText).to.equal('OK');
          
          const resToken = res.body;
          token = resToken.Token;
          cy.log(resToken.Token);
          cy.log(token)
          
          expect(res.body.message).to.equal('success');

      })
  })

    it('Get All Travelrs', function(){
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Traveler',
            headers:{
                Accept: 'application/xml'
            },
            responseType: 'xml'
        }).then(response=>{
            cy.log(response.body);

            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
            expect(response.headers['content-type']).to.include('application/xml');
        });
    });


    it('Create New Traveler', function() {
      const requestData = {
        Travelerinformation: {
          id: faker.random.number(),
          name: faker.name.firstName(),
          email: faker.internet.email(),
          adderes: faker.address.streetAddress(),
          createdat: faker.date.past().toISOString(),
        },
      };

      const builder = new Builder();
      const requestBody = builder.buildObject(requestData);

      cy.request({
        method: 'POST',
        url: 'http://restapi.adequateshop.com/api/Traveler',
        body: requestBody,
        headers: {
          'Content-Type': 'application/xml',
          Authorization: `Bearer ${token}`      
        },
        responseType: 'xml'
      }).then(response => {
        cy.log(response.body);

        expect(response.status).to.equal(201);
        expect(response.statusText).to.equal('Created');

        const responseBody = response.body;
    
        xml2js.parseString(responseBody, (err, result) => {
          if (err) {
            throw new Error('Error parsing XML response');
          }
    
          // Extract the traveler ID from the parsed result
          travelerId = result.Travelerinformation.id;
    
          cy.log(travelerId);
        });
      });
    });

    it('Get Traveler by Id', function(){
      cy.request({
        method: 'GET',
        url: `http://restapi.adequateshop.com/api/Traveler/${travelerId}`,
        headers:{
          Authorization: `Bearer ${token}`,
          //Accept: 'application/xml'
        },
        //responseType: 'xml'
      }).then(response=>{
          cy.log(response.body);

          expect(response.status).to.equal(200);
          expect(response.statusText).to.equal('OK');
          expect(response.headers['content-type']).to.include('application/xml');
      });
    });

    it('Update Traveler ID', function(){
      const requestData = {
        Travelerinformation: {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          adderes: faker.address.streetAddress(),
          createdat: faker.date.past().toISOString(),
        },
      };

      const builder = new Builder();
      const requestBody = builder.buildObject(requestData);

      cy.request({
        method: 'PUT',
        url: `http://restapi.adequateshop.com/api/Traveler/${travelerId}`,
        body: requestBody,
        headers: {
          'Content-Type': 'application/xml',
          Authorization: `Bearer ${token}`      
        },
        //responseType: 'xml'
      }).then(response => {
        cy.log(response.body);

        expect(response.status).to.equal(201);
        expect(response.statusText).to.equal('Created');
      })
    })

    it('Delete Traveler by Id', function(){
      cy.request({
        method: 'DELETE',
        url: `http://restapi.adequateshop.com/api/Traveler/${travelerId}`,
        headers:{
          Authorization: `Bearer ${token}`,
          //Accept: 'application/xml'
        },
        //responseType: 'xml'
      }).then(response=>{
          cy.log(response.body);

          expect(response.status).to.equal(200);
          expect(response.statusText).to.equal('OK');
          expect(response.headers['content-type']).to.include('application/xml');
      });
    });

    describe('test', function(){
      it('Test', function(){
        cy.log("Hello World")
        console.log("Heloo")
      })
    })
});