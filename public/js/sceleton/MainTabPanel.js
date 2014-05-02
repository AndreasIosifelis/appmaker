$.extend({
    MainTabPanel:function(renderTo){
        
        var tabPanel = new $.TabPanel({
            renderTo:renderTo
        });
        
        tabPanel.createTab("DashBoard", "DashBoard-tab","<p>This is the dashBoard Content</p>");
        
        tabPanel.initComponent();
        
        $.Application["MainTabPanel"] = tabPanel;
        
    }
});