var nf = sm("do_Notification");
var imageview=ui("AlayoutRoot");
var app;
app = sm("do_App");
imageview.on("touch",function(data, e){
//    nf.alert("Photo 3");
    app.openPage({source:"source://view/ding/slideview/sli_de.ui", data:"3", animationType:"", isFullScreen:false, keyboardMode:"default", scriptType:""}, function(data, e){});
});