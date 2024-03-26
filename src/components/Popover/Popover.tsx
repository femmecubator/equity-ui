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
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0px 1px 3px 0px rgba(51, 51, 51, 0.2);
  padding: 16px;
  border-radius: var(--border-radius-default, 16px);
  z-index: 1000;
  display: flex;

  /* Show the popover when open */
  ${({ position }) =>
    position.top !== 0 &&
    `
    display: block;
  `}

  color: var(--button-primary-content-disabled, #9C9C9C);
  /* heading/h5 */
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */

  width: 227px;
  flex-direction: column;
  align-items: flex-start;
  background: var(--color-bg-strong, #fff);
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
      // Reset position when closed or anchorElement is null
      setPosition({ top: 0, left: 0 });
    }
  }, [anchorElement, open]);

  // Return null to not render anything when not open or no anchorElement
  if (!open || !anchorElement) {
    return null;
  }

  return <StyledPopover position={position}>{children}</StyledPopover>;
};

export default Popover;
