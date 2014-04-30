$.extend({
    MenuPanel: function(_options) {

        this.options = $.extend({
            renderTo: _options.renderTo,
            title: "Main",
            nodes: []
        }, _options);

        this.list = $("<ul />");

        this.createList = function(nodes, cl) {
            var list = cl ? $("<ul />") : this.list;
            for (var i = 0; i < nodes.length; i++) {
                list.append(this.createNode(nodes[i]));
                if(nodes[i].children){
                    this.createList(nodes[i].children, true);
                }
                continue;
            }
        };

        this.createNode = function(node) {
            var li = $("<li />"),
                    a = $("<a />");

            a
                    .attr("href", "#")
                    .on("click", node.click)
                    .html(node.label);

            li.append(a);

            return li;

        };

        this.createTitle = function() {
            var title = $("<li />"),
                    a = $("<a />");
            a
                    .attr("href", "#")
                    .html(this.options.title);
            title
                    .addClass("ui-state-disabled")
                    .append(a);

            this.list.prepend(title);
        };


        this.initComponent = function() {
            //debugger;
            this.createList(this.options.nodes, false);
            this.createTitle();
            this.list.menu();

            this.options.renderTo.append(this.list);
        };


        this.initComponent();

    }
});
