import { test, expect } from "@playwright/test";
import { testit } from "testit-adapter-playwright";

test('addLinks success', async () => {
    testit.addLinks([
      { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
      { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
    ]);
  
    expect(true).toBe(true);
  });
  
  test('addLinks failed', async () => {
    testit.addLinks([
      { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
      { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
    ]);
  
    expect(true).toBe(false);
  });
  
  test('addAttachments success', async () => {
    testit.addAttachment('file01.txt', 'Content', {
      contentType: "application/json",
    });
  
    expect(true).toBe(true);
  });
  
  test('addAttachments failed', async () => {
    testit.addAttachment('file01.txt', 'Content', {
      contentType: "application/json",
    });
  
    expect(true).toBe(false);
  });
  
  test('addMessage success', async () => {
    testit.addMessage('Message');
  
    expect(true).toBe(true);
  });
  
  test('addMessage failed', async () => {
    testit.addMessage('Message');
  
    expect(true).toBe(false);
  });
  
  test('all Methods success', async () => {
    testit.addLinks([
      { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
      { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
    ]);
  
    testit.addAttachment('file01.txt', 'Content', {
      contentType: "application/json",
    });
  
    testit.addMessage('Message');
  
    expect(true).toBe(true);
  });
  
  test('all Methods failed', async () => {
    testit.addLinks([
      { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
      { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
    ]);
  
    testit.addAttachment('file01.txt', 'Content', {
      contentType: "application/json",
    });
  
    testit.addMessage('Message');
  
    expect(true).toBe(false);
  });