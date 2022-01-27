# SQL

- SQL is a standard language for storing, manipulating and retrieving data in databases.

```sql
SELECT * FROM Customers;
```

- Select all data from Customers db.

# Essentials

# 1. Intro

*What is SQL?*
- SQL is a standard language for accessing and manipulating databases.
- SQL stands for Structured Query Language
- SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987

*What can SQL do?*

- SQL can 
    - execute queries against a database
    - insert records in a database
    - update/delete records from a database
    - create new databases and tables.
    - set permissions on tables, procedures, and views.

*How do I use SQL on your website?*

- Use RDBMS database program such as MS Access, SQL Server, MySQL
- Use a server-side scripting such as PHP or ASP
- Use SQL to get the data you want. 
- Use HTML/CSS to style the page.

*What is RDBMS?*

- RDBMS stands for Relational Database Management System.
- RDBMS is the basis for SQL, for all modern database systems such as MS SQL server, IBM DB2, Oracle, MySQL, and Microsoft Access. 
- The data in RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of columns and rows.

*How database is structured?*

- RDBMS > db objects > tables > fields 

- RDBMS: stands for Relational Database Management System. It is the basis for SQL, and for all modern database systems such as MS SQL Server, IBM DB2, Oracle, MySQL, and Microsoft Access.
*Tables:* 
- The data in RDBMS is stored in a database objects called tables.
- A colleciton of related data entries and its consists of columns and rows. 
*Fields*
- Fields are column headers such as CustomerID, CustomerName, ContactName, Address, City, PostalCode.
- a column in a table that is designed to maintain specific information about every record in the table. 
*Record*
- each individual entry that exists in a table.
*Column*
- a vertical entity in a table that contains all information asscoiated with a field. (exluding fields.)

# 2. Syntax

- A database most often contains one or more tables. Each table is identified by a name (e.g. "Customers" or "Orders"). Tables contain records (rows) with data.

*SQL keywords are NOT case sensitive: select is the same as SELECT*

List of most important SQL commands:
- SELECT - extracts data from a database
- UPDATE - updates data in a database
- DELETE - deletes data from a database
- INSERT INTO - inserts new data into a database
- CREATE DATABASE - creates a new database
- ALTER DATABASE - modifies a database
- CREATE TABLE - creates a new table
- ALTER TABLE - modifies a table
- DROP TABLE - deletes a table
- CREATE INDEX - creates an index (search key)
- DROP INDEX - deletes an index

# 3. Select

- The SELECT statement is used to select data from a database.

Format:
```SQL
SELECT column1, column2, ...
FROM table_name;
```

ex: select all 
```sql
-- Select all data from a table_name table
SELECT * FROM table_name;
```

# 4. Select Distinct

- The SELECT DISTINCT statement is used to return only distinct (different) values.

- It will only retrieve one column that you want to get.

ex 1: Get one column
```sql
-- select only country field from a table called Customers.
SELECT DISTINCT Country FROM Customers;
```

ex 2: Count one column
```sql
-- select only country field from a Customers table and count each row. 
SELECT COUNT(DISTINCT Country) FROM Customers;
```

ex 3: Count and show as a different name
```sql
-- count all data from Customers Table > Country and display field as DistinctCountries
SELECT Count(*) AS DistinctCountries
FROM (SELECT DISTINCT Country FROM Customers);
```

# 5. Where Clause

- The `WHERE` caluse is used to filter records. 

Format:
```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```
ex:
```sql
-- Select all data from Customers table where country value is 'Mexico'
SELECT * FROM Customers
WHERE Country='Mexico';
```

# 6. AND, OR and NOT Operators

- The WHERE clause can be combined with AND, OR, and NOT operators.
    - The AND and OR operators are used to filter records based on more than one condition:
    - The NOT operator displays a record if the condition(s) is NOT TRUE.

ex 1: AND 
```sql
SELECT * FROM Customers
WHERE Country='Germany' AND City='Berlin';
```

ex 2: OR
```sql
SELECT * FROM Customers
WHERE City='Berlin' OR City='München';
```

ex 3: NOT
```sql
SELECT * FROM Customers
WHERE NOT Country='Germany';
```

ex 4: Combinations

```sql
-- WHERE, AND, OR
SELECT * FROM Customers
WHERE Country='Germany' AND (City='Berlin' OR City='München');
-- WHERE NOT, AND NOT
SELECT * FROM Customers
WHERE NOT Country='Germany' AND NOT Country='USA';
```

# 7. Order By

- The ORDER BY keyword is used to sort the result-set in ascending or descending order.
- The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.



Format:
```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

ex 1: ORDER BY
```sql
SELECT * FROM Customers
ORDER BY Country;
```

ex 2: ORDER BY DESC
```sql
-- Order by Country field in decreasing order.
SELECT * FROM Customers
ORDER BY Country DESC;
```

ex 3: Use multiple fields to order.
```sql
-- Order by Country field first and then order by CustomerName field.
SELECT * FROM Customers
ORDER BY Country, CustomerName;
```

- *Descending order is a reverse of ascending order which is revered alphabetical.*

# 8. Insert Into

- The INSERT INTO statement is used to insert new records in a table.

*How do you use INSERT INTO?*

- There are two ways to insert values.

1. Specify both the column names and the values to be inserted:
Format:
```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

ex:
```sql
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
```

2. If you want to insert for all columns, you do not need to specify the fields.
Format:
```sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```
*This way is not recommended as you have to create the ID manually also.*

# 9. Null values

- A field with a NULL value is a field with no value.
- If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a NULL value.

*How do you identify NULL values?*

- You can use IS NOT NULL OR IS NULL TO check whether the value is NULL or not.
```sql
-- Select data that is not null
SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;

-- Select data that is null
SELECT column_names
FROM table_name
WHERE column_name IS NULL;
```

# 10. Update

- The UPDATE statement is used to modify the existing records in a table.

*How do you update the existing records in the database?*

```sql
-- update Customers Table by setting Constact Name field into 'Alfred Schmidt' and City into 'Frankfurt' where CustomerID is 1.
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;
```

*How do you update multiple records?*
- If you do not specify the unique ID, many records that meet the criteria will be updated.
```sql
-- update Customer Table by setting ALL ContactName into 'Juan' where Country is 'Mexico'.
UPDATE Customers
SET ContactName='Juan'
WHERE Country='Mexico';
```

*WARNING: Be careful when updating records. If you omit the WHERE clause, ALL records will be updated!*

# 11. Delete

- The DELETE statement is used to delete existing records in a table.

ex 1: Delete One record

```sql
-- Delete from Customer Table, a record where CustomerName is 'Alfreds Futterkiste'
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
```

ex 2: Delete All Records
```sql
-- Delete all records from the table called table_name
DELETE FROM table_name;
```