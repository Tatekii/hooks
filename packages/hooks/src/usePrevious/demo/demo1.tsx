/**
 * title: Default usage
 * desc: Store the previous value.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 记录上次的 count 值
 */

import { usePrevious } from 'ahooks';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <>
      <div>counter current value: {count}</div>
      <div style={{ marginBottom: '10px' }}>counter previous value: {previous}</div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        {' '}
        increase{' '}
      </button>
      <button type="button" style={{ marginLeft: '10px' }} onClick={() => setCount((c) => c - 1)}>
        {' '}
        decrease{' '}
      </button>
    </>
  );
};
