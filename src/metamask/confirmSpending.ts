import { clickOnButton, retry, waitForOverlay } from "../helpers";
import { DappeteerPage } from "../page";

// TODO: thing about renaming this method?
export const confirmSpending = (page: DappeteerPage) => async (): Promise<void> => {
  await retry(async () => {
    await page.bringToFront();
    await page.reload();
    await waitForOverlay(page);

    // TODO: step 1 of connect chose account to connect?
    await clickOnButton(page, "Confirm", { timeout: 2000 });
  }, 3);
};
