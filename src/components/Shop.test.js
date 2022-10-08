import { render } from "@testing-library/react";
import Shop from "./Shop";

describe('Shop', () => {
  test('all links show up on screen', () => {
    const { container } = render(<Shop />);

    expect(container).toMatchSnapshot();
  });

  test('link brings user to the correct page', () => {

  });
});
