export {};
class Department {
    protected departmentId : number;
    departmentName : string;
    constructor(id:number,name:string){
        this.departmentId = id;
        this.departmentName = name;
    }

    getTheDetailsOfTheDeparement():string{

        return `The Department Id is ${this.departmentId} and department Name is ${this.departmentName}`

    }
}

const dp1 = new Department(121,'Department')

console.log(dp1.getTheDetailsOfTheDeparement());

class ITDepartment extends Department{
    private reportList : string[] = [];

    addTheReport(report:string):void{
        this.reportList.push(report)
    }
    getAllTheReports():string[]{
        return this.reportList;
    }
}

const itDep1 = new ITDepartment(344,'IT Department');
console.log(itDep1);
itDep1.addTheReport('Laptop is not working properly');
const allReports = itDep1.getAllTheReports();
console.log(allReports);

interface Product{
    productName : string;
    productPrice : number;
    category : string;
    addToCart : Function;
    ListOfProducts : string[];

}

class ProductsPage implements Product{
    productName: string;
    productPrice: number;
    category: string;
    ListOfProducts: any = [];
    
    constructor(name,price,category){
       this.productName = name;
       this.productPrice = price;
       this.category =category;
    }
    addToCart(productName:string,productPrice:number):void{
       
        this.ListOfProducts.push({productName,productPrice})
    };
    getAllTheProducts(){
        return this.ListOfProducts;
    }

}

const product1 = new ProductsPage('Apple Iphone 12pro',120000,'Mobiles');
product1.addToCart('Samsung s8',75000);
product1.addToCart('One Plus 9',90000);
const allProducts = product1.getAllTheProducts();
console.log(allProducts);
