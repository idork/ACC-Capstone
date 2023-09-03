const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const result = await response.json();
    return result;
}