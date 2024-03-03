import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { products } from "../../data/produts";

const mockDispatch = jest.fn();

// para que não seja necessário envolver o componente Cart com <Provider store={store}>
jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});

describe("Cart > Unit tests", () => {
  it("should  render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });

    // no elemento deve ter data-testid="total"
    const strongTotal = screen.getByTestId("total");
    const cartElementList = screen.getByRole("list"); // ul

    // erro de tipagem para não subir esse trecho em produção
    //screen.debug(cartElementList);

    // toHaveTextContent precisa ser importado @testing-library/jest-dom
    // para evitar importar em todos os arquivo é possível criar um arquivo dentro do src
    // chamado setupTests.js contendo import @testing-library/jest-dom
    expect(titleElement).toHaveTextContent("Carrinho");
    expect(strongTotal).toHaveTextContent("0 R$");
    expect(cartElementList).toBeEmptyDOMElement();
  });

  it("should render a cart with two products", () => {
    const cart = products.slice(0, 2);
    render(<Cart showCart={true} cart={cart} />);

    const itensRenderer = screen.getAllByRole("listitem");
    expect(itensRenderer.length).toBe(2);
  });
});
