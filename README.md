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