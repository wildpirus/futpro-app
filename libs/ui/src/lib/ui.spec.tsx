import { render } from '@testing-library/react';

import Ui from './ui';

export const suitUi =( ) =>{
describe.only('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruthy();
  });
});
}
