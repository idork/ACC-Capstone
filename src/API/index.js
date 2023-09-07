const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const result = await response.json();
    return result;
}
export const getSingleProduct = async (productID) => {
    const response = await fetch(`${BASE_URL}/products/${productID}`);
    const result = await response.json();

    return result;
}

export const userRegister = async (username, password) => {
    
}

export const userLogin = async (username,password) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({
            user: {
            username: username,
            password: password,
            }
        })
    });

    const result = await response.json();
    console.log(result);

    return result;
}


export const getSortedProduct = async () => {
    const response = await fetch(`${BASE_URL}/products/`);
    const result = await response.json();

    return result;
}