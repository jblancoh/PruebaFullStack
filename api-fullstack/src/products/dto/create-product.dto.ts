export class CreateProductDto {
    productID = 0;
    name = '';
    productNumber = '';
    makeFlag = false;
    finishedGoodsFlag = false;
    color = '';
    safetyStockLevel = 0;
    reorderPoint = 0;
    standardCost = 0;
    listPrice = 0;
    size = '';
    sizeUnitMeasureCode = '';
    weightUnitMeasureCode = '';
    weight = 0;
    daysToManufacture = 0;
    productLine = '';
    class = '';
    style = '';
    productSubcategoryID = 0;
    productModelID = 0;
    sellStartDate = new Date();
    sellEndDate = new Date();
    discontinuedDate = new Date();
    rowguid = '';
    modifiedDate = new Date();
}
