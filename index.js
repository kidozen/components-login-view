var modelTemplate = require('./templates/modelTemplate.js');
var controllerTemplate = require('./templates/controllerTemplate.js');
var htmlTemplate = require('./templates/htmlTemplate.js');
var designerHtml = require('./template.js');
var events = require('event'); 

var LoginView = function () {
    var self = this;
    var onSaveFn;
    var settings;

    Object.defineProperty(this, "name", {
        value: 'LoginView',
        writable: false,
        enumerable: false,
        configurable: true
    });

    Object.defineProperty(this, "version", {
        value: '1.0.0',
        writable: false,
        enumerable: false,
        configurable: true
    });

    this.onSave = function (onsave) {
        //TODO: validate fields
        onSaveFn = onsave;
    }

    //config has previous configuration
    this.show = function (config) {
        settings = config ? config : {};
        document.write(designerHtml);
        if (settings.marketplace) document.getElementById('marketplace').value = settings.marketplace;
        if (settings.application) document.getElementById('application').value = settings.application;
        if (settings.provider) document.getElementById('provider').value = settings.provider;           
        
        var submit = document.querySelector('input[type="submit"]');
        events.bind(submit, 'click', function() {
            save();
        });
    };

    save = function () {
        var config = {};
        config.marketplace = document.getElementById('marketplace').value;
        config.application = document.getElementById('application').value;
        config.provider = document.getElementById('provider').value;

        translators.forEach(function (t) {
            t.generate(config, onSaveFn);
        });
    };

    var translators = [
        {
            platform: 'cordova',
            generate: function (config, cb) {
                var cdvCfg = {
                    htmlTemplate : replace(htmlTemplate),
                    modelTemplate: replace(modelTemplate),
                    controllerTemplate: replace(controllerTemplate)
                };
                if (cb) cb(cdvCfg)
            }
        }
    ];

    function replace (content) {
        return content;
    }
}

module.exports = LoginView;
