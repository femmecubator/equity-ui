import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Popover from '../Popover';
import MenuItem from '../../MenuItem/MenuItem';

const meta: Meta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
};

export default meta;

// Define a functional component for the story
const DefaultStoryComponent = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={buttonRef} onClick={() => setOpen(!open)}>
        Toggle Popover
      </button>
      <Popover open={open} anchorElement={buttonRef.current}>
        <div>
          This is the popover content.
          <MenuItem text="Menu Item 1" />
          <MenuItem text="Menu Item 2" />
        </div>
      </Popover>
    </>
  );
};

// Directly assigning the component
export const Default: StoryObj<typeof Popover> = {
  render: DefaultStoryComponent,
};
