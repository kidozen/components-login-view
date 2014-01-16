var LoginController = function (view, model) {
    var self = this;
    if (!view) view = View($);
    if (!model) model = new Model();

    this.loadSignin = function () {
        if (window.localStorage) {
            console.log("checking browser's localStorage");
            // If the user authenticated once, then the credentials are being
            // cached in `localStorage`
            var get = localStorage.getItem.bind(localStorage);
            options.username    = get("username")    || options.username;
            options.password    = get("password")    || options.password;
            options.application = get("application") || options.application;
            options.marketplace = get("marketplace") || options.marketplace;
        }
        // populate Sign In Page with cached values
        view.login.load(options);
        if (options.username &&
            options.password &&
            options.application &&
            options.marketplace) {
            // No need to present the login screen, we have the credentials
            // let's authenticate the user automatically.
            controller.signin();
        } else {
            view.login.show();
        }
    };

    this.signin = function () {
        console.log('signing in');
        //TODO: validate input
        var username = view.login.username();
        var password = view.login.password();
        var application = view.login.application();
        var marketplace = view.login.marketplace();

        model.authenticate(username, password, application, marketplace)
            .done(function () {
                self.loadHome();
                //authentication settings are valid, so store them
                if (window.localStorage) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                    localStorage.setItem("application", application);
                    localStorage.setItem("marketplace", marketplace);
                }
            })
            .fail(function () {
                view.alert('An error occurred while authenticating the user');
            });
    };

    this.signout = function () {
        console.log('signing out');
        model.signout();
        view.login.show();
    };
};