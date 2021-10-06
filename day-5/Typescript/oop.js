"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Department = /** @class */ (function () {
    function Department(id, name) {
        this.departmentId = id;
        this.departmentName = name;
    }
    Department.prototype.getTheDetailsOfTheDeparement = function () {
        return "The Department Id is " + this.departmentId + " and department Name is " + this.departmentName;
    };
    return Department;
}());
var dp1 = new Department(121, 'Department');
console.log(dp1.getTheDetailsOfTheDeparement());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reportList = [];
        return _this;
    }
    ITDepartment.prototype.addTheReport = function (report) {
        this.reportList.push(report);
    };
    ITDepartment.prototype.getAllTheReports = function () {
        return this.reportList;
    };
    return ITDepartment;
}(Department));
var itDep1 = new ITDepartment(344, 'IT Department');
console.log(itDep1);
itDep1.addTheReport('Laptop is not working properly');
var allReports = itDep1.getAllTheReports();
console.log(allReports);
var ProductsPage = /** @class */ (function () {
    function ProductsPage(name, price, category) {
        this.ListOfProducts = [];
        this.productName = name;
        this.productPrice = price;
        this.category = category;
    }
    ProductsPage.prototype.addToCart = function (productName, productPrice) {
        this.ListOfProducts.push({ productName: productName, productPrice: productPrice });
    };
    ;
    ProductsPage.prototype.getAllTheProducts = function () {
        return this.ListOfProducts;
    };
    return ProductsPage;
}());
var product1 = new ProductsPage('Apple Iphone 12pro', 120000, 'Mobiles');
product1.addToCart('Samsung s8', 75000);
product1.addToCart('One Plus 9', 90000);
var allProducts = product1.getAllTheProducts();
console.log(allProducts);
