define([
    'underscore'
], function (_) {
    "use strict";

    var mixins = {
        validateFilterFields: function () {
            return _.every(this.elems.map(function (elem) {
                if (elem.visible() && _.isFunction(elem['validate']) && elem.validate()) {
                    return elem.validate();
                }
                return {
                    valid: true
                }
            }), 'valid');
        },
        modifiedApply: function (collapsible) {
            var valid = this.validateFilterFields();
            if (valid) {
                this.apply();
                collapsible.close();
                return this;
            } else {
                collapsible.open();
            }
            return false;
        }
    };

    return function (target) {
        return target.extend(mixins);
    }
});
