function addListeners () {
  document.querySelectorAll("li").forEach(
    menuItem => menuItem.onclick = () => showOnly(menuItem)
  )
}	
addListeners();
function showOnly(fruit) {	    
  document.querySelectorAll(".description").forEach(
    descriptionDiv => {
      descriptionDiv.style.opacity = 0;
      descriptionDiv.style.left = "100%";
    }
  )	    
  document.querySelector( "#description-of-" + fruit.innerHTML ).style.opacity = 1;
  document.querySelector( "#description-of-" + fruit.innerHTML ).style.left = "350px";
 
}

function showSpecial () {
  fetch("daily_special.html")
    .then(
     response => response.text()
    )
    .then(
      text => document.querySelector("#special").innerHTML = text
    )
    .catch(
      error => document.querySelector("#special").innerHTML = "Coming Soon!"
    );
}