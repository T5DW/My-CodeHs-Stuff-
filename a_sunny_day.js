function main() {
    addsky();
    addsun();
    addgrass();
    addtext();
}
function addsky() {
    let sky = new Rectangle(499,499)
    sky.setColor("Blue")// sets color to Blue
    sky.setPosition(1,1)
    add(sky) // adds the sky to the canvas!
}

function addsun() {
    let sun = new Circle(30)
    sun.setColor("Yellow") // sets color to Yellow
    sun.setPosition(368,33)
    add(sun) // adds the sun 
}

function addgrass() {
    let grass = new Rectangle(1000,1000)
    grass.setColor("Green")// sets color to Green
    grass.setPosition(1,400)
    add(grass) // adds grass
}

function addtext() {
    let word1 = new Text("A Sunny Day - Wyatt Stark")
    word1.setPosition(18,33)
    add(word1) // adds text
}
main();
