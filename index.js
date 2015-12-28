(function (exports) {
    'use strict';
    
    var bannedNames = Object.keys(GLOBAL || window);

    exports.createSandBox = function (allowedNames) {
        var names = bannedNames.concat([]);
        
        if (allowedNames && Array.isArray(allowedNames)) {
            allowedNames.forEach(function (allowName) {
                var index = names.indexOf(allowName);
                
                if (index >= 0) {
                    names.splice(index, 1);
                }
            });
        }
        
        return {
            createFunction: function (params, code) {
                params = params && Array.isArray(params) ? params : [];
                
                return Function.apply(null, Array.prototype.concat(params, names, [code]));
            }
        };
    };
})(typeof exports === 'undefined' ? window['ucode'] = {} : exports);