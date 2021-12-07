import Account from "../Acoount";
import { render } from "@testing-library/react";

it("matches snapshot", () => {
  const utils = render(<Account name="호박너구리" mbti="ESFJ" />);
  expect(utils.container).toMatchSnapshot();
});
