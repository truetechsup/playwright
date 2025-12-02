import { test, expect } from "@playwright/test";
import { testit } from "testit-adapter-playwright";

test('without annotations success', () => {
  expect(true).toBe(true);
});

test('without annotations failed', () => {
  expect(true).toBe(false);
});

test('externalId Annotation success', () => {
  testit.externalId('externalIdAnnotation_success');

  expect(true).toBe(true);
});

test('externalId Annotation failed', () => {
  testit.externalId('externalIdAnnotation_failed');
  
  expect(true).toBe(false);
});

test('displayName Annotation success', () => {
  testit.displayName('displayName Annotation success');
  
  expect(true).toBe(true);
});

test('displayName Annotation failed', () => {
  testit.displayName('displayName Annotation failed');
  
  expect(true).toBe(false);
});

test('title Annotation success', () => {
  testit.title('title Annotation success');
  
  expect(true).toBe(true);
});

test('title Annotation failed', () => {
  testit.title('title Annotation failed');
  
  expect(true).toBe(false);
});

test('description Annotation success', () => {
  testit.description('description Annotation success');
  
  expect(true).toBe(true);
});

test('description Annotation failed', () => {
  testit.description('description Annotation failed');
  
  expect(true).toBe(false);
});

test('labels Annotation success', () => {
  testit.labels(['Label1', 'Label2']);
  
  expect(true).toBe(true);
});

test('labels Annotation failed', () => {
  testit.labels(['Label1', 'Label2']);
  
  expect(true).toBe(false);
});

test('links Annotation success', () => {
  testit.links([
    { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
    { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
  ]);
  
  expect(true).toBe(true);
});

test('links Annotation failed', () => {
  testit.links([
    { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
    { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
  ]);
  
  expect(true).toBe(false);
});

test('workItemIds Annotation success', () => {
  expect(true).toBe(true);
});

test('workItemIds Annotation failed', () => {
  expect(true).toBe(false);
});

test('with All Annotations success', () => {
  testit.externalId('withAllAnnotations_success');
  testit.displayName('with All Annotations success DisplayName');
  testit.title('with All Annotations success Title');
  testit.description('with All Annotations success');
  testit.labels(['Label1', 'Label2']);
  testit.links([
    { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
    { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
  ]);

  expect(true).toBe(true);
});

test('with All Annotations failed', () => {
  testit.externalId('withAllAnnotations_failed');
  testit.displayName('with All Annotations failed DisplayName');
  testit.title('with All Annotations failed Title');
  testit.description('with All Annotations failed');
  testit.labels(['Label1', 'Label2']);
  testit.links([
    { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
    { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
  ]);

  expect(true).toBe(false);
});
