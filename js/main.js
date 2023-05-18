class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 30;
        this.height = 10;
        this.domElement = null;

        this.createDomElement();
    }

    createDomElement() {
        this.domElement = document.createElement("div");
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        const playerParent = document.getElementById("board");
        playerParent.appendChild(this.domElement);
    }

    moveLeft() {
        this.positionX --;
        this.domElement.style.left = this.positionX + "vw";
    }

    moveRight() {
        this.positionX ++;
        this.domElement.style.left = this.positionX + "vw";
    }
}

class Obstacle {
    constructor() {
        this.positionX = 50;
        this.positionY = 100;
        this.width = 30;
        this.height = 10; 
        this.domElement = null;

        this.createDomElement();
        
    }

    createDomElement() {

        this.domElement = document.createElement("div");

        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const playerParent = document.getElementById("board");
        playerParent.appendChild(this.domElement);
    }


    moveDown() {
        this.positionY--
        this.domElement.style.bottom = this.positionY + "vh";
}

}

const player = new Player();
const obstaclesArr = []; // will store array of instances of the class Obstacle

setInterval(() => {
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle)
}, 2000);

setInterval(() => {
obstaclesArr.forEach((obstacleInstance) => {
obstacleInstance.moveDown()
})
}, 60)

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        player.moveLeft()
    }
    else if (e.key === "ArrowRight") {
        player.moveRight()
    }
})