$.extend({
    MainMenu:function(westPanel){
        
        var mainMenu = new $.MenuPanel({
            renderTo: westPanel,
            title: "Main Menu",
            nodes:[{
               label: "Persons",
               id:"persons",
               children:[{
                       label:"Users",
                       id:"users",
                       click:function(e){
                           alert("users");
                       }
               },{
                   label:"Customers",
                   id:"customers",
                   click:function(){
                       alert("customers");
                   }
               }]
            },{
                label:"My Account",
                id:"My Account",
                children:[{
                        label:"Profile",
                        id:"profile",
                        click:function(){
                            alert("Profile");
                        }
                },{
                    label:"Change Credentials",
                    id:"cc",
                    click:function(){
                        alert("Change Credentials");
                    }
                }]
            }]
        });
        
    }
});


