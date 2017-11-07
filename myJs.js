$("#btn").on("click",function(){
    let addressInput= $("#address").val();
    let cityInput = $("#city").val();
    let myUrl=`https://maps.googleapis.com/maps/api/streetview?size=600x520&location=${addressInput},${cityInput}`;
    $("#contentWrapper").html(`<img class="img" src="${myUrl}" width="600" height="520" />`);
    })


$("#clear").on("click",function(){
    $("#address").val(" ");
    $("#city").val(" ");
    })












