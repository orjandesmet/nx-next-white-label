import { render } from '@testing-library/react';

import OverrideScssExample from './override-scss-example';

describe('OverrideScssExample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OverrideScssExample />);
    expect(baseElement).toBeTruthy();
  });
});
