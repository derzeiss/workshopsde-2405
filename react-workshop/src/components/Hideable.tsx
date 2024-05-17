import { ReactNode, useState } from 'react';

interface HideableProps {
  children: ReactNode;
  initiallyVisible?: boolean;
}

export const Hideable = ({ children, initiallyVisible = false }: HideableProps) => {
  const [contentVisible, setContentVisible] = useState(initiallyVisible);

  return (
    <div className="hideable">
      {contentVisible && <p>{children}</p>}
      <button className="tertiary" onClick={() => setContentVisible(!contentVisible)}>
        {contentVisible ? '- hide' : '+ show'} details
      </button>
    </div>
  );
};
