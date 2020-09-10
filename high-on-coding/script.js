var container = document.querySelector("body");


var headDiv = document.querySelector("div");
headDiv.style.display = "flex";
headDiv.style.flexWrap = "wrap";
headDiv.style.justifyContent = "center"

//flex box div
function flexBox (parent){
    var div = document.createElement("div");
    parent.appendChild(div);
    return div;
}
    
//first flexbox from function
const div = flexBox(headDiv); //function
div.style.display = "flex";
div.style.flexDirection = "row";
div.style.alignItems = "center";
div.style.backgroundColor = "skyblue";
div.style.width = "100%";



// heading
var heading = document.createElement("h1");
heading.textContent = "HighOnCoding";
div.appendChild(heading);
heading.style.flexGrow = "2";
heading.style.paddingLeft = "4%";
heading.style.fontSize = "4vw";
heading.style.color = "white";

//anchor home
var anchorHome = document.createElement("a");
anchorHome.textContent = "Home";
anchorHome.setAttribute("href", "https://app.schoology.com/assignment/2831081522/info") 
div.appendChild(anchorHome);
anchorHome.style.flexGrow = "1";
anchorHome.style.fontSize = "2vw";
anchorHome.style.textDecoration = "none";
anchorHome.style.color = "white";

//anchor categories
var anchorCategories = document.createElement("a");
anchorCategories.textContent = "Categories";
anchorCategories.setAttribute("href", "https://app.schoology.com/assignment/2831081522/info") 
div.appendChild(anchorCategories);
anchorCategories.style.flexGrow = "7";
anchorCategories.style.fontSize = "2vw";
anchorCategories.style.textDecoration = "none";
anchorCategories.style.color = "white";

//second flexbox from function
const div1 = flexBox(headDiv); //function
div1.style.backgroundColor = "lightgray"
div1.style.width = "95%";
div1.style.margin = "3% 0% 2% 0%";



//second box heading
var headingSecondBox = document.createElement("h2");
headingSecondBox.textContent = "Curse of the Current Reviews";
div1.appendChild(headingSecondBox)
headingSecondBox.style.fontSize = "3vw";
headingSecondBox.style.margin = "2% 2% 0% 2%"

//second box content
var textContent = document.createElement("p");
textContent.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page. MDN - Document Object Model In addition to HTML and CSS, a web page can include JavaScript code. JavaScript is able to modify the structure, content, and presentation of a web page without the need to reload. Browsers make this possible through two programming interfaces: the DOM and the BOM. The DOM is the primary way that your JavaScript code will interact with a web page. Specifically, the browser provides a document variable that has properties and methods you can use to make changes to the page"
div1.appendChild(textContent);
textContent.style.margin = "2% 2% 2% 2%";

//third flex box
const div2 = flexBox(headDiv); //function
div2.style.width = "95%";
div2.style.margin = "0% 0% 2% 0%";

//third flex box heading
var headingThirdBox = document.createElement("h3");
headingThirdBox.textContent = "Hello Watch Kit";
div2.appendChild(headingThirdBox)
headingThirdBox.style.color = "skyblue";

//third flex box content
var textContent2 = document.createElement("p");
textContent2.textContent = "In addition to HTML and CSS, a web page can include JavaScript code. JavaScript is able to modify the structure, content, and presentation of a web page without the need to reload. Browsers make this possible through two programming interfaces: the DOM and the BOM. The DOM is the primary way that your JavaScript code will interact with a web page. Specifically, the browser provides a document variable that has properties and methods you can use to make changes to the page. Whereas the DOM represents the web page, the Browser Object Model (the BOM) represents the window or tab that is showing the page."
div2.appendChild(textContent2);
textContent2.style.marginBottom = "0px"


//third flex box content(orange)

var orangeText = document.createElement("pre");
orangeText.textContent = "12 comment      124 likes";
div2.appendChild(orangeText);
orangeText.style.backgroundColor = "orange";
orangeText.style.width = "100%";
orangeText.style.marginTop = "2px";
orangeText.style.padding = "4px";
orangeText.style.color = "white";
orangeText.style.fontSize = "14px";





//forth flex box
const div3 = flexBox(headDiv); //function
div3.style.width = "95%";
div3.style.margin = "0% 0% 2% 0%";

//forth flex box heading
var headingForthBox = document.createElement("h3");
headingForthBox.textContent = "Introduction to Swift";
div3.appendChild(headingForthBox)
headingForthBox.style.color = "skyblue";

//forth flex box content
var textContent2 = document.createElement("p");
textContent2.textContent = "In addition to HTML and CSS, a web page can include JavaScript code. JavaScript is able to modify the structure, content, and presentation of a web page without the need to reload. Browsers make this possible through two programming interfaces: the DOM and the BOM. The DOM is the primary way that your JavaScript code will interact with a web page. Specifically, the browser provides a document variable that has properties and methods you can use to make changes to the page. Whereas the DOM represents the web page, the Browser Object Model (the BOM) represents the window or tab that is showing the page."
div3.appendChild(textContent2);
textContent2.style.marginBottom = "0px"


//forth flex box content(orange)

var orangeText2 = document.createElement("pre");
orangeText2.textContent = "12 comment      124 likes";
div3.appendChild(orangeText2);
orangeText2.style.backgroundColor = "orange";
orangeText2.style.width = "100%";
orangeText2.style.marginTop = "2px";
orangeText2.style.padding = "4px";
orangeText2.style.color = "white";
orangeText2.style.fontSize = "14px";