$.extend({
    Application:{
        start:function(sessionId){
            //console.log(sessionId);
            this.applyMainLayout();
        },
        applyMainLayout:function(){
            $.MainLayout();
        }
    }
});


