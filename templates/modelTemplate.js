Model.prototype.authenticate = function (username, password, application, marketplace, provider) {
    // if we are running in localhost, then it means we are developing,
    // so we are already authenticated
    if (window.location.hostname == "localhost") {
        return $.Deferred().resolve();
    }
    var kido = new Kido(application, marketplace);
    return kido.authenticate(username, password, provider)
        .done(function () {
            // ....
        });
};

Model.prototype.signout = function () {
    //....
};
