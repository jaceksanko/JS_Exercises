function Phone(brand, price, color, screenSize, system, camera) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.screenSize = screenSize;
    this.system = system;
    this.camera = camera;
}

Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + ", screen size is" + this.screenSize + ", system is " + this.system + ", camera is " + this.camera + ".");
};

/* var body = document.querySelectorAll('body');
console.log(body); */

Phone.prototype.showInfo = function () {
    var createParagraph = document.createElement("P");
    var createTextParagraph = document.createTextNode("The phone brand is " +
    this.brand + ", color is " + this.color + ", the price is " + this.price + ", screen size is" + this.screenSize + ", system is " + this.system + ", camera is " + this.camera + ".");
    createParagraph.appendChild(createTextParagraph);
    document.body.appendChild(createParagraph);
};

Phone.prototype.priceCategory = function () {
    var priceSelect = "";
    if (this.price <= 1000) {
        priceSelect = (this.brand + " is cheap phone");
    }
    else if (this.price > 1000 && this.price <= 2000) {
        priceSelect = (this.brand + " is middle price phone");
    }
    else {
        priceSelect = (this.brand + " is expensive phone");
    }
    var createParagraph = document.createElement("P");
    var createTextParagraph = document.createTextNode(priceSelect);
    createParagraph.appendChild(createTextParagraph);
    document.body.appendChild(createParagraph);
}

var samsungGalaxyS6 = new Phone("Samsung", 2000, "black", 6, "Android", "16 Mp");
var iPhone6S = new Phone("Apple", 3000, "red", 6, "iOS", "15 Mp");
var OnePlusOne = new Phone("One Plus", 800, "green", 5, "Android", "12 Mp");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();

samsungGalaxyS6.showInfo();
samsungGalaxyS6.priceCategory();
iPhone6S.showInfo();
iPhone6S.priceCategory();
OnePlusOne.showInfo();
OnePlusOne.priceCategory();