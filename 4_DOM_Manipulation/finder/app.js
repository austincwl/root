//1 select the section with an id of container without using querySelector
const container1 = document.getElementById("container");

//2 select the section with an id of container using querySelector
const container2 = document.querySelector("#container");

//3 select all of the list items with a class of "second"
const second = document.querySelectorAll(".second");

//4 select a list item with a class of third, but only the list item inside of the ol tag
const ol_third = document.querySelector('ol .third');

//5 give the section with an id of container the text "Hello!".
container1.innerText = "Hello";

//6 add the class main to the div with a class of footer
const footer = document.querySelector(".footer");
footer.classList.add("main");

//7 remove the class main on the div with a class of footer
footer.classList.remove("main");

//8 create a new li element
let newLi = document.createElement("li");

//9 give the li the text "four".
newLi.innerText = "four";

//10  append the li to the ul element
let ul = document.querySelector("ul");
ul.append(newLi);

//11 loop over all the lis inside the ol tag and give them a background color of "green"
let olList = document.querySelectorAll("ol li");

for(let i = 0; i < olList.length; i++){
    olList[i].style.backgroundColor = "green";
}

//12 remove the div with a class of footer
footer.remove();