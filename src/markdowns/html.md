# HTML

# Helpful References

1. W3School: https://www.w3schools.com/
- Tutorials/reference on coding.


# Essentials


# 1. Introduction
*What is HTML?*
- HTML (Hyper Text Markup Language) is a standard markup language for Web pages.
- It can be considered as a backbone, a frame, or a structure of a web page.

# 2. Structure
*What does HTML consist of?*
- Document type: `<!DOCTYPE html>`
- HTML tag: `<html>`
- Body tag: `<Body>`

# 3. Element
*What is an element?*
- The HTML element is everything from the start tag to the end tag:
```html
<tag>Element</tag>
```

# 4. Attributes
*What is an attribute?*
- An attribute is an additional information about an HTML element.
ex 1: The href Attribute
```html
<!-- The href attribute specifies the URL of the page the link goes to -->
<a href="https://www.w3schools.com">Visit W3 Schools</a>
```
ex 2: The src Attribute
```html
<!-- The src attribute specifies the path to the image to be displayed -->
<img src="img_girl.jpg">
```

ex3: The title Attribute
```html
<!-- The title attribute defines some extra information about an element. -->
<p title="I'm a tooltip">This is a paragraph.</p>

```

# 5. Headings

- HTML headings are titles or subtitles that you want to display on a webpage.

```html
<!-- h1 is largest h6 is smallest-->
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

# 6. Paragraph

- The HTML `<p>` element defines a paragraph.
- Characteristics:
    - Always start in a newline.
    - Does not reflect extra lines and spaces.

- Additional tags used along with `<p>`

1. HTML Horizontal Rules - `<hr>`
`<hr>` creates a horizontal line.

2. HTML Line Break - `<br>`
`<br>` creates a linebreak within a paragraph element.

3. Preformatted - `<pre>`
`<pre>` creates unformatted environment.
- space and newlines reflect inside `<pre`

# 7. Styles

- The HTML style attribute is used to add styles to an element, such as color, font, size, and more.

Frequently used style properties:

1. color
```html
<p style="color:red;">I am red</p>
```

2. font-size
```html
<p style="font-size:50px;">I am big</p>
```

3. background-color
```html
<body style="background-color:powderblue;">
```

4. font-style
```html
<h1 style="font-family:verdana;">This is a heading</h1>
```

5. Text Alignment
```html
<!-- Center align text -->
<h1 style="text-align:center;">Centered Heading</h1>
```

# 8. Formatting
- HTML contains several elements for defining text with a special meaning.

Formatting elements were designed to display special types of text:

1. Bold
`<b>` - Bold text
`<strong>` - Important text
2. Italic
`<i>` - Italic text
`<em>` - Emphasized text
3. Highlight
`<mark>` - Marked text
4. Deleted
`<del>` - Deleted text
5. Underline
`<ins>` - Inserted text
6. Subscript/Superscript
`<sub>` - Subscript text
`<sup>` - Superscript text
7. Smaller text
`<small>` - Smaller text

# 9. Quotes

- The HTML `<blockquote>` element defines a section that is quoted from another source.
ex 1: block quote with citation
```html
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For nearly 60 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by more than one million members in the United States and close to five million globally.
</blockquote>
```

# 10. Comments

- You can add comments to your HTML source by using the following syntax:
```html
<!-- Write your comments here -->
```

## Hide content

- Comment section can be used to temporarily hide a content.
```html
<!--
<p>Look at this cool image:</p>
<img border="0" src="pic_trulli.jpg" alt="Trulli">
-->
```

# 11. Colors

- Colors can be represented in three different ways
1. RGB - ex: rgb(255, 99, 71)
2. HEX - ex: #ff6347
3. HSL - ex: hsl(9, 100%, 64%)

*What is RGB color?*
- An RGB color value represent RED, GREEN, BLUE light sources. The mixture of these three colors can create quite a wide range of colors. 
- The value of each color is controlled by an argument inside rgb(red, green, blue) function.

*What is HEX color?*
- A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.
- Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff (same as decimal 0-255).

*What is HSLA color?*
- In HTML, a color can be specified using hue, saturation, and lightness (HSL) in the form:
hsl(hue, saturation, lightness)

- Depending on how much value and percentages that you mix, it will create different colors as a result.

# 12. Cascading Style Sheets (CSS)

*What is CSS?*
- Cascading Style Sheets (CSS) is used to format the layout of a webpage.

*Why was CSS created?*
- CSS saves a lot of work. It can control the layout of multiple web pages all at once.

- CSS can be added to HTML documents in 3 ways:
1. Inline - by using the style attribute inside HTML elements
2. Internal - by using a `<style>` element in the `<head>` section
3. External - by using a`<link>` element to link to an external CSS file

## 1. inline

- An inline CSS uses the style attribute of an HTML element. 

```html
<h1 style="color:blue;">A Blue Heading</h1>
```

## 2. Internal CSS

- An internal CSS is defined in the `<head>` section of an HTML page, within a `<style>` element.

Ex 1: Set style for body, h1, and p
```html
<!DOCTYPE html>
<html>
<head>
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

## 3. External CSS

- An external style sheet is used to define the style for many HTML pages.
- You can import a whole page of style.css with one line of code.
ex:
index.html:
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

style.css:
```css
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
```

Mostly used CSS:

1. Border: creates a border around an HTML element.
```css
p {
  border: 2px solid powderblue;
}
```
2. Padding: creates space between the text and the border
```css
p {
  border: 2px solid powderblue;
  padding: 30px;
}
```
3. Margin: creates a margin(space) ourside the border.
```css
p {
  border: 2px solid powderblue;
  margin: 50px;
}
```

# 13. HTML Links

- Links are found in nearly all web pages. Links allow users to click their way from page to page.
- HTML links are hyperlinks.

1. href attribute

- Use href attribute to set url that an user will go.

```html
<a href="www.google.com">Google</a>
```

2. HTML links

By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.

```html
<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
```

3. Absolute vs Relative URLs

- Absolute URL: DOES NOT change even if your current path change. 
- Relative URL: changes when your current path change.

ex 1: Aboslute URL
```html
<h2>Absolute URLs</h2>
<p><a href="https://www.w3.org/">W3C</a></p>
```

ex 2: Relative URL
```html
<h2>Relative URLs</h2>
<!-- the href attribute opens the file called html_images.asp from the current directory -->
<p><a href="html_images.asp">HTML Images</a></p>
```

4. Wrap around image, email address, and a link.

- If you wrap around or inherit `<a></a>`, other tags will inherit the link.

```html
<!-- HTML Links - Use an Image as a Link -->
<a href="default.asp">
<img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
<!-- Link to an Email Address -->
<a href="mailto:someone@example.com">Send email</a>

<!-- Button as a Link -->
<button onclick="document.location='default.asp'">HTML Tutorial</button>

<!-- Set Title: title will show as a tooltip when the mouse goes over the link -->
<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visit our HTML Tutorial</a>

```
5. Bookmark in HTML

- HTML links can be used to create bookmarks, so that readers can jump to specific parts of a web page.


```html
<!-- When the user click a link, it will jump to the <h2> with the id "C4" -->
<p><a href="#C4">Jump to Chapter 4</a></p>

<h2 id="C4">Chapter 4</h2>
```

# 14. Images

- Images can improve the design and the appearance of a web page.

- You can add image by using `<img>` tag
  - src - Specifies the path to the image
  - alt - Specifies an alternate text for the image

1. src and alt attributes

```html
<!-- Get the image fil in the current path/img_chania.jpg -->
<img src="img_chania.jpg" alt="Flowers in Chania">
```

2. set height and width

```html
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">

```

3. Get image from anywhere

- You can get images from other servers, websites, or your PC.

4. Image Map

- With HTML image maps, you can create clickable areas on an image.

ex1: Each `<area>` inside `<map>`will lead to a different page.

```html
<!DOCTYPE html>
<html>
<body>

<h2>Image Maps</h2>
<p>Click on the computer, the phone, or the cup of coffee to go to a new page and read more about the topic:</p>

<img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
</map>

</body>
</html>

```

5. Backgroung Image

- A background image can be specified for almost any HTML element.

ex 1: inline style
```html
<div style="background-image: url('img_girl.jpg');">

```

ex 2: internal style

```html
style>
div {
  background-image: url('img_girl.jpg');
}
</style>
```

ex 3: Set a background image for a page.

```html
<style>
body {
  background-image: url('img_girl.jpg');
  background-repeat: no-repeat;
  /* Always cover the page */
  background-attachment: fixed;
  /*Cover the entire page*/
  background-size: cover;
}
</style>
```

ex 4: Stretch the picture 

```html
<style>
body {
  background-image: url('img_girl.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  /*Set size to fill up the whole page.*/
  background-size: 100% 100%;
}
</style>
```

# 16. Favicon

- A favicon is a small image displayed next to the page title in the browser tab.

- You can create your own favicon on below link:
https://favicon.cc

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Make sure the link of your icon in the <head>, and it will display on the tab of your browser.-->
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

# 17. Tables

- HTML tables allow web developers to arrange data into rows and columns.

Basic Table:
```html
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
```

# 18. Lists
- HTML lists allow web developers to group a set of related items in lists.

1.  Unordered Lists
```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

2. Ordered Lists
```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

# 19. HTML Block and inline Elements

*What are the differences between HTML block and inline elements?*

1. HTML block:
- A block-level element always starts on a new line.
- A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
- A block level element has a top and a bottom margin, whereas an inline element does not.

ex:
```html
<div>Hello World</div>
```

2. Inline Elements:
- An inline element does not start on a new line.
- An inline element only takes up as much width as necessary.

ex:
```html
<span>Hello World</span>
```

# 20. HTML class Attribute

- The HTML class attribute is used to specify a class for an HTML element.
- Multiple HTML elements can share the same class.
- You can set a specific style for a certain class and they will all share the same style.

```html
<!DOCTYPE html>
<html>
<head>
<style>
/*To give a style to a class, you write a period (.) character.*/
.city {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="city">
<h2>London</h2>
<p>London is the capital of England.</p>
</div> 

<div class="city">
<h2>Paris</h2>
<p>Paris is the capital of France.</p>
</div>

<div class="city">
<h2>Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>
</div>

</body>
</html>
```

# 21. HTML id Attribute

- The HTML id attribute is used to specify a unique id for an HTML element.

ex:
```html
<!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
</head>
<body>

<h1 id="myHeader">My Header</h1>

</body>
</html>
```

*What is the difference between class and ID?*

- A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page:

# 22. Iframe

- An HTML iframe is used to display a web page within a web page.

- The HTML `<iframe>` tag specifies an inline frame. An inline frame is used to embed another document within the current HTML document.

ex: 
```html
<iframe src="url" title="description"></iframe>
```

# 23. JavaScript

- JavaScript makes HTML pages more dynamic and interactive.
- The HTML `<script>` tag is used to define a **client-side** script (JavaScript).

1. Change an element of tags

```html
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
```

2. Change in style
```css
document.getElementById("demo").style.fontSize = "25px";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.backgroundColor = "yellow";
```
# 24. Head

- The HTML `<head>` element is a container for the following elements: `<title>`, `<style>`, `<meta>`, `<link>`, `<script>`, and `<base>`.

- The `<head>` element is a container for metadata (data about data) and is placed between the `<html>` tag and the `<body>` tag.

1. Link/Script

- You can use `<Link>` tag to link other file such as (.css) or (.js) or resources to your document.
```html
<link rel="stylesheet" href="mystyle.css">
<script src="myscripts.js"></script>

```

2. Title

- The <title> element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.
```html
<!DOCTYPE html>
<html>
  <head>
    <title>A Meaningful Page Title</title>
  </head>
</html>
```

*This is very imort for search engine optimization (SEO). This `<title>` tag is used by search engine algorithms to decide the order of the search.*


3. Meta
- The `<meta>` element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings.

- Though meta data is hidden by users, it is used by browsers, search engines, and other web services. 
```html
<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="John Doe">
```

# 25. Layout

- Websites often display content in multiple columns (like a magazine or a newspaper).
- There are basic layouts of the webpage shared. However, uses can manipulate to layouts to their likings. It is important to learn conventional tag names to construct an website. 

HTML Layout Elements
HTML has several semantic elements that define the different parts of a web page:

HTML5 Semantic Elements:
`<header>` - Defines a header for a document or a section
`<nav>` - Defines a set of navigation links
`<section>` - Defines a section in a document
`<article>` - Defines an independent, self-contained content
`<aside>` - Defines content aside from the content (like a sidebar)
`<footer>` - Defines a footer for a document or a section
`<details>` - Defines additional details that the user can open and close on demand
`<summary>` - Defines a heading for the `<details>` element

*Please refer to the documentation on HTML Semantics*
https://www.w3schools.com/html/html5_semantic_elements.asp


There are different ways to create multicolumn layouts:

1. Use CSS framework such as Bootstrap or W3.CSS
2. float property
3. flexbox
4. grid

*There is no telling which is better but it is important to know when to use it to prove most effective.*

# 26. Responsive

- Responsive web design is about creating web pages look good on all devices including PC, iPad, and phone. 

*How do developers create responsive design?*
- Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones):

1. Responsive image

- You can set width property of an image to make it responsive because it will scale up and down depending on a device.

```html
<img src="img_girl.jpg" style="width:100%;">
```

*Since scaled up picture may be bigger than the original, you can set `max-width`*

- You can also use CSS framework to make it respnsive.

# 27. Semantics

*What is semantics?*
- A semantic element clearly describes its meaning to both the browser and the developer.

- Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.

- Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

Examples of semantics:
```html
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```

1. Section

- The `<section>` element defines a section in a document. 

W3C HTML docs:
*A section is a thematic grouping of content, typically with a heading.*

ex:
```html
<section>
<h1>WWF</h1>
<p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
</section>
```

2. Article

- The `<article>` element specifies independent, self-contained content.

```html
<article>
<h2>Google Chrome</h2>
<p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
</article>
```

3. Header

- The `<header>` element represents a container for introductory content or a set of navigational links.

*Tip: You can think of the news article.*

```html
<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>
```

4. Footer

- The `<footer>` element defines a footer for a document or section.

A `<footer>` element typically contains:

- authorship information
- copyright information
- contact information
- sitemap
- back to top links
- related documents

5. Navigation tag

- The <nav> element defines a set of navigation links.

```html
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
```

6. Sidebar

- The <aside> element defines some content aside from the content it is placed in (like a sidebar).

# 28. Style Convention

- ASCII was the first character encoding standard. ASCII defined 128 different characters that could be used on the internet: numbers (0-9), English letters (A-Z), and some special characters like ! $ + - ( ) @ < > .

- The HTML5 specification encourages web developers to use the UTF-8 character set, which covers almost all of the characters and symbols in the world!

```html
<meta charset="UTF-8">
```

# 29. Additional Information

- A URL can be composed of words (e.g. w3schools.com), 
- or an Internet Protocol (IP) address (e.g. 192.68.20.50)
- HTML has unique ways of makeing entities, symbols, and emojis.

*What is URL(Uniform REsource Locator)?*

- A URL is another word for a web address.
- A URL can be composed of words (e.g. w3schools.com), or an Internet Protocol (IP) address (e.g. 192.68.20.50).

# 30. Forms


## a. Forms
- An HTML form is used to collect user input. 
- The use input is most often sent to a server for processing.

1. Form

- `<form>` element is used to create an HTML form.
- The <form> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

2. Input

- The HTML `<input>` element is the most used form element.
- An `<input>` element can be displayed in many ways, depending on the type attribute.

Widely used Types:
```html
<input type="text">	
<!-- Displays a single-line text input field -->
<input type="radio">
<!-- Displays a radio button (for selecting one of many choices) -->
<input type="checkbox">
<!-- Displays a checkbox (for selecting zero or more of many choices) -->
<input type="submit">
<!-- Displays a submit button (for submitting the form) -->
<input type="button">
<!-- Displays a clickable button -->
```

3. Label
- The `<label>` tag defines a label for many form elements.

Form example:
```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

## b. Form Attributes
1. The Action Attribute

- The action attribute defines the action to be performed when the form is submitted.
- Usually, the form submit when the user clicks on the submit button.


ex: send data to a .php page to run server-side script

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```

2. The Target Attribute

- The target attribute specifies where to display the response that is received after submitting the form.

- The target attribute can have one of the following values:
  - _blank:	The response is displayed in a new window or tab
  - _self:	The response is displayed in the current window
  - _parent:	The response is displayed in the parent frame
  - _top:	The response is displayed in the full body of the window
  - framename:	The response is displayed in a named iframe

ex: open in a new browser tab

```html
<form action="/action_page.php" target="_blank"> 
```

3. The Method Attibute

- The method attribute specifies the HTTP method to be used when submitting the form data.
- The form-data can be sent as URL variables (with method="get") or as HTTP post transaction (with method="post").
ex: 
```html
<!-- GET and POST methods-->
<form action="/action_page.php" method="get">
<form action="/action_page.php" method="post">

```
4. Autocomplete Attribute
- The autocomplete attribute specifies whether a form should have autocomplete on or off.
```html
<form action="/action_page.php" autocomplete="on">
```

5. Novalidate Attribute

- The novalidate attribute is a boolean attribute.
```html
<form action="/action_page.php" novalidate>
```

## c. Form Elements

- The HTML `<form>` element can contain one or more of the following form elements:
```html
<input>
<label>
<select>
<textarea>
<button>
<fieldset>
<legend>
<datalist>
<output>
<option>
<optgroup>
```

1. Label

- The `<label>` element defines a label for several form elements.
- The for attribute of the `<label>` tag should be equal to the id attribute of the `<input>` element to bind them together.

2. Select

- The `<select>` element defines a drop-down list:
- The `<option>` elements defines an option that can be selected.
```html
<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

*How do I allow multiple selection?*

- Use the multiple attribute to allow the user to select more than one value:

```html
<label for="cars">Choose a car:</label>
<select id="cars" name="cars" size="4" multiple>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```


3. Textarea

- The <textarea> element defines a multi-line input field (a text area):

```html
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```

- The rows attribute specifies the visible number of lines in a text area.
- The cols attribute specifies the visible width of a text area.

4. Fieldset and Legend elements

- The `<fieldset>` element is used to group related data in a form.

- The `<legend>` element defines a caption for the `<fieldset>` element.

```html
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
```

5. Output element

- The `<output>` element represents the result of a calculation (like one performed by a script).
```html
<form action="/action_page.php"
  oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  0
  <input type="range"  id="a" name="a" value="50">
  100 +
  <input type="number" id="b" name="b" value="50">
  =
  <output name="x" for="a b"></output>
  <br><br>
  <input type="submit">
</form>
```

## d. Input Types

1. Text

- `<input type="text">` defines a single-line text input field:
```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

2. Password

- `<input type="password">` defines a password field:
```html
<!-- Password field will hide the characters automatically -->
<form>
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="pwd">Password:</label><br>
  <input type="password" id="pwd" name="pwd">
</form>
```

3. Submit

- `<input type="submit">` defines a button for submitting form data to a form-handler.

*The form-handler is typically a server page with a script for processing input data.*

*An example of submitted data: firstname=John2121&lastname=Doe*

4. Reset

`<input type="reset">` defines a reset button that will reset all form values to their default values:

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
  <input type="reset">
</form>
```

5. Radio

- `<input type="radio">` defines a radio button.
```html
<p>Choose your favorite Web language:</p>

<form>
  <!-- Pattern: type=radio -> <label> -->
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>
```

6. Checkbox

- `<input type="checkbox">` defines a checkbox.
```html
<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>
```

7. Button

- `<input type="button">` defines a button:

```html
<input type="button" onclick="alert('Hello World!')" value="Click Me!">

```
8.  Email

- The `<input type="email">` is used for input fields that should contain an e-mail address.
*We can validate an email with this from html side.*
```html
<form>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email">
</form>
```
9. File

- The `<input type="file">` defines a file-select field and a "Browse" button for file uploads.
```html
<form>
  <label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile">
</form>
```

10. Range

- The `<input type="range">` defines a control for entering a number whose exact value is not important (like a slider control). 
- Default range is 0 to 100. However, you can set restrictions on what numbers are accepted with the min, max, and step attributes:

## e. Attributes

- This chapter describes the different attributes for the HTML `<input>` element.



1. Value

- The input value attribute specifies an initial value for an input field:
```html
<form>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form>
```

2. Readonly

- The input readonly attribute specifies that an input field is read-only.
- A read-only input field cannot be modified
```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John" readonly><br>
</form>
```

3. Disabled

- The input disabled attribute specifies that an input field should be disabled, which means unusable and un-clickable.

```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John" disabled><br>
</form>
```

4. Size

- The input size attribute specifies the visible width, in characters, of an input field.
*The default value for size is 20.*
*Note: The size attribute works with the following input types: text, search, tel, url, email, and password.*

```html
<form>
  <!-- The size of the textbox gets unusually long -->
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" size="50"><br>
</form>
```

5. maxlength

- The input maxlength attribute specifies the maximum number of characters allowed in an input field.

*However it does not create a notification to the user. In order to notify a user, it is better to use a javascript.*

```html
<form>
  <!-- size fits in 4 character and allows only 4 characters -->
  <label for="pin">PIN:</label><br>
  <input type="text" id="pin" name="pin" maxlength="4" size="4">
</form>
```

6. Multiple

- The input multiple attribute specifies that the user is allowed to enter more than one value in an input field.

```html
<form>
  <label for="files">Select files:</label>
  <input type="file" id="files" name="files" multiple>
</form>
```

7. Pattern 

- The input pattern attribute specifies a regular expression that the input field's value is checked against, when the form is submitted.

```html
<form>
  <label for="country_code">Country code:</label>
  <input type="text" id="country_code" name="country_code"
  pattern="[A-Za-z]{3}" title="Three letter country code">
</form>
```

8. Placeholder
- The input placeholder attribute specifies a short hint that describes the expected value of an input field.
```html
<form>
  <label for="phone">Enter a phone number:</label>
  <input type="tel" id="phone" name="phone"
  placeholder="123-45-678"
  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
</form>
```

9. Autofocus

- The input autofocus attribute specifies that an input field should automatically get focus when the page loads.

```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" autofocus><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

10. List

- The input list attribute refers to a `<datalist>` element that contains pre-defined options for an `<input>` element.

```html
<form>
  <input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
</form>
```

## f. Input Form Attributes

- Rule 1: Inputs and Labels must be inside a `<form>` tag.

1. formaction

- The input formaction attribute specifies the URL of the file that will process the input when the form is submitted.

- *The formaction attribute works with the following input types: submit and image.*
```html
<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <input type="submit" value="Submit">
  <input type="submit" formaction="/action_page2.php" value="Submit as Admin">
</form>
```

2. formenctype

- The input formenctype attribute specifies how the form-data should be encoded when submitted (only for forms with method="post").

# 31. Canvas

- The HTML `<canvas>` element is used to draw graphics on a web page.

- Ex: Create a canvas
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```
## a. Line

- After creating the rectangular canvas area, you must add a JavaScript to do the drawing.

```html
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
</script>
```

## b. Circle

```html
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
</script>
```

## c. Text

```html
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
</script>
```

# 32. SVG Graphics

- SVG defines vector-based graphics in XML format.
*What is XML format?*


*What is SVG?*
- SVG stands for Scalable Vector Graphics
- SVG is a W3C recommendation

ex1: Circle

```html
<!DOCTYPE html>
<html>
<body>

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

</body>
</html>
```

ex2: Rectangle

```html
<svg width="400" height="100">
  <rect width="400" height="100" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" />
</svg>
```

ex3: Rounded Rectangle

```html
<svg width="400" height="180">
  <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
  style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
</svg>
```

# 33. Media

- Multimedia on the web is sound, music, videos, movies, and animations.
- Video formats: .wav, .mp3, .mp4, .mpg, .wmv, and .avi.
- Audio formats: .wav, .mp3, .mp4

# 34 Video

- The HTML `<video>` element is used to show a video on a web page.

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

# 35. Audio

- The HTML `<audio>` element is used to play an audio file on a web page.

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```

*Autoplay attribute*
*You can create a YouTube video tag using `<iframe>`*

# 36. Geolocation

- The HTML Geolocation API is used to locate a user's position.

- The getCurrentPosition() method is used to return the user's position.


```html
<script>
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
</script>
```

# 37. Web Storage API

*What is HTML Web Storage?*

- With web storage, web applications can store data locally within the user's browser.
*Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.*

1. LocalStorage
- stores data with no expiration date

2. SessionStorage
- stores data for one session (data is lost when the browser tab is closed)

Blueprint:
```html
if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
} else {
  // Sorry! No Web Storage support..
}
```

# 38. Others

- There are numerous frameworks and API that you can utilize. It is important that developers do research everyday to optimize their code and to make the process simpler.

1. Web Workers API

- A web worker is a JavaScript running in the background, without affecting the performance of the page.


2. SSE API

- Server-Sent Events (SSE) allow a web page to get updates from a server.
- ex: Examples: Facebook/Twitter updates, stock price updates, news feeds, sport results, etc.


# Useful functions

1. Bullet points - Display squares instead of bullets
```html
<ul style="
list-style-type:square
;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

2. Use the correct HTML attribute to display letters (uppercase ABC) instead of numbers.
```html
<ol 
type="A"
>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```