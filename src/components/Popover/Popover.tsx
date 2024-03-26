import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

interface PopoverProps {
  open: boolean;
  anchorElement: HTMLElement | null;
  children: React.ReactNode;
}

const StyledPopover = styled.div<{ position: { top: number; left: number } }>`
  position: absolute;
  top: ${({ position }) => `${position.top}px`};
  left: ${({ position }) => `${position.left}px`};
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-radius: 8px;
  z-index: 1000;
`;

const Popover: React.FC<PopoverProps> = ({ open, anchorElement, children }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (anchorElement) {
      const rect = anchorElement.getBoundingClientRect();
      setPosition({
        top: rect.top + rect.height + window.scrollY,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }
  }, [anchorElement, open]);

  if (!open || !anchorElement) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledPopover position={position}>{children}</StyledPopover>,
    document.getElementById('portal')!
  );
};

export default Popover;
