class Product
{
    private productId:number;
    private productName:string;
    private unitPrice:number;
    private qty:number;

    //Constructor which takes only id as parameter
    constructor (productId:number)
    {
        this.productId=productId;
    }
    //read property for ID
    public get Id():number
    {
        return this.productId;
    }
    
    //get set property for Name
    public get Name() : string {
        return this.productName;
    }
    public set Name(value : string) {
        this.productName = value;
    }

    //get set for Price
    public get Price() : number {
        return this.unitPrice;
    }
    public set Price(value : number) {
        this.unitPrice = value;
    }

    //get set for Qunatity
    public get Qty() : number {
        return this.qty;
    }
    public set Qty(value : number) {
        this.qty = value;
    }

    public showDetails():void
    {
        console.log(`Product Details: Id= ${this.Id}, Name= ${this.Name}, Price=${this.Price}, Qunatity=${this.Qty}`);

    }
}

let p1:Product = new Product(2);
p1.Name="Iphone";
p1.Price=50000;
p1.Qty=2;
p1.showDetails();
console.log(p1.Id);