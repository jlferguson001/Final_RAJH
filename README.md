# README - RAJH MERN Stack Application Milestone Updated Project

## Project Created By

This application was created by Robbie Behm, Andrew Carter, Jenni Ferguson, and Hunter Estes.  We worked on this individually and in group sessions.  Our group sessions were held on  9/6, 9/8, 9/10, 9/11, 9/12 

## RAJH Frames

This application has begun to take shape on becoming an ecommerce site for glasses.  

## Update to Project

We struggled to make additional changes to the original submission to make much headway and decided to scale back on the number of components and remove redux.  

original submission https://github.com/jlferguson001/Milestone-2-Project.git

What we did:
created all CRUD routes:

1.  Get: http://localhost:4000/api/products
2.  Get: http://localhost:4000/api/products/Childrens
3.  Get: http://localhost:4000/api/products/Mens
4.  Get: http://localhost:4000/api/products/Womens
5.  Get: http://localhost:4000/api/products/631d985f8c7d4d3a6a804673
6.  Post: http://localhost:4000/api/products
7.  Delete: http://localhost:4000/api/products/631cdc0653a18b4baada9f7a
8.  Patch: http://localhost:4000/api/products/631d985f8c7d4d3a6a804674

All routes are functional with the database:  

New database created RAJH-Frames-2 on mongo dB

We replaced the cart with a product list page that includes:


1.  Creating a new product that will display in the database/application
2.  Reading the data in a table format
3.  Update , the edit button in the Product list screen takes the user to an edit form - at the time of this ReadMe file the Update Product button on the Edit 
    Form is not sending the appropriate product id - however is making a patch request as displayed in the terminal : /api/products/$%7Bid%7D PATCH 
4.  Deleting the product id select from the database/application
    When clicking on the Category of Men’s, Women’s, and Children’s we were able to only show those specific categories.

We did have an issue with displaying individual products, however, since we started over in a different format, however, that was not the main goal or focus this round.

