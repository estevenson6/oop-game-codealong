class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 10;
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
        if (this.positionX === 0) {
            return;
        }
        else {
        this.positionX --;
        this.domElement.style.left = this.positionX + "vw";
        }
    }

    moveRight() {
        if (this.positionX === 100 - player.width) {
            return;
        }
        else {
        this.positionX ++;
        this.domElement.style.left = this.positionX + "vw";
        }
    }
}
function generateRandomNumber(min, max) {
    return (Math.random() * (max - min + 1)) + min;
}
class Obstacle {
    constructor() {
        this.positionX = generateRandomNumber(0, 70); // change to be minus width
        this.positionY = 100;
        this.width = 10;
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

        if (
            obstacleInstance.positionX < player.positionX + player.width &&
            obstacleInstance.positionX + obstacleInstance.width > player.positionX &&
            obstacleInstance.positionY < player.positionY + player.height &&
            obstacleInstance.height + obstacleInstance.positionY > player.positionY) {
            console.log("Well done! You set it on fire!")
        }

        if (obstacleInstance.positionY < 0 - obstacleInstance.height) {
            obstacleInstance.domElement.remove()
            obstaclesArr.shift(obstacleInstance); 
        }

    });
}, 60)



document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        player.moveLeft()
    }
    else if (e.key === "ArrowRight") {
        player.moveRight()
    }
})

