
let Ingredients=document.getElementById("Ingredients");
let IngredientsData=document.getElementById("IngredientsData");

async function fetchApi() {
    let request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let data = await request.json();
console.log(data);

Area.addEventListener("click", showIngredientsInputs(data));    

}
fetchApi();

function showIngredientsInputs(arr) {
    let container= '';

    for(let i = 0; i<arr.meals.length-554; i++) {

       container+= `    <div class="col-md-3">
       <div class="country text-center  cursor-pointer">
           <i class="fa-solid fa-drumstick-bite fa-4x"></i>

           <h3>${arr.meals[i].strIngredient} </h3>

           <p>${arr.meals[i].strDescription} </p>
       </div>
   </div>
         `

    }

    IngredientsData.innerHTML = container;
}


 
