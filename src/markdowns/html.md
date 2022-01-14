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


