
fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
         <div>
            <span>${item.title}</span>
            <span> <img src='${item.images}'> </span>
         </div>
      `;
   }
 
   placeholder.innerHTML = out;
});