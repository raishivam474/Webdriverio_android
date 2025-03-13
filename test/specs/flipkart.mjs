import searchforProduct from "../PageObjects/Flipkart/addtocart.mjs"
describe("Verifying the product journey in flipkart",()=>{
    const ProductName="Apple iPhone 15 (Black, 128 GB)"
    it("Verify that Flipkart is open",async()=>{
        await driver.pause(3000)
    })
    
    
    
    
    
   it(" Search the Product",async()=>{
        await searchforProduct.clickOnHomeSearch()
    })
    it("Click on Main search and search for Product",async()=>{
        await searchforProduct.SearchProduct(ProductName)
        await searchforProduct.selectProduct(ProductName)
    })
    it("click on add to cart",async()=>{
        await searchforProduct.ClickonAddtoCart()
    })
    it("Verify product in cart",async()=>{
        await searchforProduct.Verifyproduct_INcart(ProductName)
        await searchforProduct.verify(ProductName)
        
    })
    it("Logout",async()=>{
        await searchforProduct.FlipkartLogout()
    })
    

})