# Overview

A website displaying men's clothing products and allowing users to add items to a shopping cart. 

# Tools

- React
- react-router-dom
- Jest

# Issues

I was confused on how to test the Products component, especially the fact that it's asynchronous due to
needing to fetch data from an API. ESlint would throw out a warning about unnecessary act(...), and hence
I had to resort to using Async RTL methods like waitFor and findBy* to solve the issue. 

When trying to simulate clicking on a link on the Nav bar to load a different component, I cannot get the userEvent
for clicking the link to work. Firing the click event does nothing and does not change the page URL. To solve this,
I realized I had to Render the BrowserRouter and the Routes used in the test (in this case, I only rendered
the Shop route and its Tops nested route), so that the Links actually know which routes the paths link to.