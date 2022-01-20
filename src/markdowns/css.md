# CSS

- Aiming for a HackerRank.

# 0. Introduction

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

# 8. 