### Table of Contents
1. [Introduction](#javascript)
2. [Essentials](#essentials)
3. [Libraries](#libraries)
4. [Gulp](#gulp)

# CSS

- Aiming for a HackerRank.

# Introduction

*What is CSS?*

- CSS stands for Cascading Style Sheets
- CSS describes how HTML elements are to be displayed on screen, paper, or in other media

# Essentials

# 1. Syntax

- Each declaration includes a CSS property name and a value, separated by a colon.
```css
p {
  color: red;
  text-align: center;
}
```

# 2. Selectors

- A CSS selector selects the HTML element(s) you want to style.

1. Element Selector
```css
/* Select all p */
p {
  text-align: center;
  color: red;
}
```

2. Id Selector
```css
/* Select id */
#para1 {
  text-align: center;
  color: red;
}
```

3. Class Selector
```css
.center {
  text-align: center;
  color: red;
}
```

4. Style <p> elements with only class="center"

```css
p.center {
  text-align: center;
  color: red;
}
```

5. HTML elements can also refer to more than one class.

```css
<p class="center large">This paragraph refers to two classes.</p>
```

6. Universal Selector 
- The universal selector (*) selects all HTML elements on the page.

```css
* {
  text-align: center;
  color: blue;
}
```

7. Grouping Selector
- Look at the following CSS code (the h1, h2, and p elements have the same style definitions):

```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

8. 

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

# 3. Insert CSS

- There are three ways of inserting a style sheet:

    - External CSS
    - Internal CSS
    - Inline CSS

1. External CSS

- Each HTML page must include a reference to the external style sheet file inside the `<link>` element, inside the head section.

```html
<!DOCTYPE html>
<html>
<head>
<!-- This part will insert CSS -->
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

mystyle.css
```css
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```

2. Internal CSS

- The internal style is defined inside the `<style>` element, inside the head section.

```html
<!DOCTYPE html>
<html>
<head>
<!-- This part will insert CSS -->
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

3. Inline CSS

- An inline style may be used to apply a unique style for a single element.

```html
<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>
```

# 4. Comments

```css
/* You comment like this */
```

# 5. Colors

## a. Color Names

```html
<!DOCTYPE html>
<html>
<body>

<h1 style="background-color:Tomato;">Tomato</h1>
<h1 style="background-color:Orange;">Orange</h1>
<h1 style="background-color:DodgerBlue;">DodgerBlue</h1>
<h1 style="background-color:MediumSeaGreen;">MediumSeaGreen</h1>
<h1 style="background-color:Gray;">Gray</h1>
<h1 style="background-color:SlateBlue;">SlateBlue</h1>
<h1 style="background-color:Violet;">Violet</h1>
<h1 style="background-color:LightGray;">LightGray</h1>

</body>
</html>
```

## b. Background Color

```html
<!DOCTYPE html>
<html>
<body>

<h1 style="background-color:DodgerBlue;">Hello World</h1>

<p style="background-color:Tomato;">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
</p>

</body>
</html>
```

## c. Text Color

```html
<h3 style="color:Tomato;">Hello World</h3>

<p style="color:DodgerBlue;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

<p style="color:MediumSeaGreen;">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>

```

## d. Border

```html
<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>
```

## e. Color Values

```html
<h1 style="background-color:rgb(255, 99, 71);">...</h1>
<h1 style="background-color:#ff6347;">...</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>
<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>
```

## f. RGB

- An RGB color value represents RED, GREEN, and BLUE light sources.

Format:
```css
rgb(red, green, blue)
```
- Each parameter (red, green, and blue) defines the intensity of the color between 0 and 255.

ex:
```css
rgb(255, 99, 71)
```

## g. HEX

- A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.

Format:
```css
#rrggbb
```
- Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff (same as decimal 0-255).

ex:
```css
#ff6347
```

## h. HSL

- HSL stands for hue, saturation, and lightness.

Format:
```css
hsl(hue, saturation, lightness)
```

- Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.
- Saturation is a percentage value, 0% means a shade of gray, and 100% is the full color.
- Lightness is also a percentage, 0% is black, 50% is neither light or dark, 100% is white

```css
hsl(0, 100%, 50%)
```

# 6. Background

## a. Background Color

- CSS background properties:
    - background-color
    - background-image
    - background-repeat
    - background-attachment
    - background-position
    - background (shorthand property)

## b. Opacity / Transparency
- The opacity property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower value, the more transparent:
```css
div {
  background-color: green;
  /* Lower it gets - lighter it gets. */
  opacity: 0.3;
}
```

## c. Background-image

- The background-image property specifies an image to use as the background of an element.

```css
body {
  background-image: url("paper.gif");
}
```

## d. Background Image Repeat


1. Repeat
```css
body {
  background-image: url("gradient_bg.png");
  background-repeat: repeat-x;

}
```
2. No Repeat
```css
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
}
```

3. Background position
```css
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
```

## e. Background-attachment

- The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page):
```css
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
}
```

# 7. Borders

border styles available:
- dotted - Defines a dotted border
- dashed - Defines a dashed border
- solid - Defines a solid border
- double - Defines a double border
- groove - Defines a 3D grooved border. The effect depends on the - border-color value
- ridge - Defines a 3D ridged border. The effect depends on the border-color - value
- inset - Defines a 3D inset border. The effect depends on the border-color - value
- outset - Defines a 3D outset border. The effect depends on the - border-color value
- none - Defines no border
- hidden - Defines a hidden border

```css
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}
```

## a. Border Width

- The border-width property specifies the width of the four borders.
- The width can be set as a specific size (in px, pt, cm, em, etc) 

```css
p.one {
  border-style: solid;
  border-width: 5px;
}
```

## b. Border Color

- The border-color property is used to set the color of the four borders.

- The color can be set by:

    - name - specify a color name, like "red"
    - HEX - specify a HEX value, like "#ff0000"
    - RGB - specify a RGB value, like "rgb(255,0,0)"
    - HSL - specify a HSL value, like "hsl(0, 100%, 50%)"
    - transparent

# 8. Margin

- Margins are used to create space around elements, outside of any defined borders. 
- The CSS margin properties are used to create space around elements, outside of any defined borders.

## a. Individual sides
- margin-top
- margin-right
- margin-bottom
- margin-left

```css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```

## b. Shorthand Property

- To shorten the code, it is possible to specify all the margin properties in one property.
  - margin-top
  - margin-right
  - margin-bottom
  - margin-left

1. Top - right - bottom - left
```css
/* Top - right - bottom - left*/
p {
  margin: 25px 50px 75px 100px;
}
```

2. Top and bottom - right and left
```css
p {
  margin: 25px 50px;
}
```

3. All four
```css
p {
  margin: 25px;
}
```

- Auto and inherit are possible


# 9. Padding

- The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

  - padding-top
  - padding-right
  - padding-bottom
  - padding-left

1. Individual Sides

```css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```

2. Shorthand Property

- The padding property is a shorthand property for the following individual padding properties:
  - padding-top
  - padding-right
  - padding-bottom
  - padding-left

```css
/* top - right - bottom - left*/
div {
  padding: 25px 50px 75px 100px;
}
```

*Rest of the convention is equivalent to margins. It is going in a clock-wise direction.*

# 10. Height/Width

- The height and width properties are used to set the height and width of an element.

*Possible values for height and width:*
- auto - This is default. The browser calculates the height and width
- length - Defines the height/width in px, cm etc.
- % - Defines the height/width in percent of the containing - block
- initial - Sets the height/width to its default value
- inherit - The height/width will be inherited from its parent value

1. Max-width

- The max-width property is used to set the maximum width of an element.
```css
div {
  max-width: 500px;
  height: 100px;
  background-color: powderblue;
}
```

# 11. Box Model

- All HTML elements can be considered as boxes.

 - The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. 

- It is good to be aware of this as you are trying to be as accurate as possible. 

ex: Calculating total pixels
```css
div {
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
```

- Though the width is 320px, in reality you are getting 350px as presented below:
```
320px (width)
+ 20px (left + right padding)
+ 10px (left + right border)
+ 0px (left + right margin)
= 350px
```

# 12. Outline

- An outline is a line drawn outside the element's border.

CSS has the following outline properties:

- outline-style
- outline-color
- outline-width
- outline-offset
- outline


Outline style:
- dotted - Defines a dotted outline
- dashed - Defines a dashed outline
- solid - Defines a solid outline
- double - Defines a double outline
- groove - Defines a 3D grooved outline
- ridge - Defines a 3D ridged outline
- inset - Defines a 3D inset outline
- outset - Defines a 3D outset outline
- none - Defines no outline
- hidden - Defines a hidden outline

# 13. Text

## a. Text Color

- The color property is used to set the color of the text. The color is specified by:

  - a color name - like "red"
  - a HEX value - like "#ff0000"
  - an RGB value - like "rgb(255,0,0)"

ex: Set a font color
```css
body {
  color: blue;
}

h1 {
  color: green;
}
```

## b. Text Alignment

- The text-align property is used to set the horizontal alignment of a text.
- A text can be left or right aligned, centered, or justified.

```css
h1 {
  text-align: center;
}

h2 {
  text-align: left;
}

h3 {
  text-align: right;
}
```

*Justify means that each line is stretched so that every line has equal width*

- Text Direction change
```css
p {
  direction: rtl;
  unicode-bidi: bidi-override;
}
```

## c. Text Decoration

- The text-decoration property is used to set or remove decorations from text.


1. Remove undelines from links

```css
a {
  text-decoration: none;
}
```

2. Apply decorations

```css
h2 {
  text-decoration: overline;
}

h3 {
  text-decoration: line-through;
}

h4 {
  text-decoration: underline;
}
```

## d. Text Transformation

- The text-transform property is used to specify uppercase and lowercase letters in a text.

```css
/* All uppercase, all lowercase, all capitalize (on the first letter) */
p.uppercase {
  text-transform: uppercase;
}

p.lowercase {
  text-transform: lowercase;
}

p.capitalize {
  text-transform: capitalize;
}
```

## e. Text Spacing

1. Text Indentation

- The text-indent property is used to specify the indentation of the first line of a text:

```css
p {
  text-indent: 50px;
}
```

2. Letter Spacing

- The letter-spacing property is used to specify the space between the characters in a text.

```css
h1 {
  letter-spacing: 5px;
}

h2 {
  letter-spacing: -2px;
}
```

3. Line Height

- The line-height property is used to specify the space between lines:

```css
p.small {
  line-height: 0.8;
}

p.big {
  line-height: 1.8;
}
```

4. Word Spacing

- The word-spacing property is used to specify the space between the words in a text.

```css
p.one {
  word-spacing: 10px;
}

p.two {
  word-spacing: -2px;
}
```

5. Whitespace

- The white-space property specifies how white-space inside an element is handled.

```css
p {
  white-space: nowrap;
}
```

## f. Text Shadow

- The text-shadow property adds shadow to text.

```css
/*  you only specify the horizontal shadow (2px) and the vertical shadow (2px): */
h1 {
  text-shadow: 2px 2px;
}

/* add a color (red) */
h1 {
  text-shadow: 2px 2px red;
}
/* blur effect (5px) */
h1 {
  text-shadow: 2px 2px 5px red;
}

```

# 14. Font
- Choosing the right font has a huge impact on how the readers experience a website.

- The right font can create a strong identity for your brand.

## a. Font Family

In CSS, there are five generic font families:
1. Serif fonts have a small stroke at the edges of each letter. They create a sense of formality and elegance.
2. Sans-serif fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.
3. Monospace fonts - here all the letters have the same fixed width. They create a mechanical look. 
4. Cursive fonts imitate human handwriting.
5. Fantasy fonts are decorative/playful fonts.

```css
.p1 {
  font-family: "Times New Roman", Times, serif;
}
.p2 {
  font-family: Arial, Helvetica, sans-serif;
}
.p3 {
  font-family: "Lucida Console", "Courier New", monospace;
}
```

## b. Font Web Safe

*What are WEb Safe Fonts?*
- Web safe fonts are fonts that are universally installed across all browsers and devices.

*What is Fallback Fonts?*

- Fallback Fonts are basically a "backup fonts" that backs up when the first font does not work. 

*How do you set up the backup font?*

```css
p {
font-family: Tahoma, Verdana, sans-serif;
}
```

*Commonly Used Font Fallbacks:*
- Serif Fonts -"Times New Roman", Times, serif	
- Georgia, serif	
- Garamond, serif	
- Sans-Serif Fonts - Arial, Helvetica, sans-serif	
- Tahoma, Verdana, sans-serif	
- "Trebuchet MS", Helvetica, sans-serif	
- Georgia, Verdana, sans-serif	
- Monospace Fonts - "Courier New", Courier, monospace	
- Cursive Fonts - "Brush Script MT", cursive	
- Fantasy Fonts - Copperplate, Papyrus, fantasy	

## c. Font Size

- You can set the font size in three different ways:

1. pixels - px
2. em - proportaion the to browser font
ex) 2.5 em = x 2.5 than the origianl.
3. percentage - %

ex:
```css
h1 {
  font-size: 40px;
}

h1 {
  font-size: 2.5em;
}

body {
  font-size: 100%;
}
```

*How to make this Responsive Font Size?*
- The text size can be set with a vw unit, which means the "viewport width", which means the text size will follow the size of the browser window.
```css
<h1 style="font-size:10vw">Hello World</h1>
```

## d. Font Google

- If you do not want to use any of the standard fonts in HTML, you can use Google Fonts.
- Google Fonts are free to use, and have more than 1000 fonts to choose from.

Reference url:
https://fonts.google.com/

*How do you import Google Fonts?*
```html
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
<style>
body {
  font-family: "Sofia", sans-serif;
}
</style>
</head>
```

## e. Pairing

Font Pairing Rules:

1. Complement
- Get the fonts that are similar. 
2. Use Font Superfamilies
- Pick fonts within the family that are created to work together. 
3. Contrast is King
- 
4. Choose Only One Boss
- 

## f. Font Property
- To shorten the code, it is also possible to specify all the individual font properties in one property.

- font-style
- font-variant
- font-weight
- font-size/line-height
- font-family

# 15. Icons

- The simplest way to add an icon to your HTML page, is with an icon library, such as Font Awesome.

- Add the name of the specified icon class to any inline HTML element (like <i> or <span>).

Reference URL:
https://fontawesome.com/

```css
<!DOCTYPE html>
<html>
<head>
/* Import an icon from FontAwesome website. */
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>

<i class="fas fa-cloud"></i>
<i class="fas fa-heart"></i>
<i class="fas fa-car"></i>
<i class="fas fa-file"></i>
<i class="fas fa-bars"></i>

</body>
</html>
```

# 16. Links

- With CSS, links can be styled in many different ways.

*Styling property:*
1. a:link - a normal, unvisited link.
2. a:visited - a link the user has visited
3. a:hover - a link when the user mouses over it
4. a:active - a link the moment it is clicked

```css
/* unvisited link */
a:link {
  color: red;
}
/* visited link */
a:visited {
  color: green;
}
/* mouse over link */
a:hover {
  color: hotpink;
}
/* selected link */
a:active {
  color: blue;
}
```

*How do you remove underlines from the link?*

- The text-decoration property is mostly used to remove underlines from links:
```css
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}
```

# 17. Lists

- In HTML, there are two main types of lists:

- unordered lists (`<ul>`) - the list items are marked with bullets
- ordered lists (`<ol>`) - the list items are marked with numbers or letters

```html
<!DOCTYPE html>
<html>
<head>
<style>
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
</style>
</head>
<body>

<h2>The list-style-type Property</h2>

<p>Example of unordered lists:</p>
<ul class="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<ul class="b">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>

<p>Example of ordered lists:</p>
<ol class="c">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

<ol class="d">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ol>

</body>
</html>
```

# 18. Tables

*How do you create and style a table?*

- First create a table using `<table>`, `<th>`, and `<td>` elements and add solid black border.

## a. Size

- The width and height of a table are defined by the width and height properties.


```css
table {
  width: 100%;
}

th {
  height: 70px;
}
```

## b. Alignment

- The text-align property sets the horizontal alignment (like left, right, or center) of the content in `<th>` or `<td>`.

- By deafult, the content of `<th>` elements are center-aligned and the content of `<td>` are left-aligned.

```css
td {
  text-align: center;
  height: 50px;
  vertical-align: bottom;
}
```

## c. Style

- Please check out different syles of tables
1. Table Padding
2. Horizontal Dividers
3. Hoverable Table
4. Striped Tables
5. Table Color

*Please check out different styles in the below link:*
https://www.w3schools.com/css/css_table_style.asp

## d. Responsive Table

- A responsive table will display a horizontal scroll bar if the screen is too small to display the full content:

```html
<div style="overflow-x:auto;">

<table>
... table content ...
</table>

</div>
```

# 19. Display

- The display property is the most important CSS property for controlling layout.

*Review:*
Block-level Elements:

```
<div>
<h1> - <h6>
<p>
<form>
<header>
<footer>
<section>
```
Inline Elements:

```
<span>
<a>
<img>
```

*How do you change inline to block and vice versa?*

```css
li {
  display: inline;
}
/* or */
a {
  display: block;
}

```

*How do you hide an HTML element?*
```css
h1.hidden {
  display: none;
}
h1.hidden {
  visibility: hidden;
}
```

*What is the difference between display:none and visibility:hidden?*

- display:none will not take up the space but visibility:hidden will not show but take up the space.

# 20. Max-width

- Using width, max-width and margin: auto;

- Strategies
1. Set the margin to auto.
2. width in block will be prevented from stretching.

- If you set the max-width and margin to auto, a margin will be adjusted in a small window and the window will stop growing when it passes the max-width.

# 21. Position
- The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).

- The position property specifies the type of positioning method used for an element.
- There are five different position values:
  - static
  - relative
  - fixed
  - absolute
  - sticky

- By deafult, An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:

- position: static - HTML elements are positioned static by default.
- position: relative - An element with position: relative; is positioned relative to its normal position.
- position: fixed - An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
- position: absolute - An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
- position: sticky - An element with position: sticky; is positioned based on the user's scroll position.

```css
div.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: green;
  border: 2px solid #4CAF50;
}
```

# 22. The z-index Property

- The z-index property specifies the stack order of an element.
- The higher number of z-index will show on top of all other elements.

```html
<style>
/* z-index 3 shows at the top; then z-index 2 and then z-index 1 */
.container {
  position: relative;
}

.black-box {
  position: relative;
  z-index: 1;
  border: 2px solid black;
  height: 100px;
  margin: 30px;
}

.gray-box {
  position: absolute;
  z-index: 3;
  background: lightgray;
  height: 60px;
  width: 70%;
  left: 50px;
  top: 50px;
}

.green-box {
  position: absolute;
  z-index: 2;
  background: lightgreen;
  width: 35%;
  left: 270px;
  top: -15px;
  height: 100px;
}
</style>
```


# Libraries

# Gulp

- Use Gulp to replace webpack. 

*What is Gulp?*

- Gulp is a task runner. 
- You can use gulp to compress the file so that the old browser can understand.
- Take pug, scss, modern javascript, images and github deployment and you can take all the process of converting, uploading can be done with Gulp file with less than 100 lines of code. 

# 1. Installation

*How do you install a gulp?*

```shell
npm install gulp-cli -g
npm installk gulp -D
npx -p nodetouch gulpfile.js
gulp --help
```
- Install gulp in a global packages. 

*How do you create an environment?*

```bash
mkdir supergulp
cd supergulp
```

*How do you structure your app?*

In source foler create three folders
1. src/scss
2. src/js
3. src/img

touch src/index.pug
mkdir src/partials
mkdir src/templates

Result:
src
  img
  js
  partials
  scss
  templates
  index.pug

**

*How do you start a gulp project?*
```bash
npm init
```
*All these preparation is called a scaffolding.*

# 2. Test

src/js/util

- write most recent javascript ES6, 2000
```js
export const random = max => Math.floor(Math.random() * max);

```

index.pug
```pug
extends templates/layout


block content
    img(src="img/logo.svg")
    h1 Awesome Minimalism
```

_reset.scss
```
```

- Create a common environment for developers to do.

*How do you use gulp?*

- We create a gulp file like webpack.configuration file. 
```bash
npm add gulp -D 
# devDependencies
```
gultfile.js
```
import gulp from "gulp";
```

# 3. Gulp + Babel

*How do you start gulp?*

```bash
gulp dev
# Need to put the script called dev.
```

- create .babelrc

.babelrc
```
{
  "presets": ["@babel/preset-env"]
}
```

*How do you install babel?*

```bash
# Installs two packaged at once.
npm add @babel/{register, core}
```
