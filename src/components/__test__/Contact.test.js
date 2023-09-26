import { render , screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";


test("To test wether my contact us pages loads or not", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    
    expect(heading).toBeInTheDocument();
})