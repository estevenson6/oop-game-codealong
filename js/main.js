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
        this.positionX --;
        this.domElement.style.left = this.positionX + "vw";
    }

    moveRight() {
        this.positionX ++;
        this.domElement.style.left = this.positionX + "vw";
    }
}

const player = new Player();


document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        player.moveLeft()
    }
    else if (e.key === "ArrowRight") {
        player.moveRight()
    }
})