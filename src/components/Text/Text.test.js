import { render, screen } from '@testing-library/react';
import Text from '../Text';
import '@testing-library/jest-dom/extend-expect';
import '../Text.module.scss';

describe('Text component functions as expected', () => {
  test("Component will be rendered as 'inline', when the inline prop is true.", () => {
    render(
      <Text variant="h2" inline>
        test
      </Text>
    );
    expect(screen.getByText('test')).toHaveClass('inline');
  });

  test('Component will create a child element based on the specified variant', () => {
    render(<Text variant="h1">test</Text>);
    const childNode = screen.getByRole('heading', { level: 1 });
    expect(childNode).toBeInTheDocument();
  });

  test("Component will apply the element's variantClass when applicable", () => {
    render(<Text variant="smalltitle">test</Text>);
    const childNode = screen.getByText('test');
    expect(childNode).toHaveClass('small-title');
  });

  test('Component will apply top and/or bottom margin styles', () => {
    render(
      <Text marginTop={5} marginBottom={3}>
        test
      </Text>
    );
    const childNode = screen.getByText('test');
    expect(childNode).toHaveClass('mt-5');
    expect(childNode).toHaveClass('mb-3');
  });

  test('Component will apply appropriate color', () => {
    render(<Text color="error">test</Text>);
    const childNode = screen.getByText('test');
    expect(childNode).toHaveClass('error');
  });
});
