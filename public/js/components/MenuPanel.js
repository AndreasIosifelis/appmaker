$.extend({
    MenuPanel: function(_options) {

        this.options = $.extend({
            renderTo: _options.renderTo,
            title: "Main",
            mode: "local",
            nodes: []
        }, _options);

        this.list = $("<ul />");
        
        this.initComponent = function(){
            this.list.menu();
            this.options.renderTo.append(this.list);
        };
        
        this.createNode = function(node){
            var li = $("<li />"),
                a = $("<a />");

            a
                    .attr("href", "#")
                    .on("click", node.click)
                    .html(node.label);

            li.append(a);
            if(node.children){
                for(var i=0;i<node.children.length;i++){
                    var ls = $("<ul />");
                    ls.append(node.children[i]);
                }
                li.append(ls);                
            }
            
            return li;
        };
        

//        this.createTree = function() {
//            for (var i = 0; i < this.options.nodes.length; i++) {
//                var node = this.options.nodes[i];
//                this.list.append(this.createNode(node));
//            }
//            this.list.menu();
//            this.createTitle();
//        };
//
//        this.createList = function(nodes, li) {
//            var ls = $("<ul />");
//            for (var i = 0; i < nodes.length; i++) {
//                ls.append(this.createNode(nodes[i]));
//            }
//            return ls;
//        };
//
//        this.createNode = function(node) {
//            var li = $("<li />"),
//                    a = $("<a />");
//
//            a
//                    .attr("href", "#")
//                    .on("click", node.click)
//                    .html(node.label);
//
//            li.append(a);
//            if (node.children) {
//                var ls = this.createList(node.children, li);
//                li.append(ls);
//            }
//            
//            return li;
//        };
//
//        this.createTitle = function() {
//            var title = $("<li />"),
//                    a = $("<a />");
//            a
//                    .attr("href", "#")
//                    .html(this.options.title);
//            title
//                    .addClass("ui-state-disabled")
//                    .append(a);
//
//            this.list.prepend(title);
//        };
//
//
//        this.initComponent = function() {
//            this.createTree(this.options.nodes);     
//
//            this.options.renderTo.append(this.list);
//        };
//
//
//        this.initComponent();

    }
});
