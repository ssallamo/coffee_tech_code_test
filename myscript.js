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
    document.getElementById("totPrc").innerHTML ="NZD "+prc;
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