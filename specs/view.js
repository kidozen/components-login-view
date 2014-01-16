var LoginComponent = require('login-view');
//ctrl+cmd+g
describe("login view", function () {
    it("should show in document", function(){
        var loginCmp = new LoginComponent(); 
        loginCmp.onSave (function (config) {
            expect(config.htmlTemplate).toBe(true);
        });
        loginCmp.show(); 
    });
    it ("should fail for the example", function() {
        expect(false).toBeTruthy();
    });
});