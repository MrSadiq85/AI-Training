import { expect, test } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('should open Client Work from Services menu and verify heading', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    const servicesMenu = page.getByRole('link', { name: 'Services' });
    await expect(servicesMenu).toBeVisible();
    await servicesMenu.hover();

    const clientWorkLink = page.getByRole('link', { name: 'Explore Our Client Work' });
    await expect(clientWorkLink).toBeVisible();
    await clientWorkLink.click();

    await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
  });
});
