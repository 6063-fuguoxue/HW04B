# HW04B Notes

This assignment is to create an interactive drawing interface. The shapes I chose are lines, rectangles, and circles. The interactivity is triggered by mouse clicks. 

## Inspiration
I got inspiration from Piet Mondriaan, who is famous for his grid-based paintings containing black lines and red, blue, yellow, and black color blocks. 
<table>
  <tr>
    <td>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tableau_I%2C_by_Piet_Mondriaan.jpg/800px-Tableau_I%2C_by_Piet_Mondriaan.jpg' alt='Tableau I, 1921'>
    </td>
    <td>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/1024px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg' alt='Composition II in Red, Blue, and Yellow, 1930'>
    </td>
  </tr>
</table>

I would like to create an interactive drawing interface that mainly contains lines and rectangles. I didn't seek to remake Piet Mondriaan's artwork but to follow the abstract aesthetics. 

## Plan

I planned to create a shape set upon every click. There are three possibilities for drawing upon a click: 
- Two lines intersecting perpendicularly at the clicking location.
- Two lines intersecting perpendicularly + one rectangle at the clicking location.
- Two lines intersecting perpendicularly + one circle at the clicking location, but the circle will begin to fall off the screen once created. 

I also decided to randomize the color of these shapes. Each rectangle and circle generated will have a fill color of `'red'`, `'blue'`, or `'yellow'`. The three fill colors have an equal possibility of appearing. For the two lines generated upon every click, they will have the same stroke color: `stroke(random(0,255))`. 

Another randomized property is the size of the shape. The size of a rectangle, the diameter of a circle, and the stroke weight of a line set are all randomly selected in certain ranges of numbers. 

One thing interesting about the rectangles is their orientations. Since the two lines separate the canvas into four quadrants, the rectangles can lie in any of them. 
