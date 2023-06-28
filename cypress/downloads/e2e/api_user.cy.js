const faker = require('faker');
const token = "a8a459e2-4d18-4d24-9391-49f611e7dadf"

describe("User's Module", function(){

    let userid;
    /*let token;

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

          expect(res.body.message).to.equal('success');

      })
  })*/

    it('Get All the Users', function(){
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Users',
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response=>{
            cy.log(JSON.stringify(response));

            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        });
    });

    it('Create New User', function(){
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Users',
            headers:{
                Authorization: `Bearer ${token}`,
            },
            body:{
                id: faker.random.number(),
                name: faker.internet.userName(),
                email: faker.internet.email(),
                profilePicture: faker.image.people(),
                location: faker.address.country(),
                createdat: faker.date.recent()
            },
            
        }).then(response=>{
            cy.log(JSON.stringify(response));

            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created');

            const user = response.body;
            userid = user.id;
            cy.log(userid);
        });
    });

    it('Get User by ID', function(){
        cy.request({
            method: 'GET',
            url: `http://restapi.adequateshop.com/api/Users/${userid}`,
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(response=>{
            cy.log(JSON.stringify(response));

            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        });
    });

    it('Update User by ID', function(){
        cy.request({
            method: 'PUT',
            url: `http://restapi.adequateshop.com/api/Users/${userid}`,
            headers:{
                Authorization: `Bearer ${token}`
            },
            body:{
                name: faker.internet.userName(),
                email: faker.internet.email(),
                profilePicture: faker.image.people(),
                location: faker.address.country(),
                createdat: faker.date.recent()
            }
        }).then(response=>{
            cy.log(JSON.stringify(response));

            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        });
    });

    it('Delete User by ID', function(){
        cy.request({
            method: 'DELETE',
            url: `http://restapi.adequateshop.com/api/Users/${userid}`,
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(response=>{
            cy.log(JSON.stringify(response));

            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        });
    });
})
