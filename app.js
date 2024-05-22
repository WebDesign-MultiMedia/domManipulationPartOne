import "./styles.css";
// PART ONE - Getting Started

/* Select and cache the <main> element
in a variable named mainEL
*/
const mainEL = document.querySelector("main");

/* set the background color of mainEL
 to the value stored in the
 --main-bg css custome property */
mainEL.style.background = "var(--main-bg)";

/* set the content of mainEL to
 <h1> DOM Manipulation</h1>.
There are a variety of ways to do this;
pick whichever one that you think
works best in this situation */
mainEL.innerHTML = "DOM Manipulation";

/* add a class of flex-ctr to mainEL
 Hint: use the element.classList API*/
mainEL.classList.add("flex-ctr");

// PART  TWO - Creating a Menu Bar
/**
 * Select and cache the <nav id="top-menu">
 * element in a variable named topMenuEl
 */
const topMenuEl = document.getElementById("top-menu");

/**
 * Set the heigh of the topMenuEl element to be 100%
 */
topMenuEl.style.height = "100%";

/**
 * Set the background color of topMenuEl to the value stored
 * in the --top-menu-bg css custom property
 */
topMenuEl.style.background = "var(--top-menu-bg";

// add a class of flex-around  to topMenuEl
topMenuEl.classList.add("flex-around");

// PART THREE - Adding Menu buttons
// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
//const topMenuEl = document.getElementById("topMenuEl");

//Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {
  // Create an <a> element.
  const a = document.createElement("a");

  /**
   * On the new element, add an href attribute
   * with its value set to the href
   * property of the "link" object.
   */
  a.href = link.href;
  a.textContent = link.text;

  //Append the new element to the topMenuEl element.
  topMenuEl.appendChild(a);
});
