var time = 15000;
var clicks = 0;
var highClicks = 0;


document.getElementById("Button").onclick = function plusOne()
{
    clicks++;
    document.getElementById("Clicks").innerHTML = clicks;
    console.log(clicks)
}

function countDown()
{
    time--
}

if (clicks === 1)
{
    console.log("click")
}

if (clicks > localStorage.getItem("highscore"))
{
    localStorage.setItem("highscore", score);
}

if (clicks >= 1)
{
    while (time > 0)
    {

    }
}