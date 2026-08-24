// Initialize font properties
const fontname = "Roboto+Mono";
const fontweights = [300, 400, 500]

// Color properties now live in assets/style.css as CSS variables, so that the
// light/dark toggle can swap them. See :root / [data-theme="light"] there.

// Body properties
const bodyfontweight = 300;
const bodyfontsize = "12pt";

// Link properties
const adecoration = "underline dotted";

// Menu properties
const menufontsize = "15pt";
const menudecoration = "none";

// Header properties
const headerfontsize = "18pt";
const headerdecoration = "none";
const namefontsize = "23pt";


// Publication properties
const ptitlefontsize = bodyfontsize;
const ptitleweight = 500;
const ptitledecoration = "none";
const ptitlestyle = "normal";

const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const insttitlesize = "12px";
const instyearsize = "11px";

// Works for sans serif, change otherwise
$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");
$("body").css("font-family", fontname);

$("body").css("font-weight", bodyfontweight);
$("body").css("font-size", bodyfontsize);

$("a").css("text-decoration", adecoration);

$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);

$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".name").css("font-size", namefontsize);

$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", ptitleweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);

$(".thisauthor").css("font-weight", selfweight);
$(".thisauthor").css("text-decoration", selfdecoration);
$(".thisauthor").css("font-style", selfstyle);

$(".institution").css("font-size", insttitlesize);
$(".years").css("font-size", instyearsize);

// Light/dark toggle. The initial theme is set by an inline script in the
// <head> of index.html so the page never flashes the wrong background.
(function () {
    const root = document.documentElement;
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;

    const meta = document.querySelector('meta[name="theme-color"]');
    const bgcolor = { dark: "#16131c", light: "#faf8fc" };

    function apply(theme) {
        root.setAttribute("data-theme", theme);
        try { localStorage.setItem("theme", theme); } catch (e) { }
        if (meta) meta.setAttribute("content", bgcolor[theme]);
        btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
        btn.setAttribute("title", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }

    apply(root.getAttribute("data-theme") === "light" ? "light" : "dark");

    btn.addEventListener("click", function () {
        apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
})();
