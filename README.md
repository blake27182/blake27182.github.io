# Feeling-Sick
a website that makes you feel better!

One of my biggest problems in this project was the random generator. There was some problem that was causing the same sequence of pictures to show up on each restart. I fixed this by using a different random method. I would like to think I invented this method because I did no research on it beforehand, but alas, it is a well known method. I used the milliseconds from the Date class at the time of button click to seed my random number. I divide that number by 1000/the number of possible choices, then round the number down. This effecctively turns the range 0 to 1000 into a range of 0 to the number of choices. This could be used in so many areas. After I figured this out, I learned that there is a cybersecurity company that uses a live video feed of a wall of lavalamps to generate random numbers. I think this is really cool because it uses the natural entropy of the world to simplify a potentially incredibly complex problem.
