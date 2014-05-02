$.extend({
    MainMenu:function(renderTo){
        
        var mainMenu = new $.MenuPanel({
           renderTo:renderTo,
           title: Localizer.MAIN_MENU
        });       
        
        var _nodeUsers = mainMenu.createNode({
            label:"Users",
            click:function(){
                alert("Users");
            }
        });
        
        var _nodeCustomers = mainMenu.createNode({
            label:"Customers",
            children:[],
            click:function(){
                alert("Customers");
            }
        });
        
        var _nodePersons = mainMenu.createNode({
            label:"Persons",
            id:"persons",
            children:[_nodeUsers, _nodeCustomers]
        });
        
        
        var _nodeProfile = mainMenu.createNode({
            label:"Profile",
            click:function(){ alert("Profile");}
        });
        
        var _nodeChangeCredentials = mainMenu.createNode({
            label:"Change Credentials",
            click:function(){ alert("Change Credentials");}
        });
        
        var _nodeMyAccount = mainMenu.createNode({
           label: "My Account",
           id:"myAccount",
           children:[_nodeProfile, _nodeChangeCredentials]
        });
        
        var _nodeLogout = mainMenu.createNode({
            label:"Logout",
            click:function(){
                alert("Logout");
            }
        });
        
        mainMenu.list
                .append(_nodePersons)
                .append(_nodeMyAccount)
                .append(_nodeLogout);
        
        mainMenu.initComponent();
        $.Application["MainMenu"] = mainMenu;
        
    }
});


