import test, { expect } from '@playwright/test';

test.describe('Auth', () => {
  test('login', async ({ page }) => {
    await page.goto('/auth');
    await page.fill('input[name="email"]', 'leroyalle@yandex.ru');
    await expect(page.locator('input[name="email"]')).toHaveValue('leroyalle@yandex.ru');

    const [request, response] = await Promise.all([
      page.waitForRequest((req) => req.url().includes('/auth/v1/otp') && req.method() === 'POST'),
      page.waitForResponse((res) => res.url().includes('/auth/v1/otp') && res.status() === 200),
      page.click('button[type="submit"]'),
    ]);

    expect(request.postDataJSON().email).toBe('leroyalle@yandex.ru');
    expect(response).toBeTruthy();
  });
});
