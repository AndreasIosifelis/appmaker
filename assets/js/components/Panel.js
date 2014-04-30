$.extend({
    Panel: function(_options) {
        this.options = $.extend({
            cls: "app-panel",
            renderTo: undefined
        }, _options);

        this.panel = $("<div />");

        this.initComponent = function() {
            this.renderTo.append(this.panel);
        };
    }
});


