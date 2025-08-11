import { describe, expect, it, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import contextRender from '../../shared/utils/contextRender';
import Tab from './Tab';

describe('Tab component', () => {
  it('should render individual Tab without errors', () => {
    const mockOnTabSelect = vi.fn();

    contextRender(
      <Tab
        value="test-tab"
        label="Test Tab"
        isSelected={true}
        onTabSelect={mockOnTabSelect}
      >
        <div>Test Content</div>
      </Tab>
    );

    const tabButton = screen.getByRole('tab', { name: 'Test Tab' });
    expect(tabButton).toBeInTheDocument();
    expect(tabButton).toHaveTextContent('Test Tab');

    const tabContent = screen.getByText('Test Content');
    expect(tabContent).toBeInTheDocument();
  });

  it('should render Tab with icon', () => {
    contextRender(
      <Tab value="icon-tab" label="Icon Tab" icon="complete" isSelected={true}>
        <div>Icon Content</div>
      </Tab>
    );

    const tabButton = screen.getByRole('tab', { name: 'Icon Tab' });
    expect(tabButton).toBeInTheDocument();

    const iconSvg = tabButton.querySelector('svg');
    expect(iconSvg).toBeInTheDocument();
  });

  it('should call onTabSelect when clicked', () => {
    const mockOnTabSelect = vi.fn();

    contextRender(
      <Tab
        value="clickable-tab"
        label="Clickable Tab"
        isSelected={false}
        onTabSelect={mockOnTabSelect}
      >
        <div>Clickable Content</div>
      </Tab>
    );

    const tabButton = screen.getByRole('tab', { name: 'Clickable Tab' });
    fireEvent.click(tabButton);

    expect(mockOnTabSelect).toHaveBeenCalledWith('clickable-tab');
  });

  it('should render Tab.Group with multiple tabs', () => {
    contextRender(
      <Tab.Group defaultValue="tab1">
        <Tab value="tab1" label="Tab One">
          <div>Content One</div>
        </Tab>
        <Tab value="tab2" label="Tab Two">
          <div>Content Two</div>
        </Tab>
        <Tab value="tab3" label="Tab Three">
          <div>Content Three</div>
        </Tab>
      </Tab.Group>
    );

    expect(screen.getByRole('tab', { name: 'Tab One' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab Two' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab Three' })).toBeInTheDocument();

    expect(screen.getByText('Content One')).toBeInTheDocument();
    expect(screen.queryByText('Content Two')).not.toBeInTheDocument();
    expect(screen.queryByText('Content Three')).not.toBeInTheDocument();
  });

  it('should switch tabs in Tab.Group when clicked', () => {
    contextRender(
      <Tab.Group defaultValue="tab1">
        <Tab value="tab1" label="Tab One">
          <div>Content One</div>
        </Tab>
        <Tab value="tab2" label="Tab Two">
          <div>Content Two</div>
        </Tab>
      </Tab.Group>
    );

    expect(screen.getByText('Content One')).toBeInTheDocument();
    expect(screen.queryByText('Content Two')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('tab', { name: 'Tab Two' }));

    expect(screen.queryByText('Content One')).not.toBeInTheDocument();
    expect(screen.getByText('Content Two')).toBeInTheDocument();
  });

  it('should apply custom css styles', () => {
    const customStyles = {
      backgroundColor: 'lightblue',
      borderRadius: 4,
      color: 'red',
    };

    contextRender(
      <Tab
        value="styled-tab"
        label="Styled Tab"
        isSelected={true}
        css={customStyles}
      >
        <div>Styled Content</div>
      </Tab>
    );

    const tabButton = screen.getByRole('tab', { name: 'Styled Tab' });
    expect(tabButton).toBeInTheDocument();

    // Check that the component renders without errors with custom styles
    expect(tabButton).toHaveTextContent('Styled Tab');
  });
});
