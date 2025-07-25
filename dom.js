// javascript operates on the Document object model 
// all the html on a page can be accesed inside a javascript all the elements become objects    Window -> document -> html 
// console.log treats html objects diffrently it outputs the html code itself 
// console.dir(object) --> prints the properties of that object 

//         ---------accessing the dom Element 

let element1 = document.getElementById("myId");  // it stores the node with id myId in the variable element first occurance of that id 
console.log(element1); // --> it treats this html object diffrently it outputs the html content 
console.dir(element1);  // --> it gives a detailed list of properts of this object 

let element2 = document.getElementsByClassName("myClass"); // it returns a html collection of all the elements with myClass which is similar to a array it also has some properties like an array like length 

console.log(element2);
console.dir(element2);

let element3 = document.getElementsByTagName("p") // --> gives a html collection of all the p tags 

let elemets4 = document.getElementsByName("ujjawal") //--> gives a nodelist of all the elemets with the name property as ujjawal 

// using queryselecter 

// let elemet5 = document.querySelector("#myId/.myClass/p") // --> return a elemet first accurance of that class id or tag
// let elemet6 = document.querySelectorAll("#myId/.myClass/p") // --> return a node list  

//      now we can apply diffrent proprties to get or set this properties 

// element.tagName  -- >return the name of the tag 
// element.innerText --> return the textcontent of all the element and all it children pure textual content in the form of a string   we can change it like element.innerText = "Heading1"
// element.innerHtml  --> it also return a string but this time it has all its html tag too   we can change it like element.innerHtml = "<h1>Heading1</h1>"
// textContent  --> it also shows the inner text of hiden elemets innerText doesnt work with that 


//  attributes 
// we can access the value of diffrent attributes and we can also change that value 

// let element = document.querySelector("p");
// let id = element.getAttribute("id"); //--> returns the value of id attribute
// console.log(id); 

// element.setAttribute("id" ,"newid");  --> changes the value of attribute id 

// changing the style property --> element.style -->returns an object with all the styling information of that div 

// element.style.backgroundColour = "red" --> ways to change the background colour 


//   ---------level2 ----------

// inserting elements in a page 

// step1 create that element 

let el = document.createElement("div"); // --> created a div 
// use properties like innerHtml innerText and innerContent to add data inside the newly created node 

// now we have to add our node to the dom 

// Node.append(newnode)  --> by taking refrence of Node we add newnode at the end of Node(inside it)
// Node.prepend(newnode) --> by taking refrence of Node we add newnode at the beginneg of Node(inside it)
// Node.before(newnode) --> by taking refrence of Node we add newnode before it (outside it right before it )
// Node.after(newnode) --> by taking refrence of Node we add newnode after it (outside it right after it)

// let list = document.getElementById("myList"); 


// let newItem = document.createElement("li");
// newItem.textContent = "Item 3"; 

// // Append the new <li> to the <ul>
// list.appendChild(newItem);  -> added at the last 



// let list = document.getElementById("myList"); 
// let itemToRemove = list.children[1];

// list.removeChild(itemToRemove);  --> remove that particular child 


// deleting a node 

// node.remove()  -> it removes that particular node 





