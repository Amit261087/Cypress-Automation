const faker = require('faker')

describe('API Testing', function() {

  let studentid;
  let orderid;
  let petid;
  let userName;
  let userId;

  it('Create User', function() {

    
      const fakeUsername = faker.internet.userName();
      const fakeEmail = faker.internet.email();
    
      cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        body: {
          id: 0,
          username: fakeUsername,
          firstname: faker.name.firstName(),
          lastname: faker.name.lastName(),
          email: fakeEmail,
          password: faker.internet.password(),
          phone: faker.phone.phoneNumber(),
          userStatus: 0
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal("OK");
        
        userName = fakeUsername;
        cy.log(userName);
      });
   
  });

  it('Get User By UserName', function() {
    //cy.wait(5000); // Adding a small delay to ensure the username is available

    const url = `https://petstore.swagger.io/v2/user/${userName}`;

    cy.request({
      method: 'GET',
      url: url
    }).then(response => {
      cy.log(JSON.stringify(response));

      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal("OK");
      console.log(response.body);
    });
  });

  it('Update User By UserName', function() {
    //cy.wait(5000); // Adding a small delay to ensure the username is available

    const url = `https://petstore.swagger.io/v2/user/${userName}`;

    cy.request({
      method: 'PUT',
      url: url,
      body: {
        id: userId,
        username: userName,
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.phoneNumber(),
        userStatus: 1
      }
    }).then(response => {
      cy.log(JSON.stringify(response));

      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal("OK");
      

      console.log(response.body);
    });
  });

  it('Delete User By UserName', function() {
    //cy.wait(5000); // Adding a small delay to ensure the username is available

    const url = `https://petstore.swagger.io/v2/user/${userName}`;

    cy.request({
      method: 'DELETE',
      url: url
    }).then(response => {
      cy.log(JSON.stringify(response));

      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal("OK");
      console.log(response.body);
    });
  });

  it('Place Order', function(){
    const id = 10;
    const petid = 2;
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/store/order',
      body:{
        id: id,
        petid: petid,
        quantity: 15,
        shipdate: '2023-06-12',
        status: 'placed',
        complete: true
      }
    }).then(response=>{
      cy.log(JSON.stringify(response));

      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK');

      console.log(response.body);

      orderid = id;
      cy.log(orderid)
    })
  })

  it('Get Order', function(){
    cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/store/order/${orderid}`
    }).then(response=>{
      cy.log(JSON.stringify(response));

      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK');
    })
  })

  it('Delete Order', function(){
    cy.request({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/store/order/${orderid}`
    }).then(response=>{
      cy.log(JSON.stringify(response));

      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK');
    })
  })

  it('Add Pet', function(){
    const id = faker.random.number();
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body:{
        id: id,
        category: {
          id: faker.random.number(),
          name: faker.animal.type()
        },
        name: faker.animal.bear(),
        photoUrls: [
          "string"
        ],
        tags: [
        {
          id: 0,
          name: "string"
        }
        ],
        status: "available"
      }
    }).then(response=>{
      cy.log(JSON.stringify(response));
      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK');

      petid = id;
      cy.log(petid)
    })
  })

  it('Get Peth By ID', function(){
    cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/pet/${petid}`
    }).then(response=>{
      cy.log(JSON.stringify(response));

      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK');
    })
  })

  it('Update Pet Details', function(){
    cy.request({
      method: 'PUT',
      url: `https://petstore.swagger.io/v2/pet/${petid}`,
      body:{
        category: {
          id: faker.random.number(),
          name: faker.animal.type()
        },
        name: faker.animal.bear(),
        photoUrls: [
          "string"
        ],
        tags: [
        {
          id: 0,
          name: "string"
        }
        ],
        status: "available"
      }
    }).then(response=>{
      cy.log(JSON.stringify(response));

      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK');
    })
  })

  it('Delete Pet ID', function(){
    cy.request({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/pet/${petid}`
    }).then(response=>{
      cy.log(JSON.stringify(response));

      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK')
    })
  })

  it('Add Student', function(){
    
    const id = faker.random.number();
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/students',
      body:{
        id: id,
        name: faker.internet.userName(),
        location: faker.address.country(),
        phone: faker.phone.phoneNumber(),
        course: [
        "java",
        "Jscript"
        ]
      }
    }).then(response=>{
      cy.log(JSON.stringify(response));
      expect(response.status).to.equal(201);
      expect(response.statusText).to.equal('Created')

      studentid = id;
      cy.log(studentid)
    })
  })

  it('Get Student Details by Student ID', function(){
    cy.request({
      method: 'GET',
      url: `http://localhost:3000/students/${studentid}`
    }).then(response=>{
      cy.log(JSON.stringify(response));

      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK');
    })
  })

  it('Update Student for given Student ID', function(){
    cy.request({
      method: 'PUT',
      url: `http://localhost:3000/students/${studentid}`,
      body:{
        
        name: faker.internet.userName(),
        location: faker.address.country(),
        phone: faker.phone.phoneNumber(),
        course: [
        "C",
        "C++"
        ]
      }
    }).then(response=>{
      cy.log(JSON.stringify(response));

      expect(response.status).to.equal(200)
      expect(response.statusText).to.equal('OK')
    })
  })

  it('Delete Student by Student ID', function(){
    cy.request({
      method: 'DELETE',
      url: `http://localhost:3000/students/${studentid}`
    }).then(response=>{
      cy.log(JSON.stringify(response));

      expect(response.status).to .equal(200);
      expect(response.statusText).to.equal('OK');
    })
  })
});