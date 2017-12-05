/* @flow */
/* eslint-disable no-undef */

export default function find<T>(
  list: Array<T>,
  predicate: (item: T) => boolean,
): ?T {
  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return list[i];
    }
  }
}
