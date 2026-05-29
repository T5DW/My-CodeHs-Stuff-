const sky_width = 499
const sky_height = 499
const xbtm= 200
const ybtm= 370
const wbtm= 200
const fbtm= 499
const btm_height = 10
function main() {
    addsky();
    addbottom();
    addgrass();
    addtop();
}

function addsky() {
    let sky = new Rectangle(sky_width, sky_height );
    sky.setColor("Blue");
    sky.setPosition(1,1);
    add(sky);
}

function addbottom() {
    let bottom = new Line(xbtm, ybtm, wbtm, fbtm,  )
    bottom.setLineWidth(10)
    bottom.setColor("Green");
    add(bottom);
}

function addgrass() {
    let grass = new Rectangle(400,200);
    grass.setColor("Green");
    grass.setPosition(1,440);
    add(grass);
}

function addtop() {
    let top = new Circle(40);
    top.setColor("Pink");
    top.setPosition(200,345);
    add(top);
    
}
main();
