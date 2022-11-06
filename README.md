# Overview

A website displaying men's clothing products and allowing users to add items to a shopping cart. 

# Tools

- React
- React Router DOM
- Jest
- React Testing Library
- CSS

# Issues

This was the first project where I had to make extensive use of mocking. Since I'm fetching from an API, I didn't want to wait for the fetch to resolve for every test. Hence, I mocked the fetch function to make it return the same object right away. 

I was confused on how to test the Products component, especially the fact that it's asynchronous due to
needing to fetch data from an API. ESlint would throw out a warning about unnecessary act(...), and hence
I had to resort to using Async RTL methods like waitFor and findBy* to solve the issue. 

When trying to simulate clicking on a link on the Nav bar to load a different component, I cannot get the userEvent
for clicking the link to work. Firing the click event does nothing and does not change the page URL. To solve this,
I realized I had to Render the BrowserRouter and the Routes used in the test (in this case, I only rendered
the Shop route and its Tops nested route), so that the Links actually know which routes the paths link to.

I ran into issues setting state with setState without accidentally mutating the state directly. This issue involved
the state being an array of objects. I used the spread operator to create a new array, but while the array is new,
the object references inside it are not and these references still point to the same objects. Hence, any
modification I make in the new array's objects also modify the old array's objects, leading to mutation of the state
directly. I had to instead use map() and then remember to use the spread operator on each object as well to create
a new object. 