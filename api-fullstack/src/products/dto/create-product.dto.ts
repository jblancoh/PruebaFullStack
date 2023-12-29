export class CreateProductDto {
    ProductID = 0;
    Name = '';
    ProductNumber = '';
    MakeFlag = false;
    FinishedGoodsFlag = false;
    Color = '';
    SafetyStockLevel = 0;
    ReorderPoint = 0;
    StandardCost = 0;
    ListPrice = 0;
    Size = '';
    SizeUnitMeasureCode = '';
    WeightUnitMeasureCode = '';
    Weight = 0;
    DaysToManufacture = 0;
    ProductLine = '';
    Class = '';
    Style = '';
    ProductSubcategoryID = 0;
    ProductModelID = 0;
    SellStartDate = new Date();
    DiscontinuedDate = new Date();
    rowguid = '';
    ModifiedDate = new Date();
}
