let Categories=document.getElementById("Categories");
let catogeryData=document.getElementById("CData");

async function fetchApi() {
    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let data = await request.json();
console.log(data);

Categories.addEventListener("click", showCategoriesInputs(data));    

}
fetchApi();

function showCategoriesInputs(arr) {
    let container= '';

    for(let i = 0; i<arr.categories.length; i++) {

       container+= ` <div class="col-md-3">
        <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
            <img class="w-100" src="${arr.categories[i].strCategoryThumb}" alt="beef">
            <div class="meal-layer text-black  ">
                <h3>${arr.categories[i].strCategory} </h3>
                <p> ${arr.categories[i].strCategoryDescription}</p>
            </div>
        </div>
    </div>
        
         `

    }

    catogeryData.innerHTML = container;
}

$(document).click(function(){

    $("#spinner").addClasscss("d-none");
})

 
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
