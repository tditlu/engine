Object.assign(pc, function () {
    'use strict';

    var JsonHandler = function () {

    };

    Object.assign(JsonHandler.prototype, {
        load: function (url, callback) {
            pc.http.get(url, function (err, response) {
                if (!err) {
                    callback(null, response);
                } else {
                    callback(pc.string.format("Error loading JSON resource: {0} [{1}]", url, err));
                }
            });
        },

        open: function (url, data) {
            return data;
        },

        patch: function (asset, assets) {
        }
    });

    return {
        JsonHandler: JsonHandler
    };
}());
