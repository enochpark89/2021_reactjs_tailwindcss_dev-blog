### Table of Content

- [Introduction](#python)
	- [Essentials](#essentials)
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