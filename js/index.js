$(document).ready(function(){
    $("#nav-bag").on("click",function Show_Hidden(){
        $(".nav-aside-bag").toggle();
        // var bags=$(".nav-aside-bag");
        // if(bags.css("display","none") ) { 
        //     bags.css("display","block"); 
        //  }  
        //  else 
        //   { 
        //     bags.css("display","none"); 
        //      }
    });
    $("#nav-search").on("click",function Show(){
        $(".nav-aside-search").show();
    });
    $(".nav-aside-close").on("click",function Hidden(){
        // $(".nav-aside-search").hide();
        $(".nav-aside-search").css("display","none");
    });
} ) 
