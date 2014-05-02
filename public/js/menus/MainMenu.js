$.extend({
    MainMenu:function(westPanel){
        
        var mainMenu = new $.MenuPanel({
           renderTo:westPanel,
           title: Localizer.MAIN_MENU
        });
        
        var personsNode = mainMenu.createNode({
            label:"Persons",
            id:"persons"
            
        });
        
//        var usersNode = {
//            label:"Users",
//            id:"users",
//            click:function(){
//                alert("Users");
//            }
//        };
//        
//        var customersNode = {
//            label: "Customers",
//            id:"customers",
//            click:function(){
//                alert("Customers");
//            }
//        };
//        
//        var personsNode = {
//            label:"Persons",
//            id:"persons",
//            children:[usersNode,customersNode]
//        };
//        
//        var rootNodes = [personsNode];
//        
//        var mainMenu = new $.MenuPanel({
//            renderTo: westPanel,
//            title: Localizer.MAIN_MENU,
//            nodes:rootNodes
//        });
        
        
        
    }
});


