# CSS

- Aiming for a HackerRank.

# CSS Introduction

*What is CSS?*

- CSS stands for Cascading Style Sheets
- CSS describes how HTML elements are to be displayed on screen, paper, or in other media

# Essentials

# 1. CSS Syntax

- Each declaration includes a CSS property name and a value, separated by a colon.
```css
p {
  color: red;
  text-align: center;
}
```

# 2. CSS Selectors

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