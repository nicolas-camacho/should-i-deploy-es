import {test, expect} from '@playwright/test';

test('should load home page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page.locator('h1')).toHaveText('¿ Deberia lanzar a producción hoy ?');
})


test('Message should be different after refresh message', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForResponse('http://localhost:3000/api/message');
    let actualMessage = await page.innerText('h2');
    await page.click('button:text("Recargar")');
    await page.waitForResponse('http://localhost:3000/api/message');
    let newMessage = await page.innerText('h2');
    expect(newMessage).not.toContain(actualMessage)
})

