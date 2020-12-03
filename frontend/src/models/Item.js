export class Item {
    constructor(Distributorname, name, quantity, price, location, imgurl, id = 0) {
        this.distributorName = Distributorname;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.location = location;
        this.imgurl = imgurl;
        this.id = id;
    }
}