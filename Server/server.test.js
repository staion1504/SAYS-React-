const request = require('supertest');
const app = require('./server1.js')     


describe('POST User auth', () => {
    describe('/login for USER given mail and password', () => {
        it('should give 200 response on correct credentials ', async () => {
            const response = await request(app).post("/login").send({
                email: "surya@gmail.com",
                password: "Surya@123"
              })
              expect(response.statusCode).toBe(200)
        },20000);

        it('should give 400 response on Incorrect credentials ', async () => {
            const response = await request(app).post("/login").send({
                email: "surya12@gmail.com",
                password: "Surya@_123"
              })
              expect(response.statusCode).toBe(400)
        },20000);

});
})


describe('POST Theatre auth', () => {
    describe('/Tlogin for Theatre given mail and password', () => {
        it('should give 200 response on correct credentials ', async () => {
            const response = await request(app).post("/Tlogin").send({
                email: "Apsara@gmail.com",
                License: "100000",
                password: "Apsara@123"
              })
              expect(response.statusCode).toBe(200)
        },20000);

        it('/Tlogin should give 400 response on Incorrect credentials ', async () => {
            const response = await request(app).post("/Tlogin").send({
                email: "Asara@gmail.com",
                License: "10000",
                password: "Apsara_123"
              })
              expect(response.statusCode).toBe(400)
        },20000);

});
})

describe('POST Register', () => {
    describe('/TSignup for Theatre given mail and password', () => {
        it('should give 200 response on correct credentials ', async () => {
            const response = await request(app).post("/TSignup").send({
                Theatre_Name: "ABC Theatre",
                email: "abcd@example.com",
                Contact_Number1: "1234567890",
                Contact_Number2: "9876543210",
                Street: "123 Main Street",
                City: "City",
                State: "State",
                Pincode: "123456",
                License_Number: "ABCDEF",
                Login_password: "password",
                nearbyplace1: "Place 1",
                nearbyplace2: "Place 2",
                nearbyplace3: "Place 3",
                nearbyplace4: "Place 4"
              })
              expect(response.statusCode).toBe(200)
        },20000);
});
})












