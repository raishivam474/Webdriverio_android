describe("Search for an app in mobile",()=>{

it("try", async()=>{
    const App_Name='bigbasket'
    const app="(//android.widget.TextView[@text='"+App_Name+"'])[1]"
    
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,7)')
    //opening App
    await $(app).click()
    //bigbasket
    await driver.pause(5000)
    
    await $('//android.view.View[@content-desc="Search 20000+ products"]/android.widget.EditText').click()
    await driver.pause(3000)
 
    await $('//android.view.View[@content-desc="Search 20000+ products"]/android.widget.EditText').setValue('Carrot')
    await driver.pressKeyCode(66);
    await $('(//android.view.View[@content-desc="​f​r​e​s​h​o​!​ Carrot - Orange (Loose)"])[2]').click()
    await driver.pause(3000)
     await $('//android.widget.Button[@content-desc="Add"]').click()
     await driver.pause(3000)
    await $("//android.view.View[@resource-id='basketButton']").click()





})

})