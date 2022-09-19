import { calc } from '../src'

test('The calculation result should be 1024', () => {
  expect(calc(1000, 24)).toBe(1024)
})
