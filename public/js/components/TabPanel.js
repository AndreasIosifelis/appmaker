$.extend({
    TabPanel: function(_options) {

        this.options = $.extend({
            renderTo: _options.renderTo
        }, _options);

        this.tabBox = $("<div />");

        this.tabsList = $("<ul />");

        this.initComponent = function() {

            this.tabBox.prepend(this.tabsList);

           
            
            this.options.renderTo.append(this.tabBox);
            this.tabBox.tabs();
            this.tabBox.tabs("refresh");
        };

        this.createTab = function(title, id, content) {
            this.tabsList
                    .append(this.createTabTitle(title, id));

            this.tabBox
                    .append(this.createTabContent(id, content));
        };

        this.createTabTitle = function(title, id) {
            var tt = $("<li />"),
                    a = $("<a />"),
                    close = $("<span />");

            a
                    .attr("href", "#" + id)
                    .html(title);
            close
                    .addClass("ui-icon ui-icon-close")
                    .attr("role", "presentation");

            tt
                    .append(a)
                    .append(close);
            
            return tt;
        };

        this.createTabContent = function(id, content) {
            var tc = $("<div />");

            tc
                    .attr("id", id)
                    .html(content);
            
            return tc;
        };
    }
});


