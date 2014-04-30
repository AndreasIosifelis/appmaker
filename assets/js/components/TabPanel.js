$.extend({
    TabPanel:function(cfg){
        
        this.options = $.extend({
            cls: "center-panel app-panel",
            renderTo:undefined            
        }, cfg);
        
        this.tabPanel = $("<div />");
        
        this.tabList = $("<ul />");
        
        
        this.initComponent = function(){
            this.tabPanel.append(this.tabList);            
            this.options.renderTo.append(this.tabPanel);
        };
        
        this.addTab = function(tab){
            
            var title = $("<li />");
            var titleLink = $("<a />");
                titleLink.
                        attr("href", "#" + tab.id).
                        html(tab.title);
            var closeBtn = $("<span />");
                closeBtn.
                        attr("role", "presentation").
                        addClass("ui-icon ui-icon-close").
                        html("Remove Tab");
                        
            
            
            this.tabList.append(tab.title);
            
            
        };
        
        
        this.initComponent();
        
    }
});


