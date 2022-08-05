### Table of Content

- [Introduction](#python)
	- [Essentials](#essentials)
    - [End of Essentials](#essentialend)
- [Library](#library)
- [Framework](#framework)
    - [Django](#django)
    - [Flask](#flask)

# Python

- Top 3 popular language. 
- Increased in demands due to Data Science and Visualization. 
- You can write server-side scripts.
- You can create a front-end and a back-end using framework such as Flask and Django.

# Essentials

*Python standard library:*
https://docs.python.org/3/library/

## 0. Print

*How do you print output message?*
```py
print("Hello world")
```

## 1. Variable

*What is variable?*
- variable is where we save data.

*How do you declare a variable?*
```py
# You don't have to state the data type in python. Python will automatically recognize the data type.

# string
a = "string"

# integer
b = 3

# boolean
c = True
d = False

# float
e = 3.23 
```

*How do I check the type of a variable?*
```py
# you can get the type by using type() function.
type(variable)
```

*How can I name variable?*

- Genearlly, there are three options

a. Camal Case
Each word, except the first, starts with a capital letter:
```py
myVariableName = "John"
```
b. Pascal Case
Each word starts with a capital letter:
```py
myVariableName = "John"
```

c. Snake Case
Each word is separated by an underscore character:
```py
my_variable_name = "John"
```

## Multiple Assignment

- Python allows you to assign values to multiple variables in one line:

```py
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)
```

*One Value to multiple variables:*
- And you can assign the same value to multiple variables in one line:

```py
x = y = z = "Orange"
print(x)
print(y)
print(z)
"""
Orange
Orange
Orange
"""
```

*Collection unpacking*
- If you have a collection of values in a list, tuple etc. Python allows you to extract the values into variables. 
- This is **called unpacking**.

```py
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)
"""
Output:
apple
banana
cherry
"""
```

## Global Variable

- Variables that are created outside of a function (as in all of the examples above) are known as **global variables**.

- Global variable can be used both inside and outside of functions.

```py
# x will be a global variable.
x = "awesome"

def myfunc():
  print("Python is " + x)

myfunc()
```

- If you create a variable with the same name inside a function, this variable will be **local**, and can only be used inside the function. 

## Global keyword

- You can create a global variable inside a function using a global keyword.

```py
def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)
# Output: Python is fantastic
```

## 1.3. Data Types
Python has the following data types built-in by default, in these categories:

Text Type:	str
Numeric Types:	int, float, complex
Sequence Types:	list, tuple, range
Mapping Type:	dict
Set Types:	set, frozenset
Boolean Type:	bool
Binary Types:	bytes, bytearray, memoryview
None Type:	NoneType

## 1.4. Numbers

int: ex. x = 1
float: ex. y = 2.8
complex: ex. z = 1j
*What is are complex numbers?*
- Complex numbers are written with a "j" as the imaginary part:
```py
x = 3+5j
y = 5j
z = -5j

print(type(x))
print(type(y))
print(type(z))
"""
Output:
<class 'complex'>
<class 'complex'>
<class 'complex'>
"""
```

# 1.5. Casting

Casting: specifying a type on to a variable. 

*How do you cast?*
- Casting in python is therefore done using constructor functions:
    1. int() - constructs an integer number from an integer literal, a float literal (by removing all decimals), or a string literal (providing the string represents a whole number)
    2. float() - constructs a float number from an integer literal, a float literal or a string literal (providing the string represents a float or an integer)
    3. str() - constructs a string from a wide variety of data types, including strings, integer literals and float literals

# 1.7. String
- A string literal to usually display text to clients.
```py
print("Hello");
```
b. Multiline Strings
```py
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)
"""
Output: 
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.
"""
```
c. String are Arrays

- Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters.
```py
a = "Hello, World!"
print(a[1])
# Output: e
```

d. Loop Through a String

```py
for x in "banana":
    print(x)
# Output: banana
```

e. String length
```py
a = "Hello, World!"
print(len(a))
# Output: 13
```

f. Check String
- To check if a certain phrase or character is present in a string, we can use the keyword in.

```py
txt = "The best things in life are free!"
print("free" in txt)
# Output: true
```

g. Check if NOT
```PY
txt = "The best things in life are free!"
print("expensive" not in txt)
# Output: true ("expensive" is not in the txt string.)
```
h. Slicing

```py
b = "Hello, World!"
# print from index 2 to 5
print(b[2:5])
# Output: llo
```
i. Slice From the Start
```py
b = "Hello, World!"
print(b[:5])
# Output: Hello
```

j. Slice To the End
```py
b = "Hello, World!"
print(b[2:])
# Output: llo, World!
```

k. Negative Indexing
```py
b = "HiNedGood"
print(b[-5:])
print(b[-5:-1])
"""
Output:
dGood
dGoo
"""

```

l. Upper Case

```py
a = "Hello, World!"
print(a.upper())
# Output: HELLO, WORLD!
```

m. Lower Case

```py
a = "Hello, World!"
print(a.lower())
# Output: hello, world!
```
n. Remove Whitespace

```py
a = " Hello, World! "
print(a.strip()) # returns "Hello, World!"
# Output: Hello, World!
# .strip() gets rid of spaces front and back. 
```
o. Replace String
```py
a = "Hello, World!"
print(a.replace("H", "J"))
# Output: Jello, World!

```
p. Split String
```py
a = "Hello, World!"
print(a.split(",")) 
# returns ['Hello', ' World!']
```


## 2. List

- Python has a sequence type called List and Tuples.
- A list is a mutable sequence, which means you can change data inside a list.

*How do you create a list with data inside?*
```py
days = ["Mon", "Tues", "Wed", "Thurs", "Fri"]
print(days)
```

*How do I get the a certain index of a list?*
```py
# Use list[] to get the index that you want.
days = ["Mon", "Tues", "Wed", "Thurs", "Fri"]
print(days[2])
# Ooutput: Wed
```
*How do you add a value to a list?*
```py
days = ["Mon", "Tues", "Wed", "Thurs", "Fri"]
days.append("Sat")
print(days)
# Output: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
```
## 3. Tuples

- Tuples are immutable sequences, which means you can't change the data inside. This uses a common sequence operation.

*How do you create tuples?*
```py
days = ("Mon", "Tues", "Wed", "Thurs")
```
*Why do you need tuples?*
- Sometimes, you do not want anybody to change the data or the sequence.

## 4. Dict

- Dictionary is like an object that holds different data types.

*How do you create a Dict?*
```py
Dict = {
    "name":"Enoch",
    "age": 32,
    "korean": True,
    "fav_food": ["Sushi", "Kimchi"]
}
```
## 5. Function

- A function is capturing some behaviors or lines of code that you want to repeat over and over.
- Python already has many functions built into it such as print(), len(), str() and type().

## 6. Your Own Function

*How do you create your own funciton?*
```py
def say_hello():
    print("hello")

# you can run as many as times as possible.
say_hello()
say_hello()
say_hello()

"""
Output:
hello
hello
hello
"""
```

## 5. Comments

*How do you create a comment?*
```py
#This is a comment
print("Hello, World!")
```
*How do you create a multiline comments?*
```py
#This is a comment
#written in
#more than just one line
print("Hello, World!")
```

*How do you create a bulk comment?*
```py
"""
This is a comment
written in
more than just one line
"""
```
## 6. If...else
*How to write if...else in python?*
```py

```


# essentialend


# Library

1. Plotly:
    - build graphics of data.
    - you can install Dash for a dashboard.
```py
pip install dash==1.14.0
```
2. Panda: 
    - Clean large datasets.
    - most used library that allows you to analyze and manipulate data.
```py
pip install pandas
```

3. flake8:
```py
pip install -U flake8
```

4. black:
```py
pip install -U black
```

5. jupyterlab
- allows users to use browser to code python.

```py
pip install jupyterlab
```

6. jupyterthemes
1. Create virtual environment. 
- In many cases, in the development environment, you have to create a virtual environment to test your code. 
- use venv in python to create a virtual environment in the current directory. 
```py
python -m venv .
# create a virtual environment in a current directory.
```

2. Open jupyter notebook

```py
# After installation,
jupyter-notebook
```

3. 

# Library
 

1. Dash: allows python to be a react application.
2. Plotly: you make python code into a graphics.

*Thanks to dash, you can post the graph to the websites.*

# Framework:

# Django

# Flask

# Introduction

## 1. Quick Start
*How you start a Flask project?*
- Start a server
- Create a route

default.py
```py
from flask import Flask

app = Flask("QuickProject")

# Route to home
@app.route("/")
def home();
    return "Hello! Welcome to the QuickProject"

# Route to contact
@app.route("/contact")
def potato():
    return "Contact"

# Start a webserver
app.run(host="0.0.0.0")
```
# Essentials

## 0. Virtual Environment
- You can use venv or virtualenv python library to create a virtual environment. 
*Please refer to the document below for details:*
https://flask.palletsprojects.com/en/2.0.x/installation/

Steps:
1. Install venv
2. Activate venv
3. Start on a project

## 1. Dynamic URL

*What is dynamic URL?*
- An URL that changes.

*How do you create a dynamic URL?*
```py
# Assume that default.py is imported

# <> will accept a dynamic url.
@app.route("/<username>")
def potato(username):
    return f"The username is{username}"

# Output: The username is <whatever username that the user put on the URL>
```
## 2. Templates

- Templates are to show user the page in a route.

*How do you create a template for a route?*
```py

```
## 3. Deploy in Heroku
- You can deploy the Flask app with Heroku for a prototype view. 
*Documentation:*
https://devcenter.heroku.com/articles/getting-started-with-python

Steps:
1. Activiate venv
2. Install Libararies
3. Install Heroku
```bash
npm install -g heroku
```
4. Create requirement.txt
5. Install Gunicore (Must)
*Without Gunicore, heroku won't display on the website.*
6. Deploy using Heroku CLI

## 1. Deploy in Heroku


## 1. Job Scraper Project

- JobScrapper: 

# Essentials

1. Learn Python
2. Learn CSS, HTML, JavaScript basics

*What are the difference between the Flask and Django?*

- Frameworks like Flask and Pyramid is for a minimal functional projects. 
    *Benefits:*
    - build server quickly.
    - require re-invent the wheel. (bottom-top approach.)
    *Drawback:*
    - Takes a long time to create everything from a scratch.
        - User Authentication
        - Change Password
        - Log in/Log out
        - Create your own admin panel.

*Is it possible to build Full-Stack with Django only?*

- Yes. Using Django template, you can build both front and back end. 
- However, when you need a strong user interactivity, you need ReactJS.


# 1. Pipenv

*How do you install pipenv?*

*Please refer to the documentation below:*
https://pipenv.pypa.io/en/latest/