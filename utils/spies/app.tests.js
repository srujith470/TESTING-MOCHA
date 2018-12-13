const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
 
describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    }
app.__set__('db',db)


    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('andrew', 25);
        expect(spy).toHaveBeenCalledWith('andrew', 25);
    });

    it('should call saveUser with user object with rewire and', () => {
        var email = 'sdfg@gmail.com';
        var password  = 'asd123'
        
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password})
    });
});