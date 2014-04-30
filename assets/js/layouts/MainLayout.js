$.extend({
    MainLayout:function(){
        
        var northPanel = $("<div />");
        var westPanel = $("<div />");
        var centerPanel = $("<div />");
        
        
        northPanel
                .addClass("north-panel app-panel")
                .html("North Panel");
        
        westPanel
                .addClass("west-panel app-panel")
                .html("West Panel");
        
        centerPanel
                .addClass("center-panel app-panel")
                .html("Center Panel");
        
        
        $.MainMenu(westPanel);
        
        
        $("#AppContainer")
                .append(northPanel)
                .append(westPanel)
                .append(centerPanel);
    }
});


