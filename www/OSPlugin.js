var exec = require('cordova/exec');


exports.showToast = function (message, duration, success, error) {
    exec(success, error, 'OSPlugin', 'showToast', [message, duration]);
};
