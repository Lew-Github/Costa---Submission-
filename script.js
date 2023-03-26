var logo = document.createElement("img");  //Var is used to declare the variable as global, This is used to create my first element which is an image of the logo 
logo.src = "Logo.webp"; // logo.src makes it so i can import the image, this is the code used to call downloaded images and selects the image. source means where is it coming from 
logo.width = "200"; 
logo.height = "75";
logo.style.position = "absolute"; //Width, height, position,left and top are used to style the image, set the dimensions and where it will be placed 
logo.style.left = "9%";
logo.style.top = "4%";
document.getElementById("top").appendChild(logo); //This line of code is used to place the logo inside the div called top within my html 

var loca = document.createElement("img"); //This section of code is used to insert the location pin inside the header 'top', it is the same concept of the logo code using javascript to style it instead of css
loca.src = "Pin.svg";
loca.size = "100%";
loca.id = "pin";
loca.style.position = "absolute";
loca.style.right = "10%";
loca.style.top = "7%";
document.getElementById("top").appendChild(loca);

var user = document.createElement("img"); //The same as the logo and location pin but for the user icon instead
user.src = "User.svg";
user.size = "100%";
user.id = "user";
user.style.position = "absolute";
user.style.right = "5%";
user.style.top = "7%";
document.getElementById("top").appendChild(user);

let menu = document.getElementById("top"); //This is the start of the header, each word is styled seperately as they all have a seperate link, this line of code states that it is going to insert it within the top div. Let is used to declare the variable but is contained, unlike var this is not global 
let li = document.createElement("a"); //This states that the element being created is 'a href' as it has being used as a link
li.id = "coffees"; //Using the .id code means that this element will be called 'coffees', .id is used to name elements within javascript, doing this is useful so it can be referenced in css if needed styling that way 
li.textContent = "Our coffees"; //.textContent is used to state what the text will say within this element 
li.style.color = "white";
li.style.paddingRight = "3%";
li.href = "https://www.costa.co.uk/our-coffees"; //This is where the link is placed so that when the element is clicked it will go to this website. 
li.style.textDecoration = "none";
li.style.display = "flex";
li.style.position = "absolute";
li.style.left= "25%"; //All these pieces of code that say .style are used to change the position and look of the a href, same idea as CSS just within javascript 
li.style.top = "7%";
li.style.fontSize = "120%";
menu.appendChild(li); //This piece of code states that 'li' needs to be created within menu (the top id), menu is acting as the parent in this situation

let li1 = document.createElement("a"); //This section of code uses the same aspects of the previous code as it is part of the list but the second word, as it all within the same parent element 'menu' which is the top div.
li1.textContent = "Our menu";
li1.style.color = "white";
li1.style.paddingRight = "3%";
li1.href = "https://www.costa.co.uk/menu/";
li1.style.textDecoration = "none";
li1.style.position = "absolute";
li1.style.left= "34%";
li1.style.top = "7%";
li1.style.fontSize = "120%";
li1.style.fontFamily = "CostaBold3";
menu.appendChild(li1); //This is the same as 'li' but the second part so will need a different name hense the 'li1'.

let li2 = document.createElement("a"); //This section of code uses the same aspects of the previous code as it is part of the list but the second word, as it all within the same parent element 'menu' which is the top div.
li2.textContent = "Costa club";
li2.style.color = "white";
li2.style.paddingRight = "3%";
li2.href = "https://www.costa.co.uk/costa-club";
li2.style.textDecoration = "none";
li2.style.position = "absolute";
li2.style.left= "42%";
li2.style.top = "7%";
li2.style.fontSize = "120%";
li2.style.fontFamily = "CostaBold3"
menu.appendChild(li2);

let li3 = document.createElement("a"); //This section of code uses the same aspects of the previous code as it is part of the list but the second word, as it all within the same parent element 'menu' which is the top div.
li3.textContent = "Order online";
li3.style.color = "white";
li3.style.paddingRight = "3%";
li3.href = "https://www.costa.co.uk/order-online/delivery";
li3.style.textDecoration = "none";
li3.style.position = "absolute";
li3.style.left= "50%";
li3.style.top = "7%";
li3.style.fontSize = "120%";
li3.style.fontFamily = "CostaBold3"
menu.appendChild(li3);

let li4 = document.createElement("a"); //This section of code uses the same aspects of the previous code as it is part of the list but the second word, as it all within the same parent element 'menu' which is the top div.
li4.textContent = "Sustainability";
li4.style.color = "white";
li4.style.paddingRight = "3%";
li4.href = "https://www.costa.co.uk/sustainability";
li4.style.textDecoration = "none";
li4.style.position = "absolute";
li4.style.left= "60%";
li4.style.top = "7%";
li4.style.fontSize = "120%";
li4.style.fontFamily = "CostaBold3"
menu.appendChild(li4);

let li5 = document.createElement("a"); //This section of code uses the same aspects of the previous code as it is part of the list but the second word, as it all within the same parent element 'menu' which is the top div. This is the last of the javescript code for the header.
li5.textContent = "Gift cards";
li5.style.color = "white";
li5.href = "https://gifting.costa.co.uk/?utm_source=costauksite&utm_medium=referral&utm_campaign=giftcardsmainnav";
li5.style.textDecoration = "none";
li5.style.position = "absolute";
li5.style.left= "70.5%";
li5.style.top = "7%";
li5.style.fontSize = "120%";
li5.style.fontFamily = "CostaBold3"
menu.appendChild(li5);

var split = document.createElement("img"); //This section is used to create the cream wave split background over the section after the video, the image has been imported into the replit and this section creates the image and tells JS where im sourcing it from, Display - "flex" places this over the video when using left width and top to style it. VAR makes this image global so can be called later if needed but it wasnt needed here. 
split.src = "split.png";
split.display = "flex";
split.style.left = "0%";
split.style.position = "absolute";
split.style.width = "100%";
split.style.top = "56%";
document.getElementById("bg2").appendChild(split); //This tells JS to place this image within my div 'bg2' 

var cup = document.createElement("img"); //Uses the same concept as my wavy background split, but this is for the cup image within my website
cup.src = "Cup.webp";
cup.display = "flex";
cup.style.position = "absolute";
cup.style.height = "57%";
cup.style.width = "41%";
cup.style.left = "5%";
cup.style.top = "70%";
document.getElementById("bg2").appendChild(cup); //This is used to also place the cup within my bg2 div. 

var whats = document.createElement("p"); //This global variable is used to create the p element 
var text = document.createTextNode("What's new"); //This variable is used to state what needs to be said within the p element. 
whats.appendChild(text); //This put the previously mentioned text node variable within the p element created 
whats.style.color = "Maroon";
whats.display = "flex";
whats.style.position = "absolute";
whats.style.top = "130%";
whats.style.left = "45%"; //All these style elements are similar the previously mentioned styles within javascript 
whats.style.fontSize = "200%";
whats.style.fontWeight = "bold";
whats.style.fontFamily = "CostaBold3"
document.getElementById("bg3").appendChild(whats) //This section tells JS to place the elements within my div 'bg3' created in html.

var box = document.getElementById("box1"); //This section of JS is used to create my first of the three boxes. VAR makes it global and Box 1 is the The div element created within HTML is being called but it is styled in JS.
box.style.backgroundColor = "pink"; //This changes the background colour of the div. 
box.style.position = "absolute";
box.style.left = "14%";
box.style.width = "23.5%"; //These parts style the box. I have created 3 different divs as the boxes and these .styles are used to create the base of the first box
box.style.height = "85%";
box.display = "flex";
box.style.position = "absolute";
box.style.top = "145%";
document.body.appendChild(box); //This says that var variable will be placed within the body of the html script 

var img1 = document.createElement("img") //This image is the image being placed in the first of the three boxes, im1 is used to declare it as a variable so it can be called in javascript
img1.src = "threepics1.png";
img1.display = "flex";
img1.style.position = "absolute"; //These .styles are used to change the placement and size of the image in the first box
img1.style.top = "0%";
img1.style.height = "42%";
img1.style.width = "100%";
document.getElementById("box1").appendChild(img1) //This line tells this line of code to stay within the first box, "box1" is the div name. When using this code it makes it so the image will always be within the first box container

var text1 = document.createElement("p") //Used to create the p element within the first box
let tea1 = "A tea break" + "<br>" + "from the norm";  //This is what i want the p element to say, <br> is used to add a line break within the writing. 'Let' shows that this variable is within this function and created for use within this box. 
text1.innerHTML = tea1; //Making it into a let variable rather than just the innerHTML allows me to create the line break. tea1 is the name of variable used with the linebreak so it has been called here within the innerHTML. 
text1.style.textAlign = "center"; // This calls for the text to be centered.
text1.style.color = "Maroon";
text1.display = "flex";
text1.style.position = "absolute";
text1.style.top = "40%";
text1.style.left = "17%";
text1.style.fontSize = "200%";
text1.style.fontFamily = "CostaBold3"; //This calls for the font to change to costabold 3, a font created in CSS using fontface 
document.getElementById("box1").appendChild(text1) //Used to keep this contained within the first box 

var text2 = document.createElement("p") //This section is used to create the second p element within the first box and uses the similar code as the previously explained p element. 
let tea2 = "Our new flavour of Fuze Tea is" + "<br>" + "here. Meet Mellow Mango - a" + 
  "<br>"  + "superfuzion of mango and" + "<br>" + "chamomile green tea with zinc." + "<br>" + "Sip one today for a superboost."; 
text2.innerHTML = tea2;
text2.style.textAlign = "center";
text2.style.color = "black";
text2.display = "flex";
text2.style.position = "absolute";
text2.style.top = "58%";
text2.style.left = "15%";
text2.style.lineHeight = "150%";
text2.style.fontSize = "115%";
text2.style.fontWeight = "bold";
text2.style.fontFamily = "CostaLight";
document.getElementById("box1").appendChild(text2)

var button1 = document.createElement("button") //This section is for my button within the first box, all the .styles in this secton are used to change the look and shape of the button as well as where in the first box it is to be placed. Var button1 declares this variable as global and means it can be called within JS. 
button1.display = "flex";
button1.innerHTML = "See our menu";
button1.style.position = "absolute";
button1.style.left = "20%";
button1.style.top = "87%";
button1.style.fontSize = "100%";
button1.style.padding = "4%";
button1.style.borderRadius= "80px";
button1.style.width= "60%";
button1.style.height = "10%";
button1.style.border= "white"; //Changes the color of the border of the button to white
button1.style.color= "maroon"; //Sets the colour of the text to maroon which is the same as the costa text color 
button1.style.backgroundImage = "url(arrow.png)"; //This is used to put the arrow within the button, i have called it as a background image and then sized/placed it within the button using the following lines of code.
button1.style.backgroundRepeat= "no-repeat";
button1.style.backgroundSize="3%";
button1.style.backgroundPosition= "90% 50%";
button1.style.fontFamily = "CostaBold3";


button1.addEventListener("mouseenter", function( event ) {   //This function is created to act as a hover over feature, the function has used eventlistener so the website/javascript will change the color of the button when the mouse scrolls over the button. 
  event.target.style.backgroundColor = "maroon";
  event.target.style.color = "white";
}, false);

button1.addEventListener("mouseleave", function( event ) {   //the same function as when the mouse enters the button, but when the mouse stops scrolling over the button this function makes it revert back to its original color 
  event.target.style.color = "maroon";
  event.target.style.backgroundColor = "white";
}, false);

document.getElementById("box1").appendChild(button1) //This line keeps it contained within the first box 

var box2 = document.getElementById("box2"); //This section is the exact same as my first box but this time for the second box.
box2.style.backgroundColor = "#c8a2c8"; //This time i have used a hex code as the background color rather than the name, i did this as JS did not recognised the name of the color when doing it that way. 
box2.style.position = "absolute";
box2.style.left = "39%";
box2.style.width = "23.5%";
box2.style.height = "85%";
box2.display = "flex";
box2.style.position = "absolute";
box2.style.top = "145%";
document.body.appendChild(box2); //Same idea as the first box, keeping it within the body but for the second box i have created 

var img2 = document.createElement("img") //Same as the first box image but for the middle box. 
img2.src = "threepics2.png";
img2.display = "flex";
img2.style.position = "absolute";
img2.style.top = "0%";
img2.style.height = "42%";
img2.style.width = "100%";
document.getElementById("box2").appendChild(img2) //places it within the second box div. 

var text3 = document.createElement("p") //This section is used to create an element within my middle box and uses all the same style concepts as the first box 
let burrito = "Get them while" + "<br>" + "they're hot"; 
text3.innerHTML = burrito;
text3.style.textAlign = "center";
text3.style.color = "Maroon";
text3.display = "flex";
text3.style.position = "absolute";
text3.style.top = "40%";
text3.style.left = "15%";
text3.style.fontSize = "200%";
text3.style.fontWeight = "bold";
text3.style.fontFamily = "CostaBold3";
document.getElementById("box2").appendChild(text3) //contains the p element within the middle box

var text4 = document.createElement("p") //Used to create a p element within my middle box using all the same concepts as previously explained 
let burrito1 = "Stay warm this winter with our" + "<br>" + "tasty hot food range. There's" + 
  "<br>"  + "loads of options and, when" + "<br>" + "paired with your favourite coffee," + "<br>" + "what could be better?"; 
text4.innerHTML = burrito1;
text4.style.textAlign = "center";
text4.style.color = "black";
text4.display = "flex";
text4.style.position = "absolute";
text4.style.top = "58%";
text4.style.left = "13%";
text4.style.lineHeight = "150%";
text4.style.fontSize = "115%";
text4.style.fontWeight = "bold";
text4.style.fontFamily = "CostaLight";
document.getElementById("box2").appendChild(text4) //Keeps the variable contained within the middle box 

var button2 = document.createElement("button") //Uses all the same styles and aspects previously explained but for the button within the middle box 
button2.display = "flex";
button2.innerHTML = "See our menu"
button2.style.position = "absolute";
button2.style.left = "20%";
button2.style.top = "87%";
button2.style.fontSize = "100%";
button2.style.padding = "4%";
button2.style.borderRadius= "80px";
button2.style.width= "60%";
button2.style.height = "10%";
button2.style.border= "white";
button2.style.color= "maroon";
button2.style.backgroundImage = "url(arrow.png)";
button2.style.backgroundRepeat= "no-repeat";
button2.style.backgroundSize="3%";
button2.style.backgroundPosition= "90% 50%";
button2.style.fontFamily = "CostaBold3";
button2.addEventListener("mouseenter", function( event ) {   //This function is created to act as a hover over feature, the function has used eventlistener so the website/javascript will change the color of the button when the mouse scrolls over the button. 
  event.target.style.backgroundColor = "maroon";
  event.target.style.color = "white";
}, false);
button2.addEventListener("mouseleave", function( event ) {   //the same function as when the mouse enters the button, but when the mouse stops scrolling over the button this function makes it revert back to its original color 
  event.target.style.color = "maroon";
  event.target.style.backgroundColor = "white";
}, false);
document.getElementById("box2").appendChild(button2) //contains the variables within the middle box.

var box3 = document.getElementById("box3"); //Uses the same aspects as previous boxes but this is the last box section 
box3.style.backgroundColor = "#99CCFF";
box3.style.position = "absolute";
box3.style.left = "64%";
box3.style.width = "23.5%";
box3.style.height = "85%";
box3.display = "flex";
box3.style.position = "absolute";
box3.style.top = "145%";
document.body.appendChild(box3);

var img3 = document.createElement("img"); //Image for my last box using all the same aspects as previously mentioned
img3.src = "threepics3.png";
img3.display = "flex";
img3.style.position = "absolute";
img3.style.top = "0%";
img3.style.height = "42%";
img3.style.width = "100%";
document.getElementById("box3").appendChild(img3)

var text5 = document.createElement("p"); // used for the p element within my last box, using previously explained features and variables and styles. 
let click = "Click into a new" + "<br>" + "routine"; 
text5.innerHTML = click;
text5.style.textAlign = "center";
text5.style.color = "Maroon";
text5.display = "flex";
text5.style.position = "absolute";
text5.style.top = "40%";
text5.style.left = "15%";
text5.style.fontSize = "200%";
text5.style.fontWeight = "bold";
text5.style.fontFamily = "CostaBold3";
document.getElementById("box3").appendChild(text5)

var text6 = document.createElement("p") //last box p element using the same aspects as the other two boxes 
let skip = "Be on your way with your faves" + "<br>" + "and skip the queue with Click &" + 
  "<br>"  + "Collect. It's easy. Order and pay" + "<br>" + "ahead through the Costa app," + "<br>" + "then pick up in store."; 
text6.innerHTML = skip;
text6.style.textAlign = "center";
text6.style.color = "black";
text6.display = "flex";
text6.style.position = "absolute";
text6.style.top = "58%";
text6.style.left = "15%";
text6.style.lineHeight = "150%";
text6.style.fontSize = "115%";
text6.style.fontWeight = "bold";
text6.style.fontFamily = "CostaLight";
document.getElementById("box3").appendChild(text6)

var button3 = document.createElement("button") //Last button for the last box, using the same concepts as the previous 2 buttons within the previous 2 boxes 
button3.display = "flex";
button3.innerHTML = "Get the app";
button3.style.position = "absolute";
button3.style.left = "20%";
button3.style.top = "87%";
button3.style.fontSize = "100%";
button3.style.padding = "4%";
button3.style.borderRadius= "80px";
button3.style.width= "60%";
button3.style.height = "10%";
button3.style.border= "white";
button3.style.color= "maroon";
button3.style.backgroundImage = "url(arrow.png)";
button3.style.backgroundRepeat= "no-repeat";
button3.style.backgroundSize="3%";
button3.style.backgroundPosition= "90% 50%";
button3.style.fontFamily = "CostaBold3";
button3.addEventListener("mouseenter", function( event ) {   //This function is created to act as a hover over feature, the function has used eventlistener so the website/javascript will change the color of the button when the mouse scrolls over the button. 
  event.target.style.backgroundColor = "maroon";
  event.target.style.color = "white";
}, false);

button3.addEventListener("mouseleave", function( event ) {   //the same function as when the mouse enters the button, but when the mouse stops scrolling over the button this function makes it revert back to its original color 
  event.target.style.color = "maroon";
  event.target.style.backgroundColor = "white";
}, false);
document.getElementById("box3").appendChild(button3)

var box4 = document.getElementById("box4"); //This section is used to create a div for the section underneath the last 3 boxes, It uses the same idea as the 3 boxes created before, except this includes the lists for the next section, everything in the div box4 in html goes within this section and has a background color of crimson. The rest is styled in CSS 
box4.style.backgroundColor = "crimson";
box4.style.position = "absolute"
box4.style.left = "0%";
box4.style.width = "100%";
box4.style.height = "97.5%";
box4.display = "flex";
box4.style.top = "250%";
document.body.appendChild(box4);

var footer = document.getElementById("footer");  //This is how ive created the footer in JS, this finds the footer in html and applies the background to it whilst setting the width of the box the footer is placed in. style.left stops it having a small white gap in the left. 
footer.style.backgroundColor = "brown";
footer.style.position = "absolute";
footer.style.left = "0%";
footer.style.width = "100%";
footer.style.height = "15%";
footer.display = "flex";
footer.style.marginTop = "170%";
document.body.appendChild(footer)

var privacy  = document.createElement("a"); //This is a link within the footer, their are multiple words in the footer each with their own link so this is how ive added a link to each one. i have then styled the link with previously mentioned JS styling code. 
privacy.textContent = "Privacy notice";
privacy.href = "https://www.costa.co.uk/privacy-policy"; //href allows me to link the text to an external website 
privacy.style.color = "white";
privacy.style.textDecoration = "none";
privacy.style.position = "absolute";
privacy.style.fontSize = "120%";
privacy.style.left = "5%";
privacy.style.top = "50%";
privacy.style.fontWeight = "bold";
document.getElementById("footer").appendChild(privacy) //I have then called the global variable 'privacy' & told it to be placed within the footer 

var cookie  = document.createElement("a"); //This is the same concept as the privacy a href but with cookie policy. 
cookie.textContent = "Cookie Policy";
cookie.href = "https://www.costa.co.uk/privacy-policy";
cookie.style.color = "white";
cookie.style.textDecoration = "none";
cookie.style.position = "absolute";
cookie.style.fontSize = "120%";
cookie.style.left = "15%";
cookie.style.top = "50%";
cookie.style.fontWeight = "bold";
document.getElementById("footer").appendChild(cookie)

var term  = document.createElement("a"); //The same as the previously mentioned links within the footer 
term.textContent = "Terms and conditions";
term.href = "https://www.costa.co.uk/privacy-policy";
term.style.color = "white";
term.style.textDecoration = "none";
term.style.position = "absolute";
term.style.fontSize = "120%";
term.style.left = "25%";
term.style.top = "50%";
term.style.fontWeight = "bold";
document.getElementById("footer").appendChild(term)

var copy  = document.createElement("a"); //The same as the previously mentioned links within the footer 
copy.textContent = "© 2013 - 2023 Costa. All rights reserved";
copy.href = "https://www.costa.co.uk/privacy-policy";
copy.style.color = "white";
copy.style.textDecoration = "none";
copy.style.position = "absolute";
copy.style.fontSize = "120%";
copy.style.left = "40%";
copy.style.top = "50%"
copy.style.fontWeight = "bold";
document.getElementById("footer").appendChild(copy)

var fb = document.createElement("img"); //This is the first of the three icons within my footer. I have imported the facebook icon using create image and src, to call the downloaded image.
fb.src = "facebook.svg";
fb.style.height = "20%";
fb.style.width = "20%";
fb.style.position = "absolute";
fb.style.top = "50%";
fb.style.right = "10%";
document.getElementById("footer").appendChild(fb) //This calls for the image to be place inside its parent element "footer".

var tw = document.createElement("img"); //This uses the same concept as the facebook image icon but for twitter. 
tw.src = "twitter.svg";
tw.style.height = "20%";
tw.style.width = "20%";
tw.style.position = "absolute";
tw.style.top = "50%";
tw.style.right = "7%";
document.getElementById("footer").appendChild(tw)

var yt = document.createElement("img"); //This uses the same concept as the previous icon image icon but for youtube. 
yt.src = "youtube.svg";
yt.style.height = "20%";
yt.style.width = "20%";
yt.style.position = "absolute";
yt.style.top = "50%";
yt.style.right = "3.5%";
document.getElementById("footer").appendChild(yt)

var gram = document.createElement("img"); //This uses the same concept as the previous icon image icon but for Instagram. 
gram.src = "instagram.svg";
gram.style.height = "20%";
gram.style.width = "20%";
gram.style.position = "absolute";
gram.style.top = "50%";
gram.style.right = "0%";
document.getElementById("footer").appendChild(gram)

