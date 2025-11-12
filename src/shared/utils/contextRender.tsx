import { render, RenderResult } from '@testing-library/react';

const contextRender = (ui: React.ReactNode): RenderResult => {
  return render(<>{ui}</>);
};

export default contextRender;
