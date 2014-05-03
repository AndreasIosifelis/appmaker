$.extend({
    MainTabPanel:function(renderTo){
        
        var tabPanel = new $.TabPanel({
            renderTo:renderTo
        });
        
        tabPanel.createTab("DashBoard", "DashBoard-tab","This is the dashBoard Content");
        
        tabPanel.initComponent();
        tabPanel.tabBox.tabs( "option", "heightStyle", "fill" );
        $.Application["MainTabPanel"] = tabPanel;
        
    }
});