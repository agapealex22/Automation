describe('amazon.com', ()=>{
    it('should have the correct page title', async ()=>{
        await browser.url('https://www.amazon.com/');
        await expect(browser).toHaveTitle('Amazon.com. Spend less. Smile more.');
    });
    it('should contain a cart button', async ()=>{
        const cartButton = await $('#nav-cart');
        await expect(cartButton).toBeDisplayed();
    });
    it('should open cart page', async ()=>{
        const cartButton = await $('#nav-cart');
        await cartButton.click();
        await expect(browser).toHaveTitle('Amazon.com Shopping Cart');
    })
    it('should have a working search', async ()=>{
        const searchField = await $ ('#twotabsearchtextbox');
        const searchBtn = await $ ('#nav-search-submit-button')

        await searchField.setValue('nvidia');
        await searchBtn.click();
        await expect(browser).toHaveTitle('Amazon.com : nvidia');
    })
})