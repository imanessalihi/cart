var quantity;
var price=1;
var quantite=1;
var pricetxt;


window.onload = function() {
    
    quantity=document.getElementById("qua").value;
     quantity.innerHTML='1';
     
     var total= getprice();
     
    document.getElementById("q").addEventListener("input",function(event){
        
        quantite=parseFloat(document.getElementById("qua").value);
        getprice();
        
        total=quantite*pricetxt;
        document.getElementById("p").innerHTML=total+' MAD';
        console.log(quantite);
        console.log(pricetxt);

    })
    
    document.getElementById("p").innerHTML=total+ " MAD";
};

function getprice() 
{
    pricetxt=parseFloat(document.getElementById("price").innerHTML.replace(' MAD',''));
    return pricetxt;
}

function validateForm(e) {
    e.preventDefault()
    var name = document.loginForm.name.value
    var password = document.loginForm.password.value
   if (name.length==0)
     alert(`name is required`)
   if (password.length<5)
     alert(`password length should more than 5`)
    
   } ;
   function validateForm1(e) {
    e.preventDefault()
    var fullname = document.shippinginfo.fullname.value
    var address = document.shippinginfo.address.value
    var phone = document.shippinginfo.phone.value
   if (fullname.length==0)
    alert(`fullname is required`)
    if (address.length<10)
    alert(`Complete address is required`)
   if (phone.length<10)
   alert(`phone number is incorrect`)
    
   } ;

   $(document).ready(function(){
    $("#heart").click(function(){
      if($("#heart").hasClass("liked")){
        $("#heart").html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
        $("#heart").removeClass("liked");
      }else{
        $("#heart").html('<i class="fa fa-heart" aria-hidden="true"></i>');
        $("#heart").addClass("liked");
      }
    });
  });


