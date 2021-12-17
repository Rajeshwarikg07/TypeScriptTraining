var Product = /** @class */ (function () {
    //Constructor which takes only id as parameter
    function Product(productId) {
        this.productId = productId;
    }
    Object.defineProperty(Product.prototype, "Id", {
        //read property for ID
        get: function () {
            return this.productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Name", {
        get: function () {
            return this.productName;
        },
        set: function (value) {
            this.productName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Price", {
        get: function () {
            return this.unitPrice;
        },
        set: function (value) {
            this.unitPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Qty", {
        get: function () {
            return this.qty;
        },
        set: function (value) {
            this.qty = value;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.showDetails = function () {
        console.log("Product Details: Id= ".concat(this.Id, ", Name= ").concat(this.Name, ", Price=").concat(this.Price, ", Qunatity=").concat(this.Qty));
    };
    return Product;
}());
var p1 = new Product(2);
p1.Name = "Iphone";
p1.Price = 50000;
p1.Qty = 2;
p1.showDetails();
console.log(p1.Id);
