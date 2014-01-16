var LoginView = function ($) {
    return {
        alert: function (msg) {
            //TODO: do something fancier.
            alert(msg);
        },

        login: {
            load: function (opts) {
                $("#sign-in-page .loading").hide();
                $("#sign-in-page .loaded").show();
                $("#username").val(opts.username);
                $("#password").val(opts.password);
                $("#application").val(opts.application);
                $("#marketplace").val(opts.marketplace);
            },
            show: function () {
                $.mobile.changePage("#sign-in-page");
            },
            username: function () {
                return $("#username").val();
            },
            password: function () {
                return $("#password").val();
            },
            application: function () {
                return $("#application").val();
            },
            marketplace: function () {
                return $("#marketplace").val();
            }
        }
    }
}