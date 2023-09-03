
let Area=document.getElementById("Area");
let areaData=document.getElementById("areaData");

async function fetchApi() {
    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let data = await request.json();
console.log(data);

Area.addEventListener("click", showAreaInputs(data));    

}
fetchApi();

function showAreaInputs(arr) {
    let container= '';

    for(let i = 0; i<arr.meals.length-8; i++) {

       container+= `   <div class="col-md-3">
       <div class="country text-center  cursor-pointer">
           <i class="fa-solid fa-house-laptop fa-4x"></i>

           <h3>${arr.meals[i].strArea} </h3>


       </div>
   </div>
         `

    }

    areaData.innerHTML = container;
}

$(".open-close-item1").click(function(){

    $(".SideNav").css("left" , "-256px");
})


$(".open-close-item").click(function(){


    $(".open-close-item").removeClass('fa-x').addClass('fa-align-justify')

});


$(".open-close-item1").click(function(){



    $(".open-close-item1").removeClass("fa-align-justify").addClass("fa-x");

})
$(".open-close-item").click(function(){

    $(".SideNav").css("left" , "0px");
})

 
