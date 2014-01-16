var LoginComponent = require('login-view');
//ctrl+cmd+g
describe("login cordova", function () {
    var loginCmp = new LoginComponent(); 
    describe("cordova translators", function () {
        it("should execute 'executeTranslator' ", function () {
            loginCmp.executeTranslator({platform:"cordova"}, function (result) {
                expect(result.htmlTemplate!=undefined).toBe(true);
            }); 
        });
    });
});