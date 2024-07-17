import { useState } from 'react';

const useToggleVisible = (initialState: boolean = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return [isVisible, toggleVisibility] as const;
};

export default useToggleVisible;