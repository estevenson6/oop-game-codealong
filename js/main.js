class Game {
    constructor() {
        this.player = null;
        this.obstaclesArr = [];
    }

    start() { 
        this.player = new Player;
        this.attachEventListeners();
        
        setInterval(() => {
            const newObstacle = new Obstacle();
            this.obstaclesArr.push(newObstacle)
        }, 2000);

        setInterval(() => {
            this.obstaclesArr.forEach((obstacleInstance) => {
                obstacleInstance.moveDown()
                this.detectCollision(obstacleInstance)
                this.removeObstacle(obstacleInstance)
            });
        }, 60)
        }

    detectCollision(obstacleInstance) {
        if (
            obstacleInstance.positionX < this.player.positionX + this.player.width &&
            obstacleInstance.positionX + obstacleInstance.width > this.player.positionX &&
            obstacleInstance.positionY < this.player.positionY + this.player.height &&
            obstacleInstance.height + obstacleInstance.positionY > this.player.positionY) {
            console.log("Well done! You set it on fire!")
            obstacleInstance.domElement.remove()
        }
        
    }

    removeObstacle(obstacleInstance) {
        if (obstacleInstance.positionY < 0 - obstacleInstance.height) {
            obstacleInstance.domElement.remove()
            this.obstaclesArr.shift(obstacleInstance);
        }
    }
    attachEventListeners() {
        {
            document.addEventListener("keydown", (e) => {
                if (e.key === "ArrowLeft") {
                    game.player.moveLeft()
                }
                else if (e.key === "ArrowRight") {
                    game.player.moveRight()
                }
            })
        }
    }
}

class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 10;
        this.height = 13;
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
            this.positionX--;
            this.domElement.style.left = this.positionX + "vw";
        }
    }

    moveRight() {
        if (this.positionX === 100 - this.width) {
            return;
        }
        else {
            this.positionX++;
            this.domElement.style.left = this.positionX + "vw";
        }
    }
}


class Obstacle {
    constructor() {
        this.positionX = this.generateRandomNumber(0, 70); // change to be minus width
        this.positionY = 100;
        this.width = 10;
        this.height = 10;
        this.domElement = null;

        this.createDomElement();
    }

    generateRandomNumber(min, max) {
        return (Math.random() * (max - min + 1)) + min;
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


const game = new Game;
game.start()

