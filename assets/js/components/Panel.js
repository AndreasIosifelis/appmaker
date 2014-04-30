$.extend({
    Panel: function(cfg){
        this.options = $.extend({
            cls: "app-panel",
            renderTo: undefined
        }, cfg);
        
        this.panel = $("<div />");
        
        this.initComponent = function(){
            this.renderTo.append(this.panel);
        };   
        
    }
});


