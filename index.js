var htmlTemplate = require('./templates/htmlTemplate.js');
var designerHtml = require('./template.js');
var events = require('event'); 

var LoginView = function () {
    var self = this;
    var onSaveFn;
    var settings;

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
                cdvCfg = {
                    htmlTemplate : replace(htmlTemplate)
                };
                console.log(JSON.stringify(cdvCfg));                
                if (cb) cb(cdvCfg)
            }
        },{
            platform: 'ios',
            generate: function (config, cb) {
                console.log('generate 4 ios');
                if (cb) cb(config)
            }
        }
    ];

    function replace (content) {
        //TODO: Use the Gus's suggestion (Cant remember)
        return content;
    }

    //For UnitTest
    this.executeTranslator = function(options,cb) {
        translators.filter(function (el) {
            return el.platform === options.platform;
        })[0].generate(options, cb);
    };

}

module.exports = LoginView;
