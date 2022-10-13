describe('olx.ro', ()=>{
    it('should have the correct page title', async ()=>{
        await browser.url('https://www.olx.ro/');
        const acceptDataHandler = await $('#onetrust-accept-btn-handler');
        await acceptDataHandler.click();
        await expect(browser).toHaveTitle('OLX - Cumpără și vinde'); 
    })
    it('should contain a login button', async ()=>{
        const logButton = await $ ('#topLoginLink');
        await expect(logButton).toBeDisplayed();   
    })
    it('should open Apartamente-garsoniere de vanzare page', async  ()=>{
        const imobiliare = await $('//*[@id="searchmain-container"]/div[2]/div/div[1]/div[3]/div/a');
        await imobiliare.click();
        const apartamente = await $('//*[@id="bottom3"]/ul/li[1]/a/span')
        await apartamente.click();
        await expect(browser).toHaveTitle("Anunturi Apartamente si garsoniere de vanzare ' OLX.ro")
    })
    it('should have a working search button', async ()=>{
        const searchBar = await $('#search');
        const searchBtn = await $('//*[@id="root"]/div[1]/div[2]/form/div[1]/div[3]/button')

        await searchBar.setValue('duplex');
        await searchBtn.click();
        await expect(browser).toHaveUrlContaining('duplex')
    })
})