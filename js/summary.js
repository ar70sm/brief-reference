// start message
document.getElementsByClassName("open-message")[0].addEventListener("click",()=>{
  document.getElementsByClassName("open-message")[0].remove()
})
// end message


////start section

// start main var
let theSection = "js";
// end main var

// start section body
function sectionBody() {
  document.querySelectorAll("section").forEach(e => {
    e.style.display = "none";
  });
  document.querySelector(`section.${theSection}`).style.display ="flex";
}
// end section body

// start on load
window.addEventListener("load", () => {
  if (window.localStorage.hasOwnProperty("theSection"))
    theSection = window.localStorage.theSection;
  document.querySelector(`.sections li.${theSection}`).classList.add("active");
  sectionBody();
});
// end on load

// start chose section
let sections = document.querySelectorAll(".sections li");
sections.forEach(e => {
  e.addEventListener("click", () => {
    sections.forEach(ele=> {
      ele.classList.remove("active");
    });
    e.classList.add("active");
    theSection = e.classList[0];
    window.localStorage.setItem("theSection", theSection);
    sectionBody();
  });
});
// end chose section

// start chose chapter
document.querySelectorAll(`section ul li`).forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.classList.contains("selected")) {
      ele.classList.remove("selected");
      document
        .querySelectorAll(`section.${theSection} .contents p`)
        .forEach((e) => {
          e.style.display = "flex";
        });
    } else {
      document
        .querySelectorAll(`section.${theSection} ul li`)
        .forEach((e) => {
          e.classList.remove("selected");
        });
      ele.classList.add("selected");
      document
        .querySelectorAll(`section.${theSection} .contents p`)
        .forEach((e) => {
          if (e.classList.contains(ele.getAttribute("toc")))
            e.style.display = "flex";
          else e.style.display = "none";
        });
    }
  });
});
// end chose chapter

////end section

//// start html


function htmlLine(type ,classes ,element, comment) {
  let theLine = document.createElement("p");
  if(type=="tag")
  theLine.append('<> ')
  else
  theLine.append('="" ')

  if (classes.length > 0) {
    classes = classes.split(" ");
    let theClasses = document.createElement("span");
    theClasses.append(`(${classes.join(" ,")})`);
    theClasses.classList.add("classes");
    theLine.append(theClasses);
    
    theLine.classList.add(...classes);
  }
  let theElement = document.createElement("a");
  theElement.append(element);
  theElement.setAttribute("target", `_blank`);
  theElement.setAttribute(
    "href",
    `https://www.google.com/search?q=${element}+${type}+in+html`
    );
    
    theLine.append(theElement);
    theLine.append(comment);

  document.querySelector(`section.html .contents`).append(theLine);
}

// ******************************************

htmlLine("tag","container","div"," the main container to organize the elements ")
htmlLine("tag","container","header"," used as a container to organize the elements ")
htmlLine("tag","container","nav"," used as a container to organize the elements ")
htmlLine("tag","container","aside"," used as a container to organize the elements ")
htmlLine("tag","container","section"," used as a container to organize the elements ")
htmlLine("tag","container","article"," used as a container to organize the elements ")
htmlLine("tag","container","footer"," used as a container to organize the elements ")
htmlLine("tag","other text","button"," to add a buttom ")
htmlLine("tag","other","iframe"," call a site on the page ")
htmlLine("tag","header","meta"," for some settings {hasn't cosen tage} ")
htmlLine("tag","header","title"," the title of the programmer ")
htmlLine("tag","header","style"," for css code ")
htmlLine("tag","header","script"," for java script code ")
htmlLine("tag","header","link"," add a sheet which i will use at this page like CSS sheet for styling {hasn't cosen tage} ")
htmlLine("tag","text","h1---h6"," according to importance ")
htmlLine("tag","text","p"," block paragraph ")
htmlLine("tag","text","q"," in line quote ")
htmlLine("tag","text","blockquote"," block quote ")
htmlLine("tag","text","abbr"," to add an short name ")
htmlLine("tag","text","summary","")
htmlLine("tag","text","details"," add hidden text inside a word ")
htmlLine("tag","text","dialog"," to add a text at box ")
htmlLine("tag","font text","b","")
htmlLine("tag","font text","strong"," bold (but \"strong\"mean that it is important) ")
htmlLine("tag","font text","i","")
htmlLine("tag","font text","em"," italic (but \"em\"mean that it is important) ")
htmlLine("tag","font text","mark"," highlight ")
htmlLine("tag","font text","u"," under line ")
htmlLine("tag","font text","small"," small text ")
htmlLine("tag","font text","del"," deleted text ")
htmlLine("tag","font text","ins"," inserted text ")
htmlLine("tag","font text","sub"," subscript ")
htmlLine("tag","font text","sup"," superscript ")
htmlLine("tag","text","span"," to make the text special ")
htmlLine("tag","text","br"," to inter the inter ")
htmlLine("tag","text","hr"," to mak a line ")
htmlLine("tag","text","wbr"," to cut the paragraph at sumwar and don it at the nixt line and use also with links ")
htmlLine("tag","text","bdi"," win i write arabic and english together to .... ")
htmlLine("tag","text","code"," to right a programing code inside it ")
htmlLine("tag","text","address"," to add an adress ")
htmlLine("tag","text","cite"," to ad a cite on map ")
htmlLine("tag","text","var"," to ad a math mark ")
htmlLine("tag","text","dfn"," to ad a word will be explaned ")
htmlLine("tag","text","samp"," to ad a output ")
htmlLine("tag","text","kbd"," to ad a keybord button ")
htmlLine("tag","text","pre"," to save iny thing i write inside it ")
htmlLine("tag","text","a"," to but a link include a text ")
htmlLine("tag","media","img"," to add an image ")
htmlLine("tag","media","figcaption"," to supscrip the image ")
htmlLine("tag","media","video"," to start adding the vidue ")
htmlLine("tag","media","track"," to add a suptital to the vidue ")
htmlLine("tag","media","audio"," to start adding an audio ")
htmlLine("tag","media","source"," to add the link or the position of the vidue {and you can sdd mor than one} ")
htmlLine("tag","list","ul"," unoldered list ")
htmlLine("tag","list","li"," the item ")
htmlLine("tag","list","ol"," olderd lest ")
htmlLine("tag","list","li"," the items ")
htmlLine("tag","list","dl"," discreption list ")
htmlLine("tag","list","dt"," the item ")
htmlLine("tag","list","dd"," the daiscription ")
htmlLine("tag","table","table"," start the table ")
htmlLine("tag","table","caption"," to add a title to the table ")
htmlLine("tag","table","thead"," table head ")
htmlLine("tag","table","tr"," the row ")
htmlLine("tag","table","th"," bolden sell ")
htmlLine("tag","table","tbody"," to main part of the table which include the data ")
htmlLine("tag","table","tr"," the rows ")
htmlLine("tag","table","td"," the sell ")
htmlLine("tag","table","tfoot"," the footer of the table ")
htmlLine("tag","table","tr"," the rows ")
htmlLine("tag","table","td"," the sell ")
htmlLine("tag","form","form"," container to some of forms ")
htmlLine("tag","form","fieldset"," to group the input forms ")
htmlLine("tag","form","legend"," to name the group ")
htmlLine("tag","form","label"," describe an input element ")
htmlLine("tag","form","input"," the main form element ")
htmlLine("tag","form","textarea"," an input element to write long text ")
htmlLine("tag","form","select"," input which let u select from a list ")
htmlLine("tag","form","option"," the element of the select input list ")
htmlLine("tag","form","optgroup"," a group options ")

//// end html

//// start css
function cssLine(classes ,element, comment) {
  let theLine = document.createElement("p");

  if (classes.length > 0) {
    classes = classes.split(" ");
    let theClasses = document.createElement("span");
    theClasses.append(`(${classes.join(" ,")})`);
    theClasses.classList.add("classes");
    theLine.append(theClasses);
    
    theLine.classList.add(...classes);
  }
  let theElement = document.createElement("a");
  theElement.append(element);
  theElement.setAttribute("target", `_blank`);
  theElement.setAttribute(
    "href",
    `https://www.google.com/search?q=${element}+property+in+css`
    );
    
    theLine.append(theElement);
    theLine.append(comment);

  document.querySelector(`section.css .contents`).append(theLine);
}

// ******************************************

cssLine("mouse","cursor","the icon of the mouse ")
cssLine("mouse","caret-color" ,`the color of mouse during typing`)
cssLine("mouse","pointer-events" ,`what happens when you click on the element`)
cssLine("box","width" ,`the width of the box`)
cssLine("box","min-width" ,`the minimum width of the box`)
cssLine("box","max-width" ,`the maximum width of the box`)
cssLine("box","height" ,`the height of the box`)
cssLine("box","min-height" ,`the minimum height of the box`)
cssLine("box","max-height" ,`the maximum height of the box`)
cssLine("box","padding" ,`take only positive values`)
cssLine("box","border" ,`you have to inter three variables [width] & [style] & [color`)
cssLine("box","border-radius" ,`the corners`)
cssLine("box","outline" ,`it is not good to use it`)
cssLine("box","margin" ,`the personal space of the box :)`)
cssLine("box","box-sizing" ,`how the width and the height be calculated`)
cssLine("box","overflow" ,`what happens when the text is mor than the box`)
cssLine("box","box-shadow" ,`it take [x] & [y] & [blur] &[spread] & [color] &["null"|inset]`)
cssLine("box","background" ,`operate the background of the box`)
cssLine("box","background-color" ,``)
cssLine("box","background-image" ,``)
cssLine("box","background-repeat" ,`[ repeat || no-repeat || repeat-x || repeat-y || space ] `)
cssLine("box","background-position" ,`the position of the packground in the box `)
cssLine("box","background-attachment" ,` [ fixed (fixed with the page) || scroll (fixed withe the text) ]`)
cssLine("box","filter" ,`[ grayscale || blur || invert || ... ] `)
cssLine("box","opacity" ,`the appearing degree of the box`)
cssLine("text","text-shadow" ,``)
cssLine("text","text-align" ,`the horizontal site of the text`)
cssLine("text","text-decoration" ,``)
cssLine("text","text-transform" ,`[ none || capitalize || uppercase || lowercase ]`)
cssLine("text","text-indent" ,`the space pefore the text in the first line`)
cssLine("text","text-overflow" ,` [ ellipsis || clip ]`)
cssLine("text","white-space" ,` [ nowrap || ... ]`)
cssLine("text","word-break" ,`[ break-word || break-all ]`)
cssLine("text","font" ,`the font operation`)
cssLine("text","font-family" ,`the name of the family of the text type`)
cssLine("text","font-weight" ,``)
cssLine("text","font-style" ,`[ normal || italic || oblique ]`)
cssLine("text","font-size" ,``)
cssLine("text","line-height" ,`the space between the lines`)
cssLine("text","direction" ,` [ rtl || ltr ] `)
cssLine("text","vertical-align" ,`the vertical site of the image which between the text`)
cssLine("text","letter-spacing" ,`the space between the letters`)
cssLine("text","word-spacing" ,`the space between the words`)
cssLine("list","list-style" ,`operation of the lists`)
cssLine("list","list-style-type" ,``)
cssLine("list","list-style-position" ,` [ inside || outside ] `)
cssLine("list","list-style-image" ,`to add image`)
cssLine("table","border-spacing" ,`the space between the cells of the borders`)
cssLine("properties","float" ,``)
cssLine("properties","clear" ,`use to control the flote elements`)
cssLine("properties","visibility" ,`head the element but leav hid site != {display: none;}`)
cssLine("properties","display" ,``)
cssLine("properties flex","flex-flow" ,`flex-direction + flex-wrap`)
cssLine("properties flex","flex-direction" ,`[ row || row-reverse || column || column-reverse ] `)
cssLine("properties flex","flex-wrap" ,` [ nowrap || wrap || wrap-reverse ]`)
cssLine("properties flex","justify-content" ,`[ flex-start || flex-end || center || space-between || space-around || space-evenly ]`)
cssLine("properties flex","align-content" ,`[ stretch || flex-start || flex-end || center || space-between || space-around || space-evenly ] `)
cssLine("properties flex","align-items" ,` [ stretch || flex-start || flex-end || center || baseline ] `)
cssLine("properties flex","flex" ,`[ flex-grow + flex-shrink + flex-basis ] `)
cssLine("properties flex","flex-grow" ,`growing befor the other`)
cssLine("properties flex","flex-shrink" ,`shrinking before the other`)
cssLine("properties flex","flex-basis" ,`if the flex direction is row it become the wodth and if the flex direction is colom it becom height`)
cssLine("properties flex grid","order" ,`the order of the item`)
cssLine("properties grid","align-self" ,``)
cssLine("properties grid","grid-template" ,` [ grid-template-columns + grid-template-rows ]`)
cssLine("properties grid","grid-template-columns" ,` [ repeat(quantity , amount ) {can use "auto-fill" for the quantity and "minmax(,)" for the amount} || minmax(,) || px || % || fr || auto ] `)
cssLine("properties grid","grid-template-rows" ,`[ repeat(quantity , amount ) {can use "auto-fill" for the quantity and "minmax(,)" for the amount} || minmax(,) || px || % || fr || auto ]`)
cssLine("properties grid","grid-template-areas" ,`"[ "00 01 02 ..." "10 11 12 ..." ...] {you have to name the element in the chiled by grid-area}`)
cssLine("properties grid flex","gap" ,`row-gap + column-gap`)
cssLine("properties grid flex","row-gap" ,``)
cssLine("properties grid flex","column-gap" ,``)
cssLine("properties flex","justify-content" ,` [ flex-start || flex-end || center || space-between || space-around || space-evenly ] `)
cssLine("properties flex","align-content" ,`[ stretch || flex-start || flex-end || center || space-between || space-around || space-evenly ] `)
cssLine("properties flex","align-items" ,`[ stretch || flex-start || flex-end || center || baseline ]`)
cssLine("properties grid","grid-column" ,` [ start / end]{and you can use "span()"} `)
cssLine("properties grid","grid-row" ,`[ start / end]{and you can use "span()"}`)
cssLine("properties grid","grid-area" ,`the name of the area || the beganing and ending of rows and columns`)
cssLine("properties","position" ,`[ static || absolute || fixed || relative || sticky ] `)
cssLine("properties","z-index" ,``)
cssLine("transform","transform" ,``)
cssLine("transform","backface-visibility" ,`visib`)
cssLine("transform","transform-style" ,`fl`)
cssLine("transform","perspective" ,`it is a property have to be add to the parent box to use"translatez"`)
cssLine("transform","perspective-origin" ,`it is a property added to change the center of"translatez"`)
cssLine("transform","transform-origin" ,`the sinter of the transform [x-origin y-origin`)
cssLine("animation","animation" ,`[animation-name + nimation-duration + animation-timing-function + animation-delay + animation-iteration-count + animation-direction] you hve to creat the animation by"@keyframes animation-name {}"`)
cssLine("animation","animation-name" ,` `)
cssLine("animation","animation-duration" ,`the time`)
cssLine("animation","animation-iteration-count" ,`the number of rebeating`)
cssLine("animation","animation-timing-function" ,`[easy ||| linear ||| ..]`)
cssLine("animation","animation-direction" ,`[normal ||| reverse ||| alternate ||| ...]`)
cssLine("animation","animation-delay" ,`can use negative values`)
cssLine("animation","animation-fill-mode" ,`[ forwards ||| backwards ||| ... ] can use negative valuse`)
cssLine("animation","animation-play-state" ,`[ running ||| paused ]`)
cssLine("transition","transition" ,` [ transition-property + transition-duration + transition-timing-function + transition-delay ] `)
cssLine("transition","transition-property" ,``)
cssLine("transition","transition-duration" ,``)
cssLine("transition","transition-delay" ,``)
cssLine("transition","transition-time-function" ,`[ ease || ease-in || ease-out || linear || ... ] `)
cssLine("values","px" ,`the main unit`)
cssLine("values","em" ,`times from father element`)
cssLine("values","rem" ,`times from root`)
cssLine("values","vw" ,`1 percent from the width`)
cssLine("values","vh" ,`1 percent from the hight`)
cssLine("values","calc()" ,`to make mathematic equation `)
cssLine("values","var()" ,`to to call a variable `)
cssLine("values","initial" ,`the default value`)
cssLine("values","inherit" ,`to inherit the property from the parent element`)
cssLine("values","Selectors" ,`*   .   >   +   #    ,`)
//// end css


//// start js


function jsLine(classes ,element, comment) {
  let theLine = document.createElement("p");

  if (classes.length > 0) {
    classes = classes.split(" ");
    let theClasses = document.createElement("span");
    theClasses.append(`(${classes.join(" ,")})`);
    theClasses.classList.add("classes");

    theLine.append(theClasses);
    theLine.classList.add(...classes);
  }
  let theElement = document.createElement("a");
  theElement.append(element);
  theElement.setAttribute("target", `_blank`);
  theElement.setAttribute(
    "href",
    `https://www.google.com/search?q=${element}+in+js`
    );
    
    theLine.append(theElement);
    theLine.append(comment);

  document.querySelector(`section.js .contents`).append(theLine);
}

// ******************************************





jsLine("general",`typeOf var`,`return the type of the variable`)
jsLine("general",`delete var`,`delete the property and return true or false`)
jsLine("window",`window.alert`,`(text) out a message from the window (it is not good way to appear yor message)`)
jsLine("window",`window.confirmMsg`,`(text) out a question"y,n" from the window , return boolean value(it is not good way to appear yor message)`)
jsLine("window",`window.promptMsg`,`(text,default message) out a question"take a text" from the window , return a text (it is not good way to appear yor message)`)
jsLine("window",`window.close`,`() close the page`)
jsLine("window",`window.open`,`(url,widow_name || target,features) open a widow or a page`)
jsLine("window page",`window.scroll`,`(x,y || {css_location_styles}) scroll to (use " behavior: "smooth" " to make the translation smoothly)`)
jsLine("window page",`window.scrollTo`,`(x,y || {css_location_styles}) scroll to (use " behavior: "smooth" " to make the translation smoothly)`)
jsLine("window page",`window.scrollBy`,`(x,y || {css_location_styles}) scroll by (use " behavior: "smooth" " to make the translation smoothly)`)
jsLine("window page",`window.scrollX`,`return the value of the x scrolling`)
jsLine("window page",`window.pageXOffset`,`return the value of the x scrolling`)
jsLine("window page",`window.pageYOffset`,`return the value of the y scrolling`)
jsLine("window page",`window.scrollY`,`return the value of the y scrolling`)
jsLine("general",`console.log`,`(code,...style) to write in the console (add "%c" to swear between the text parts to operate their style accurately)`)
jsLine("general",`console.error`,`(code) to write an error in the console`)
jsLine("general",`console.table`,`(code) to add a table in the console`)
jsLine("general",`console.group`,`(code) to add a group in the console`)
jsLine("general",`console.groupEnd`,`(code) to close the group`)
jsLine("document element",`document.write`,`(code) add HTML code`)
jsLine("document element",`document.createElement`,`(tag_name) create an element and return it`)
jsLine("document element",`document.createTextNode`,`(text) create a text and return it`)
jsLine("document element",`document.createComment`,`(text) create a comment and return it`)
jsLine("document element",`.appendChild`,`(var) to add some thing(like text or comment) to the element`)
jsLine("document element",`.append`,`(var) to add some thing to the end of the element`)
jsLine("document element",`.prepend`,`(var) to add some thing to the top of the element`)
jsLine("document element",`.before`,`(var) to add some thing before the element`)
jsLine("document element",`.after`,`(var) to add some thing after the element`)
jsLine("document element",`.remove`,`() to remove the element`)
jsLine("document element",`.cloneNode`,`(:bool) return a copy of the element discharger or not`)
jsLine("document element",`document.getElementById`,`(id) return HTML element by the ID`)
jsLine("document element",`document.getElementsByClassName`,`(class) return HTML element by the Class`)
jsLine("document element",`document.getElementsByTagName`,`(tad_name) return HTML element by the its type`)
jsLine("document element",`document.querySelector`,`(address) return first HTML element by the same method of CSS`)
jsLine("document element",`document.querySelectorAll`,`(address) return HTML elements by the same method of CSS`)
jsLine("document element",`.children`,`return all child elements as an array`)
jsLine("document element",`.childNodes`,`return all child items as an array`)
jsLine("document element",`.firstElementChild`,`return first child element`)
jsLine("document element",`.lastElementChild`,`return last child element`)
jsLine("document element",`.firstChild`,`return first child item`)
jsLine("document element",`.lastChild`,`return last child item`)
jsLine("document element",`.nextSibling`,`return the next item`)
jsLine("document element",`.previousSibling`,`return the Previous item`)
jsLine("document element",`.nextElementSibling`,`return the next element`)
jsLine("document element",`.previousElementSibling`,`return the Previous element`)
jsLine("document element",`.parentElement`,`return parent element`)
jsLine("document page",`document.title`,`return the title of the page`)
jsLine("document page",`document.body`,`return the body of the page`)
jsLine("document page",`document.forms`,`return all forms from the page as an array`)
jsLine("document page",`document.links`,`return all links from the page as an array`)
jsLine("document style",`.style."The_Property"`,`to set the property (type the property name with Camel case)`)
jsLine("document style",`.style.cssText`,`to type the style in one line`)
jsLine("document style",`.style.removeProperty`,`(property) to remove an property`)
jsLine("document style",`.style.setProperty`,`(property,val) to set an property`)
jsLine("document style",`document.styleSheets[n].rules`,`return the roles in the style sheet number n as an array`)
jsLine("document attribute",`document.createAttribute`,`(attribute_name) create an attribute and return it`)
jsLine("document attribute",`.setAttributeNode`,`(att) to add the attribute which I create it to the element`)
jsLine("document attribute",`.setAttribute`,`(att,new_value) change the value of the attribute`)
jsLine("document attribute",`.getAttribute`,`(att) return the value of the attribute`)
jsLine("document attribute",`.attributes`,`return all attributes as an array`)
jsLine("document attribute",`.hasAttribute`,`(att) check if the attribute is existed`)
jsLine("document attribute",`.hasAttributes`,`() check if any attribute is existed`)
jsLine("document attribute",`.removeAttribute`,`(att) remove the attribute`)
jsLine("document attribute",`."attribute_name"`,`return the attribute`)
jsLine("document attribute",`.className`,`return the class name and change it`)
jsLine("document attribute",`.classList`,`return object of all existed classes`)
jsLine("document attribute",`.classList.contains`,`(class) check if the element has specific class`)
jsLine("document attribute",`.classList.item`,`(n) return Nth item`)
jsLine("document attribute",`.classList.add`,`(class) add a class to the element`)
jsLine("document attribute",`.classList.remove`,`(class) remove a class from the element`)
jsLine("document attribute",`.classList.toggle`,`(class) remove a class from the element if it's existed or add it if it's not existed`)
jsLine("events",`."eventname"`,`create an event`)
jsLine("events",`.addEventListener`,`(event_name,function(e)) create an event`)
jsLine("events",`.preventDefault`,`() remove the attribute event`)
jsLine("events",`setTimeout`,`(function,time(ms),...attributes_of_the_function) do the function after the specific time , return the ID of the counter`)
jsLine("events",`setInterval`,`(function,time(ms),...attributes_of_the_function) repeat the function after every the specific time , return the ID of the counter`)
jsLine("events",`clearTimeout`,`(the_ID_of_the_counter) stop the counting`)
jsLine("events",`clearInterval`,`(the_ID_of_the_counter) stop the counting`)
jsLine("page",`location.href`,`return the link of ,can change the link but canon remove the old link from the history`)
jsLine("page",`location.assign`,`(link) change the lik of this page, (do not remove the old page from the history)`)
jsLine("page",`location.replace`,`(link) change the lik of this page, (remove the old page from the history)`)
jsLine("page",`location.host`,`return the host of the page + the port which I get the page by it`)
jsLine("page",`location.hostname`,`return the host of the page`)
jsLine("page",`location.protocol`,`return the protocol of the page`)
jsLine("page",`location.reload`,`reload the page`)
jsLine("page",`.stop`,`() stop uploading the page`)
jsLine("page",`.print`,`() print the page`)
jsLine("page",`.focus`,`() focus on a page or a window`)
jsLine("page",`history.length`,`return the number of the page in the history`)
jsLine("page",`history.back`,`() go back`)
jsLine("page",`history.forward`,`go forward`)
jsLine("page",`history.go`,`go to 'n' page (accept negative values)`)
jsLine("number",`.toString`,`() turn the number into a string`)
jsLine("number",`Number`,`(var) turn the string into a number`)
jsLine("number",`+var`,`turn the string into a number`)
jsLine("number",`-var`,`turn the string into a number and return the negative value of it`)
jsLine("number",`parseInt`,`(var) extract the integer from the string`)
jsLine("number",`parseFloat`,`(var) extract the float from the string`)
jsLine("number",`.toFixed`,`(n) identify hte number of bets which appear after the point`)
jsLine("number",`Number.MAX_SAFE_INTEGER`,`return the maximum safe number`)
jsLine("number",`Number.MAX_INTEGER`,`return the maximum possible number`)
jsLine("number",`Number.isInteger`,`(var) check if the value is number`)
jsLine("number",`Number.isNaN`,`(var) check if the value is nan`)
jsLine("number",`Math.round`,`(var) return the nearer integer`)
jsLine("number",`Math.ceil`,`(var) return the the nearer integer after it if it is not integer already`)
jsLine("number",`Math.floor`,`(var) return the smaller integer before it if it is not integer already`)
jsLine("number",`Math.trunc`,`(var) turn the float to integer`)
jsLine("number",`Math.max`,`(...var) return the biggest value`)
jsLine("number",`Math.min`,`(...var) return the smallest value`)
jsLine("number",`Math.pow`,`(x,n) return x power n`)
jsLine("number",`Math.random`,`() return random number`)
jsLine("string",`[i]`,`turn the chare number i`)
jsLine("string",`.charAt`,`(n) return the chare number n if i out the range return undefined`)
jsLine("string array",`.length`,`the length of the variable`)
jsLine("string",`.trim`,`() remove the space from first and last characters`)
jsLine("string",`.toUpperCase`,`() return the all chars to capital`)
jsLine("string",`.toLowerCase`,`() return the all chars to small`)
jsLine("string array",`.indexOf`,`(string,begin) begin from char number "begin" ||zero and search about the string "string" and return the first result if find`)
jsLine("string array",`.lastIndexOf`,`(string,begin) begin from char number "begin" ||zero and search about the string "string" and return the last result if find`)
jsLine("string",`.includes`,`(string,begin) begin from char number "begin" ||zero and search about the string "string" and return true or false`)
jsLine("string",`.startsWith`,`(string) begin from char number "begin" ||zero and check if it start with the string "string"`)
jsLine("string",`.endsWith`,`(string) begin from char number "begin" ||zero and check if it end with the string "string"`)
jsLine("string array",`.slice`,`(start,end) return a part of the string (accept negative values)`)
jsLine("string",`.substring`,`(start,end) return a part of the string (don't accept negative values and return it to zero && the order is not necessary)`)
jsLine("string",`.substr`,`(start,length) return a part of the string (accept negative values)`)
jsLine("string",`.repeat`,`(n) repeat the string n numbers`)
jsLine("string",`.split`,`(cut_point,n) swear the string n times`)
jsLine("string",`.replace`,`(word,another) replace the first 'world' it fined by the'another'`)
jsLine("string",`.replaceAll`,`(word,another) replace all 'world's it fined by the'another'`)
jsLine("array",`Array.isArray`,`(var) check if the variable is an array`)
jsLine("array",`.unshift`,`(...element) add elements in the first in the array`)
jsLine("array",`.push`,`(...element) add elements in the end in the array`)
jsLine("array",`.shift`,`() return the first element of array and remove it form the array`)
jsLine("array",`.pop`,`() return the last element of array and remove it form the array`)
jsLine("array",`.sort`,`() order the array`)
jsLine("array",`.reverse`,`() reverse the array`)
jsLine("array",`.splice`,`(start,length,...elements) remove the elements then add the new elements`)
jsLine("array",`.concat`,`(...elements) return the marge of this array and the add elements and arrays`)
jsLine("array",`.join`,`(comma) merge array elements together in a string`)
jsLine("array",`.map`,`(function(element,index,array),this) make some thing on every element of array and return a new array`)
jsLine("array",`.filter`,`(function(element,index,array),this) return the element which complies with the condition in a new array`)
jsLine("array",`.reduce`,`(function(previous,element,index,array),this) implement a function between the elements of the array and return one element`)
jsLine("array",`.forEach`,`(function(element,index,array),this) it is look like the map function put it is don't return any thing , usually used to do some thing in HTML elements`)
jsLine("array",`.some`,`(function(element,index,array),this) check if the variable's elements include an element complies with the condition and return boolean value`)
jsLine("array",`.every`,`(function(element,index,array),this) check if all elements of the variable comply with the condition and return boolean value`)
jsLine("array",`array.from`,`(element,function) return any thing you but as an array and do the function that you but`)
jsLine("array",`array.copyWithin`,`(element) coby a type of an array in site of the array`)
jsLine("object",`Object.create`,`(an_object) Creates an object that has the specified prototype`)
jsLine("object",`Object.assign`,`(...an_object) do lost of oject together it is look like an_array.concat but we but first object as an attribute`)
jsLine("object",`.keys`,`(an_object) return the property name in an array`)
jsLine("object",`.entries`,`(an_object) return the properties and its values in arrays`)
jsLine("object set",`= new set`,`(an array) Creates a set `)
jsLine("object set",`= new weakSet`,`(an array) Creates a weak set don't content any thing except objects`)
jsLine("object set",`.add`,`(ele) add an element for the set `)
jsLine("object set",`.delete`,`(ele) delete an element form the set and return boolean result depending on existing of element `)
jsLine("object set",`.clear`,`() delete all element `)
jsLine("object set",`.has`,`(ele) check if the element is existed `)
jsLine("object mab",`= new mab`,`(an array) Creates a mab `)
jsLine("object mab",`= new weakMab`,`(an array) Creates a weak mab `)
jsLine("object mab",`.set`,`(ele) add an element for the mab `)
jsLine("regular",`.match`,`(<span style="color:red">/roles/</span>) check if the variable comply with the roles and return the number of the index or return "null" if no resorts`)
jsLine("regular",`<span style="color:red">/roles/</span>.test`,`(var) check if the variable comply with the roles or not`)
jsLine("OOP",` instanceof a_class`,`to check if the variable is instance of the class`)
jsLine("OOP",`static var`,`create a property which you can't access it except by the class`)
jsLine("prototype",`obj.prototype`,`to show the prototype of the object`)
jsLine("prototype",`obj.prototype.some_thing`,`to check a property or create one`)
jsLine("prototype",`Object.getOwnPropertyDescriptor`,`(the_object,the_element_name) to check the property descriptor of an element of the object`)
jsLine("prototype",`Object.getOwnPropertyDescriptors`,`(the_object) to check the property descriptor of all elements of the object`)
jsLine("date",` = new Date`,`(a_date) to create a variable have all date information of now ir hte date you entered`)
jsLine("date",`Date.now`,`() return the number of millie secondes from 1970 until now`)
jsLine("date",`.getTime`,`() return the number of millie secondes from 1970 until the date in the variable`)
jsLine("date",`.setTime`,`() set the number of millie secondes from 1970 until the date in the variable`)
jsLine("date",`.getDate`,`() return Day Of The Month`)
jsLine("date",`.setDate`,`() set Day Of The Month`)
jsLine("date",`.getFullYear`,`() return the year`)
jsLine("date",`.setFullYear`,`() set the year`)
jsLine("date",`.getMonth`,`() return the index of the month`)
jsLine("date",`.setMonth`,`() set the index of the month`)
jsLine("date",`.getDay`,`() return the index of the day of the weak`)
jsLine("date",`.setDay`,`() set the index of the day of the weak`)
jsLine("date",`.getHours`,`() return the hour of the day`)
jsLine("date",`.setHours`,`() set the hour of the day`)
jsLine("date",`.getMinutes`,`() return the minutes of the hour`)
jsLine("date",`.setMinutes`,`() set the minutes of the hour`)
jsLine("date",`.getSeconds`,`() return the secondes of the minutes`)
jsLine("date",`.setSeconds`,`() set the secondes of the minutes`)
jsLine("json",`JSON.parse`,`(var) return JSON as js`)
jsLine("json",`JSON.stringify`,`(var) return js as JSON`)
//// end js


//// start js


function gitLine(classes ,element, comment) {
  let theLine = document.createElement("p");

  if (classes.length > 0) {
    classes = classes.split(" ");
    let theClasses = document.createElement("span");
    theClasses.append(`(${classes.join(" ,")})`);
    theClasses.classList.add("classes");

    theLine.append(theClasses);
    theLine.classList.add(...classes);
  }
  let theElement = document.createElement("a");
  theElement.append(element);
  theElement.setAttribute("target", `_blank`);
  theElement.setAttribute(
    "href",
    `https://www.google.com/search?q=${element}+at+command+line`
    );
    
    theLine.append(theElement);
    theLine.append(comment);

  document.querySelector(`section.git .contents`).append(theLine);
}

// ******************************************



gitLine("general",`--help`,`help`)
gitLine("general",`ls`,`check the files and folders`)
gitLine("general",`cd (...)`,`go to an address at the pc`)
gitLine("general",`md (name)`,`create a file`)
gitLine("general",`touch (name)`,`create a new folder`)
gitLine("general",`mv`,`move or change the folder`)
gitLine("general",`cp`,`copy`)
gitLine("general",`rm`,`delete`)
gitLine("general",`clear`,`clear the screen`)
gitLine("general",`echo (text)`,`print a text`)
gitLine("general",`echo (text) > (folder)`,`make a .text`)
gitLine("general",`cat (folder)`,`print a folder`)
gitLine("general",`cat (folder) > (folder)`,`copy a folder`)
gitLine("general",`explorer (folder)`,`open a file`)
gitLine("general",`>`,`remove the old an put the new`)
gitLine("general",`>>`,`put the new under the old`)
gitLine("general",`grep (text) (folder)`,`search`)
gitLine("general",`file`,`the type of the file`)
gitLine("general",`man`,`the manual of a line`)
gitLine("general",`/?`,`the manual of a line`)
gitLine("general",`tree`,`the folders tree`)
gitLine("general",`tasklist`,`Control+Alt+Delete`)
gitLine("general",`alias`,`make a shortcut`)
gitLine("general",`explorer`,`open the folder`)
gitLine("general",`ss64.com`,``)
gitLine("general",`... terminal`,``)

gitLine("key",`ssh-keygen -t (algorithm type => rsa) -b (num of bits => 4096) -C (email)`,`create public key`)
gitLine("key",`ssh -T (email)`,`check the linking`)

gitLine("local",`git init`,`make a git point`)
gitLine("local",`git clone`,`git a github project`)
gitLine("local",`git status`,`return the changes`)
gitLine("local",`git add (folderName | *)`,`add the folders to the staging area`)
gitLine("local",`git restore --staged (folderName | *)`,`remove the folders from the staging area`)
gitLine("local",`git commit -m (message)`,`add the folders to the local repo with a message`)
gitLine("local",`git reset head (folderName | *)`,`remove the folders from the staging area`)
gitLine("local",`git status (folderName | *)`,`remove the folders from the staging area`)
gitLine("local",`git clean -n`,`report before delete all folders`)
gitLine("local",`git clean -f`,`delete all folders`)
gitLine("local stash",`git stash`,`save the staging folder in a box`)
gitLine("local stash",`git stash list`,`report about the box folders`)
gitLine("local stash",`git stash save (message)`,`save the staging folder in a box with a message`)
gitLine("local stash",`git stash pop (id|null)`,`return the first box folders to the staging`)
gitLine("local stash",`git stash apply (id|null)`,`return the first box folders to the staging as a copy`)
gitLine("local stash",`git stash drop (id|null)`,`delete the first box folders`)
gitLine("local stash",`git stash show (id|null)`,`appear the folders of first box`)
gitLine("local stash",`git stash clear`,`delete all boxes`)
gitLine("local branch",`git branch`,`report about the branches`)
gitLine("local branch",`git branch -M (branchName)`,`add branches`)
gitLine("local branch",`git checkout (branchName)`,`change the branch`)
gitLine("local branch",`git checkout -b (branchName)`,`create and change the branch`)
gitLine("local branch",`git branch -d (branchName)`,`delete a branch`)
gitLine("local remote",`git remote -v`,`report about the remote repos`)
gitLine("local remote",`git remote add (remoteName) (remoteLink)`,`add report`)
gitLine("local",`git ignore patterns`,`ffff`)

gitLine("repo",`git clone (link)`,`download a file from github`)
gitLine("repo",`git push (remoteName) (branchName)`,`send the files from the local to the remote`)
gitLine("repo",`git push -u (remoteName) (branchName)`,`get and send the files from the local to the remote`)
gitLine("repo",`git pull (remoteName)`,`fitch and merge the files from the remote to the local`)
gitLine("repo",`git log`,`report of all commits`)
gitLine("repo",`git reset --hard (hash)`,`make a commit the head of branch and delete the next commit after update the remote`)
gitLine("repo",`git tag`,`list of tags`)
gitLine("repo",`git tag (name)`,`create a tag`)
gitLine("repo",`git tag -a (name) -m (message)`,`create a tag with a comment`)
gitLine("repo",`git tag -d (name)`,`delete a tag`)
gitLine("repo",`git push (remote) --delete (name)`,`delete a remote tag`)
gitLine("repo",`git tag -l (search word)`,`to search in the tags`)

gitLine("information",`git config -l`,`report about the important configuration`)
gitLine("information",`git config -l --show-origin`,`report about the important configuration with its source`)
gitLine("information",`git config -l --unset (configName)`,`delete a config`)
gitLine("information",`git help config`,`report about all configuration`)
gitLine("information",`git config --global --edit`,`open configuration at an editor`)




//// end js