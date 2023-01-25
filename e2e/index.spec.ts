import {test, expect} from '@playwright/test';

test.describe('Load page correctly', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
    });

    test('Show title', async ({ page }) => {
        await expect(page.locator('h1')).toHaveText('¿ Deberia lanzar a producción hoy ?');
    });

    test('Has Recargar button', async ({ page }) => {
        await expect(page.locator('button')).toHaveText('Recargar');
    });
});

test.describe('Page is functionaly correct', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
    });

    test('Show Cargando message', async ({ page }) => {
        await expect(page.locator('h2')).toHaveText('Cargando');
    });


    test('Message should be different after refresh message', async ({ page }) => {
        await page.waitForResponse('http://localhost:3000/api/message');
        let actualMessage = await page.innerText('h2');
        await page.click('button:text("Recargar")');
        await page.waitForResponse('http://localhost:3000/api/message');
        let newMessage = await page.innerText('h2');
        expect(newMessage).not.toContain(actualMessage)
    })
});

