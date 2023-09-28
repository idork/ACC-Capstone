const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const result = await response.json();
    return result;
}
export const getSingleProduct = async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const result = await response.json();

    return result;
}

export const userRegister = async (username, password) => {
    const response = await fetch (`${BASE_URL}/users/`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

                username: username,
                password: password,
        })
    });
    const result = await response.json();
    console.log("the result is" + result)
    return result;
}

export const userLogin = async (username, password) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    });

    const result = await response.json();
    console.log(result);
    console.log("login is working");

    return result;
}

export const getSingleCart = async (cartId) => {
    const response = await fetch(`${BASE_URL}/carts/${cartId}`,{

});
    const result = await response.json();
    console.log("the single cart is working");
    return result;
}

// get a single user (this way we can add it to the cart)

export const getSingleUser = async (id) =>{
const response = fetch(`${BASE_URL}/users/${id}`)
const result = await response.json();

    return result;
}

export const getSortedProduct = async () => {
    const response = fetch(`${BASE_URL}`/products/categories)
    const result = await response.json();

    return result;
}