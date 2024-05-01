const request = require('supertest');
const app = require('./server1.js')     



describe('POST  user',()=>{
  describe('User Registration API', () => {
    // Test case for registering a new user
    it('should register a new user', async () => {
      // Increase the timeout to 10 seconds
     
      const userData = {
        "First_Name": "string",
        "Last_Name": "string",
        "DOB": "string",
        "email": "string",
        "Mobile_Number": "string",
        "gender": "string",
        "Login_password": "string",
        "Profile_password": "string",
        "Card_Name": "string",
        "Card_Number": "string",
        "CVV": "string",
        "Expiry": "string"
      };
  
      // Make a POST request to register a new user
      const response = await request(app).post('/Signup').send(userData);
  
      // Check the response status code
      expect(response.status).toBe(201);
      // Check if the response body contains the expected message
    },200000);
  
  });

});


