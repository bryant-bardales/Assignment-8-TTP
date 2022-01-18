# Grid Cell Manipulation using React.js
2022 Brooklyn College TTP - Assignment #8

This app is a spin on TTP: Assignment #5 and uses React.js to manage the state and colors of a grid of cells.

---
**View the app on GitHub Pages: https://bryant-bardales.github.io/Assignment-8-TTP/**

*Group members:*  
* [Bryant Bardales](https://github.com/bryant-bardales)
* [Lucy Lee](https://github.com/lucylee-412)
* [Max Yedid](https://github.com/maxyedid)

---

## Changelog
*January 17 ~ January 18, 2022:*
* Teammates [Bryant](https://github.com/bryant-bardales/Assignment-8-TTP/tree/bryant) and [Max](https://github.com/bryant-bardales/Assignment-8-TTP/tree/max-branch) created individual, working versions based on their previous group assignments. Please check out their respective branches!

* We ran into a [key prop warning](/../../issues/5) that was fixed by setting each new row / cell to the state of the count of rows / cells. Unfortunately, this interfered with the base functionality of the code, and had to be removed. We chose to keep the warning over keeping nonworking code.

* We ran into a warning where \<tr> was appearing as a direct child of \<table>. This was fixed by simply adding \<tbody> in between the \<table> tags in the parent component.
