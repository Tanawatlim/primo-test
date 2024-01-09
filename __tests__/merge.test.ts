import merge from '../src/merge';

describe('mergeArrays', () => {
  it('should merge two sorted arrays', () => {
    const result = merge([1, 3, 5], [2, 4, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle empty arrays', () => {
    const result = merge([], [2, 4, 6]);
    expect(result).toEqual([2, 4, 6]);
  });

  it('should handle arrays of different lengths', () => {
    const result = merge([1, 3, 5, 7], [2, 4, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should handle arrays with duplicate elements', () => {
    const result = merge([1, 3, 5], [3, 4, 6]);
    expect(result).toEqual([1, 3, 3, 4, 5, 6]);
  });
});
