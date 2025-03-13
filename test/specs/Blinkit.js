describe("order from blinkit", ()=>{
    it("ordering from blinkit",async()=>{

        const element = await $("//android.widget.EditText[@resource-id='com.grofers.customerapp:id/edittext']");
        await element.waitForDisplayed({ timeout: 8000 }); // waits for 5 seconds
        await element.click();
        await element.waitForDisplayed({ timeout: 5000 })
        await element.setValue("Carrot")
        const product=  $("//android.widget.TextView[@text='Carrot']")
        await product.waitForDisplayed({ timeout: 5000 })
        //await product.click()
        const isEnabled = await product.isEnabled();
        if (isEnabled) {
            await product.click();
        } else {
            console.log("Element is disabled, cannot click.");
        }
        const select_product=$('//android.view.View[@content-desc="Orange Carrot"]')
        await select_product.waitForDisplayed()
        await select_product.click()
        await $('//android.view.View[@content-desc="Add to cart"]').waitForDisplayed()
        await $('//android.view.View[@content-desc="Add to cart"]').click()
        const Viw_cart=("(//android.widget.TextView[@text='View cart'])[1]")
        await $(Viw_cart).waitForDisplayed({ timeout: 5000 })
        await $(Viw_cart).click()


    })
})