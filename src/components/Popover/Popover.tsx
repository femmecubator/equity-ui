import React, { useState, useEffect } from 'react';
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
  background-color: #fff;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 12px rgba(51, 51, 51, 0.2);
  padding: 16px;
  border-radius: var(--border-radius-default, 16px);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 227px;

  /* Arrow styles */
  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 16px;
    height: 16px;
    background-color: #fff;
    box-shadow: -3px -3px 5px rgba(51, 51, 51, 0.2);
  }

  ${({ position }) =>
    position.top !== 0 &&
    `
    display: block;
  `}
`;

const Popover: React.FC<PopoverProps> = ({ open, anchorElement, children }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (open && anchorElement) {
      const rect = anchorElement.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    } else {
      setPosition({ top: 0, left: 0 });
    }
  }, [anchorElement, open]);

  if (!open || !anchorElement) {
    return null;
  }

  return <StyledPopover position={position}>{children}</StyledPopover>;
};

export default Popover;
