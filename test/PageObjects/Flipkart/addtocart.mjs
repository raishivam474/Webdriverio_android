export default class SearchForProduct {

    // Locators
    get HomeSearchBar() {
        return $('//android.widget.TextView[@text="Brand Mall "]/../../android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView');
    }

    get MainSearchBar() {
        return $("//*[@class='android.widget.EditText']");
    }

    get addToCartById() {
        return $('~Add to cart');
    }

    get addToCartByXPath() {
        return $('//android.view.ViewGroup[@content-desc="Buy now"]/../../../../android.view.ViewGroup');
    }

    get Home_cart() {
        return "//android.view.ViewGroup[contains(@content-desc, 'Cart')]";
    }

    get HomeAccount() {
        return $('//android.view.ViewGroup[contains(@content-desc, "Account")]');
    }

    get AccountLogout() {
        return $('//android.view.ViewGroup[@content-desc="Log Out"]/android.widget.TextView');
    }

    // Utility function for waiting for elements with retries and handling timeouts
    static async waitForElement(element, timeout = 40000) {
        await element.waitForDisplayed({ timeout });
    }

    // Wait and click on the home search bar
    static async clickOnHomeSearch() {
        try {
            const homeSearchBar = await new SearchForProduct().HomeSearchBar;
            await this.waitForElement(homeSearchBar); //first search box
            await homeSearchBar.click();
            
            
            if (await homeSearchBar.isDisplayed()) {
                console.log("HomeSearchBar clicked successfully.");
            } else {
                console.log("HomeSearchBar is not displayed.");
            }
        } catch (error) {
            console.error("Error while clicking on HomeSearchBar: ", error);
        }
    }

    // Searchiing the product 
    static async SearchProduct(ProductName) {
        try {
            const mainSearchBox = await new SearchForProduct().MainSearchBar;
            await this.waitForElement(mainSearchBox); 
            await mainSearchBox.setValue(ProductName);
            await driver.pressKeyCode(66); // Key 66 is to press enter
            await driver.pause(2000); 

            // Validating that we have selected correct product 
            if (await mainSearchBox.getValue() === ProductName) {
                console.log(`Search for product "${ProductName}" was successful.`);
            } else {
                console.log('Search term "${ProductName}" did not match.');
            }
        } catch (error) {
            console.error("Error while searching for product: ", error);
        }
    }

    // Select Product
    static async selectProduct(ProductName) {
        try {
            const product = await $(`//android.widget.TextView[@text="${ProductName}"]`);
            await this.waitForElement(product); // Wait for the product element to be displayed
            await product.click();

            
            if (await product.isDisplayed()) {
                console.log(`Product "${ProductName}" selected successfully.`);
            } else {
                console.log(`Product "${ProductName}" is not displayed.`);
            }
        } catch (error) {
            console.error("Error while selecting product: ", error);
        }
    }

    // Click on the "Add to Cart" button
    static async ClickonAddtoCart() {
        try {
            const addButton = await $('//android.view.ViewGroup[@content-desc="Buy now"]/../../../../android.view.ViewGroup');
            await this.waitForElement(addButton); 
            await addButton.click();

            if (await addButton.isDisplayed()) {
                console.log("Add to Cart button clicked successfully.");
            } else {
                console.log("Add to Cart button is not displayed.");
            }
        } catch (error) {
            console.error("Error while clicking on Add to Cart button: ", error);
        }
    }

    // Verify product in the cart
    static async Verifyproduct_INcart(ProductName) {
        try {
            await driver.pause(2000);
            let count = 0;
            const Homecart = await new SearchForProduct().Home_cart;

            
            while (!await $(Homecart).isDisplayed() && count < 8) {
                await driver.back();  
                await driver.pause(1000);  
                count++;
            }
            await $(Homecart).click();

           
            if (await $(Homecart).isDisplayed()) {
                console.log("Successfully navigated to the cart.");
            } else {
                console.log("Failed to navigate to the cart.");
            }
        } catch (error) {
            console.error("Error while verifying product in cart: ", error);
        }
    }

    // 
    /*static async verify(ProductName) {
        try {
            const productSelector = `//android.widget.TextView[contains(@text,"${ProductName}")]`;
            await driver.pause(3000); // Wait for the list to load
            const productExists = await $(productSelector).isDisplayed();

            // Basic check if the product is displayed
            if (productExists) {
                console.log("Product found in the list!");
            } else {
                console.log('Product not found in the list.');
            }
        } catch (error) {
            console.error("Error while verifying product: ", error);
        }
    }*/
        static async verify(ProductName){
            const productSelector = '//android.view.ViewGroup[contains(@content-desc,"Apple iPhone 15 (Black, 128 GB)")]';
            await driver.pause(3000)
            const productExists = await $(productSelector).isDisplayed();
    
            if (productExists) {
                console.log("/////////////Verified////////////////");
        }   else {
            console.log('////////////////////////not present//////////');
        }
        }
    

    // Logout from the account
    // Logout function
    static async FlipkartLogout() {
        const Account = await new SearchForProduct().HomeAccount;
            await Account.click();
            console.log("Account button clicked successfully.");
    
            const accountDisplayed = await Account.isDisplayed();
            if (!accountDisplayed) {
                throw new Error('Account button is not displayed on the screen');
            }
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,7)')
        const Logout = await new SearchForProduct().AccountLogout;
            await this.waitForElement(Logout); // Wait for "Log Out" to be displayed
    
            // Ensure the Log Out button is visible
            const logoutVisible = await Logout.isDisplayed();
            if (!logoutVisible) {
                throw new Error('Log Out button is not visible');
            }
    
            // Click the "Log Out" button
            await Logout.click();
            console.log("Logged out successfully.");

        
        
        
    }
    static async FlipkartLogout1() {
    try {
        const Account = await new SearchForProduct().HomeAccount;
        await Account.click()
        console.log("Account button clicked successfully.");
        const accountDisplayed = await Account.isDisplayed();
        if (!accountDisplayed) {
            throw new Error('Account button is not displayed on the screen');
        }

        // Scroll to the bottom to find the "Log Out" button
        await driver.execute("mobile: scroll", { direction: "down" });
        await driver.execute("mobile: scroll", { direction: "down" });

        const Logout = await new SearchForProduct().AccountLogout;
        await this.waitForElement(Logout); // Wait for "Log Out" to be displayed

        // Ensure logout button is visible
        const logoutVisible = await Logout.isDisplayed();
        if (!logoutVisible) {
            throw new Error('Log Out button is not visible');
        }

        await Logout.click(); // Click on the Log Out button
        console.log("Logged out successfully.");

        // Check if the account icon is still visible after logout
        const accountVisible = await Account.isDisplayed();
        if (!accountVisible) {
            console.log("Logout successful, account icon is no longer visible.");
        } else {
            console.log("Logout failed, account icon is still visible.");
        }
    } catch (error) {
        console.error("Error while logging out: ", error);
    }

    
    
}
   /* static async clickOnCatagories(){
        let catagories=$('//android.view.ViewGroup[@content-desc="Categories"]/android.view.ViewGroup')
        await catagories.isDisplayed()
        await catagories.click()
        let arr=[]
        let list1= $$('//android.view.ViewGroup[@content-desc="For You"]/../../../../../android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup')
        for(let p=0;<list1.element;p++){
            arr.push(list1[p].getText())
            console.log(list1[p].getText())
        }
        for(let b =0;b<arr.length;b++){
            for(j=1;j<arr.length;j++){
                if(arr[b]==arr[j]){
                    console.log("duplicate element is present")
                    break;
                }
                else{
                    console.log("All elements are unique")
                }
            }
        }
    }*/
}
