import { formatDiff } from './format-diff';

it('formats 0', () => {
  expect(formatDiff(0)).toBe('0:00');
});

it('formats 1.25 seconds', () => {
  expect(formatDiff(1250)).toBe('0:01');
});

it('formats 1.75 seconds', () => {
  expect(formatDiff(1750)).toBe('0:01');
});

it('formats 1 minute', () => {
  expect(formatDiff(60000)).toBe('1:00');
});

it('formats 10 minutes', () => {
  expect(formatDiff(600000)).toBe('10:00');
});

it('formats 1 hour', () => {
  expect(formatDiff(3600000)).toBe('1:00:00');
});

it('stops at 9:59:59', () => {
  expect(formatDiff(Infinity)).toBe('9:59:59');
});
