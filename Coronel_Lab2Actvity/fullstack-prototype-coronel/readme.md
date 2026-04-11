1. Selectors

Selectors decide which HTML elements your styles apply to.

Example:

/* element selector */
p {
  color: blue;
}

/* class selector */
.button {
  background-color: green;
}

/* ID selector */
#header {
  font-size: 24px;
}

Important points:

Class selectors (.class) are reusable.
ID selectors (#id) are unique.
Combining selectors allows precise targeting.

2. Box Model

Every element is a box in CSS. The box model includes:

Content – the text or image inside
Padding – space inside the box, around the content
Border – the line around padding
Margin – space outside the box

Example:

div {
  width: 100px;
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
}

3. Positioning

Controls where elements appear. The 5 types we discussed earlier:

static – normal flow
relative – move relative to normal position
absolute – position anywhere inside a relative parent
fixed – stays on screen when scrolling
sticky – scrolls then sticks

Positioning is critical for dropdowns, modals, floating buttons, etc.

4. Display & Visibility

display → how an element behaves in layout (block, inline, inline-block, flex, grid, none)
visibility → whether an element is visible or hidden (visible, hidden)

ex. 
.hidden {
  display: none; /* element is gone, layout adjusts */
}

5. Flexbox & Grid (Layout)

Modern layout tools:

Flexbox – for 1D layouts (row or column)
Grid – for 2D layouts (rows + columns)

Example Flexbox:

.nav {
  display: flex;
  justify-content: space-between; /* spread items */
  align-items: center;           /* vertical align */
}

6. Colors & Fonts
color → text color
background-color → background
font-family, font-size, font-weight → text styling

Example:

p {
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 16px;
}

7. Hover & Interaction
:hover, :active, :focus pseudo-classes for interactivity

ex. 

a:hover {
  color: red;
}

8. Z-index & Layering
Controls which element appears on top of others
Only works on positioned elements (relative, absolute, fixed, sticky)

ex.

.modal {
  position: fixed;
  z-index: 1000; /* appears above everything else */
}

*****SUMMARY

| Concept            | Why it matters                               |
| ------------------ | -------------------------------------------- |
| Selectors          | Target elements accurately                   |
| Box model          | Control spacing, padding, borders, margin    |
| Positioning        | Place elements exactly where you want        |
| Display/Visibility | Show/hide elements, control layout           |
| Flex/Grid          | Modern layouts, responsive designs           |
| Colors & Fonts     | Style text and backgrounds                   |
| Pseudo-classes     | Interactive effects like hover               |
| Z-index            | Control layers for popups, dropdowns, modals |
