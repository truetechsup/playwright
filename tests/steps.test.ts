import { test, expect } from "@playwright/test";
import { testit } from "testit-adapter-playwright";

test('test with steps success', async () => {
    testit.step("Step01 Title", async () => {
    });
    testit.step("Step02 Title", async () => {
    });
  
    expect(true).toBe(true);
  });
  
test('test with steps failed', async () => {
    testit.step("Step01 Title", async () => {

        expect(true).toBe(false);
    });
    testit.step("Step02 Title", async () => {
        expect(true).toBe(true);
    });
  
    expect(true).toBe(false);
});

test('test with steps with attachments', async () => {
    testit.step("Step01 Title", async () => {
        testit.addAttachment('file01.txt', 'Content', {
          contentType: "application/json",
        });
    });
    testit.step("Step02 Title", async () => {
        testit.addAttachment('file02.txt', 'Content', {
          contentType: "application/json",
        });
    });
  
    expect(true).toBe(true);
});
