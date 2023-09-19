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

export const getAllCarts = async () => {
    const response = await fetch (`${BASE_URL}/carts`, {
    })
    const result = await response.json();
    console.log(result);
    console.log("the cart is working");
}

export const getSingleCart = async (cartId) => {
    const response = await fetch(`${BASE_URL}/carts/${cartId}`,{

});
    const result = await response.json();
    console.log("the single cart is working");
    return result;
}

export const addCart = async (userId, date, products, productId, quantity) => {
    const response = await fetch(`${BASE_URL}/carts/${cartId}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    userId: userId,
                    date: date,
                    products:[{productId: productId,quantity:quantity}]
                }
            )
        })
        const result = await response.json();
        console.log("we have added data to the cart");
        return result;
}

export const updateCart = async (useId, date, products, productId, quantity) => {
    const response = await fetch(`${BASE_URL}/carts/${cartId}`,{
        method:"PATCH",
                body:JSON.stringify(
                    {
                        userId:3,
                        date:2019-12-10,
                        products:[{productId:1,quantity:3}]
                    }
                )
            })
            const result = await response.json();
            console.log("we have updated the cart");
            return result;
}

export const deleteCart = async () => {
    const response = await fetch(`${BASE_URL}/carts/${cartId}`,{
        method: "DELETE"
    })
    const result = await response.json();
    console.log("we have deleted data from the cart");
    return result;
}
