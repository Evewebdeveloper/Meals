let searchContainerBtn=document.getElementById("searchContainerBtn");
let rowData=document.getElementById("rowData");

async function fetchApi() {
    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let data = await request.json();
console.log(data);

searchContainerBtn.addEventListener("click", showSearchInputs(data));    

}
fetchApi();

function showSearchInputs(arr) {
    let container= '';

    for(let i = 0; i<arr.categories.length; i++) {

       container+= ` <div class="item col-md-3">
       <div class="meal  rounded-2  ">
           <img class="w-100" src="${arr.categories[i].strCategoryThumb}" alt="Sushi">
           <div class="meal-layer text-black">
               <h3>${arr.categories[i].strCategory}</h3>
           </div>
        
         `

    }

    rowData.innerHTML = container;
}

// $(document).click(function(){

//     $("#spinner").addClasscss("d-none");
// })

 
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
