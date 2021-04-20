function selPdt(pdt){

    var prc, calGstPrc;    
    document.getElementById("qty").value=1; //init qty  

    switch (pdt){
        case 1000: prc = 121.50; break;
        case 2000: prc = 221.50; break;
        case 3000: prc = 321.50; break;
        default  : prc =  12.90; break;
    }
    
    calGstPrc = (prc*1.15).toFixed(2);
    document.getElementById("totPrc").innerHTML ="NZD "+prc.toFixed(2);
    document.getElementById("calGstPrc").innerHTML ="+ GST, inc. GST is NZD "+calGstPrc;
    document.getElementById("hdnprc").value = prc;
}

function changeQty(){

    var totPrc, calGstPrc;   
    var qty = document.getElementById("qty").value;  
    var prc = document.getElementById("hdnprc").value;    
    
    totPrc = (prc*qty).toFixed(2);
    calGstPrc = (totPrc*1.15).toFixed(2);
    document.getElementById("totPrc").innerHTML ="NZD "+totPrc;
    document.getElementById("calGstPrc").innerHTML ="+ GST, inc. GST is NZD "+calGstPrc;
}

function addCart(){
    var pdt = document.getElementById("hdnprc").value;   
    var qty = document.getElementById("qty").value;   
    var pdtDtl;
    switch (pdt){
        case 121.50: pdtDtl = "1Kg"; break;
        case 221.50: pdtDtl = "2Kg"; break;
        case 321.50: pdtDtl = "3Kg"; break;
        default  : pdtDtl =  "200g"; break;
    } 
    document.getElementById("showAddCart").innerHTML = pdtDtl+" Coffee Beens "+ qty +" Pack ";

}

/* JQuary */
$(document).ready(function(){      
    $('.myBtnGrp').each(function(index){
        $(this).attr('btnGrp-idx', index);             
        $('.myBtnGrp[btnGrp-idx=3]').addClass('clicked_myBtnGrp');
        selPdt(200); //set default price
    }).click(function(){
      var index = $(this).attr('btnGrp-idx');       
      $('.myBtnGrp[btnGrp-idx=' + index + ']').addClass('clicked_myBtnGrp');
      $('.myBtnGrp[btnGrp-idx!=' + index + ']').removeClass('clicked_myBtnGrp');
    });

    
  $('#myButton').click(function(){
    $('.toast').toast({delay: 2000});
    $('.toast').toast('show');
  });
});