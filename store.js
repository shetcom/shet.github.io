//store (holds inner html for most pages on the those tools site)

// Header HTML
document.getElementById("header").innerHTML = '<div class="l"><a href="home.html" id="title">THOSE tools n stuff</a></div><div class="r" id="headerTopOptions"><a>Login</a> | <a>Profile</a> | <a>Register</a></div><div class="c"></div>';

// Footer HTML
document.getElementById("footer").innerHTML = "(c) 2003, those tools team (not real)<br><a>privacy policy</a> | <a>refund</a> |  <a>sup</a><hr>Don't procrastinate.";

// Top Message HTML (currently none)
document.getElementById("topMessage").innerHTML = '';

// Favicon
var favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = "icon.png";
document.head.appendChild(favicon);



