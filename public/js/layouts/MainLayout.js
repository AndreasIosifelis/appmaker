$.extend({
    MainLayout:function(){
        
        var northPanel = $("<div />");
        var westPanel = $("<div />");
        var centerPanel = $("<div />");
        
        
        northPanel
                .addClass("north-panel")
                .addClass("app-panel")
                .html("North Panel");
        
        westPanel
                .addClass("west-panel")
                .addClass("app-panel");
        
        centerPanel
                .addClass("center-panel")
                .addClass("app-panel");       
        
        $("#AppContainer")
                .append(northPanel)
                .append(westPanel)
                .append(centerPanel);
        
        $.MainTabPanel(centerPanel);
        $.MainMenu(westPanel);
    }
});


