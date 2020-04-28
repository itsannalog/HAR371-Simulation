# HAR371-Simulation
Week 10 - Snowflakes


## Motivation
I feel like we haven't had enough snowflakes in Hoboken this year, so I wanted to do my simulation project on them. I've done simulation projects for other biological patterns before, but I've never done snowflakes. There's over 100 different classifications of flakes (or over 200 depending on whose rules you want to go by), but in this project I've only modeled 3 of them: Stellar Plates, Stellar Dendrites, and Fernlike Stellar Dendrites. These three to me are the most interesting to look at. 

## How to Use it
Customize your color pallette on the top right, generate snowflakes using the buttons on the bottom left. To save your snowflake creation, press the Save As JPG button in the bottom right. 

## How it Works
These snowflakes are generated in segments- the center, middle, and tips. Each flake type has a different style of generation for each of these segments. Using P5.js, the snowflake is drawn by generating random thicknesses, dimensions, etc, then drawing one "leg", then using transforms to rotate the canvas and draw a total of 6 legs.
