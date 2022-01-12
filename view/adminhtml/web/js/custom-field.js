define([
    'Magento_Ui/js/form/element/abstract',
    'underscore'
], function (Abstract, _) {
    "use strict";

    return Abstract.extend({
        defaults: {
            listens: {
                focused: 'transform'
            },
            exports: {
                value: 'ns = ${ $.ns }, index = total_refunded:visible'
            }
        },
        toggleTotalRefunded: function () {
            if (!_.isEmpty(this.value())) {
                var value = Number(this.value());
                if (value === 0) {
                    registry.get(this.parent)
                }
            }
        },
        transform: function (focused) {
            if (!_.isEmpty(this.value())) {
                var value = Number(this.value());
                if (!focused && !_.isNaN(value)) {
                    this.value(value.toFixed(3));
                }
            }
        }
    });
});