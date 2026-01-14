// src/hooks/useInput.js
import { useCallback, useState } from 'react';

export default function useInput(initial = '') {
  const [value, setValue] = useState(initial);

  const onChange = useCallback((e) => setValue(e.target.value), []);
  const reset = useCallback(() => setValue(''), []);

  return { value, onChange, reset, setValue };
}
