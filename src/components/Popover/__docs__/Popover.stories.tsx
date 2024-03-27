import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Popover from '../Popover';
import MenuItem from '../../MenuItem/MenuItem';
import SectionTitle from '../../SectionTitle/SectionTitle';
import Divider from '../../Divider/Divider';

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
        Dropdown
      </button>
      <Popover open={open} anchorElement={buttonRef.current}>
        <div>
          <SectionTitle>Section Title</SectionTitle>
          <Divider />
          <MenuItem text="Menu Item" />
          <Divider />
          <MenuItem text="Menu Item" />
          <Divider />
          <MenuItem text="Menu Item" />
          <Divider />
          <MenuItem text="Menu Item" />
          <Divider />
          <MenuItem text="Menu Item" />
          <Divider />
          <MenuItem text="Menu Item" />
          <Divider />
          <MenuItem text="Menu Item" />
        </div>
      </Popover>
    </>
  );
};

// Directly assigning the component
export const Default: StoryObj<typeof Popover> = {
  render: DefaultStoryComponent,
};
