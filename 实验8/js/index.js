var btnFlag=1;
$("body").ready(function(){
   init();
});

$("body").on('click','.btn1',function(){
   $(".web1").show();
   $(".web2").hide();
   $(".web3").hide();
});
$("body").on('click','.btn2',function(){
   $(".web1").hide();
   $(".web2").show();
   $(".web3").hide();
});
$("body").on('click','.btn3',function(){
   $(".web1").hide();
   $(".web2").hide();
   $(".web3").show();
});
$("body").on('click','#m-item',function(){
   if(btnFlag==1){
	   var s = $(this).css("background-image");
      var obs ='blur('+10+'px)';
   }
   else {
      obs ='blur('+0;
   }
   $(".m-bigger").css("background-image",s).toggle(500,function(){
      btnFlag=1-btnFlag;
   });
   $('.wb1-border').css("filter",obs);
});
$("body").on('click','.wb2-btn1',function(){
   $(".wb2-box1").show();
   $(".wb2-box2").hide();
   $(".wb2-box3").hide();
});
$("body").on('click','.wb2-btn2',function(){
   $(".wb2-box1").hide();
   $(".wb2-box2").show();
   $(".wb2-box3").hide();
});
$("body").on('click','.wb2-btn3',function(){
   
   $(".wb2-box1").hide();
   $(".wb2-box2").hide();
   $(".wb2-box3").show();
});
$("body").on('click','.wb3-add',function(){
   var element = "<div class='wb3-box'><span class='wb3-num'></span><button class='wb3-del'>Delete</button></div>"
   $(".wb3-border").append(element);
   init();
});
$("body").on('click','.wb3-del',function(){
   $(this).parent().remove();
   init();
});

function init(){
   var n = $(".wb3-border").children("div").length;
   for(var i=0;i<n;i++){
      $(".wb3-border span").eq(i).text(i+1);
   }
}