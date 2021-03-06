var LoginComponent = require('login-view');

describe("DOM Test", function () {

    it("should show in document", function(){
        var loginCmp = new LoginComponent().show(); 
        var myEl = document.getElementById('application');
        (myEl.placeholder).should.equal("Application");
    });

    it("should show in document with Configuration", function() {
        var loginCmp = new LoginComponent().show({ application : "tasks"}); 
        var myEl = document.getElementById('application');
        (myEl.value).should.equal("tasks");
    });

    it("should fire onClickEvent and return templates", function() {
        var loginCmp = new LoginComponent();
        loginCmp.onSave (function (saveCfg) {
            saveCfg.should.have.property('htmlTemplate');
            saveCfg.should.have.property('modelTemplate');
            saveCfg.should.have.property('controllerTemplate');
        });
        loginCmp.show();
        var myEl = document.querySelector('input[type="submit"]');
        myEl.click();

        window.setTimeout(function(){},1000);
    });
});