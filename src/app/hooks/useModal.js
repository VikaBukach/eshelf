import { useState } from "react";

export const useModal = (defaultValue = false) => {
  const [openState, setOpenState] = useState(defaultValue);

  const open = () => {
    setOpenState(true);
  };

  const close = () => {
    setOpenState(false);
  };

  return { active: openState, open, close };
};
