import axios from "axios";


export const getProducts = async (setProducts) => {
    const response = await axios.get("http://127.0.0.1:3000/products")
    setProducts(response.data)
    return response;
}

export const getProductsCategory = async (setProducts, categoryid) => {
    const response = await axios.get(`http://127.0.0.1:3000/products/${categoryid}`)
    setProducts(response.data)
    return response;
}

export const getMyProducts = async (setProducts, userid) => {
    const response = await axios.get(`http://127.0.0.1:3000/myProducts/${userid}`)
    setProducts(response.data)
    return response;
}


export async function addProduct(name, price, image, about, category, userId) {

    if (name === "" || price === "" || image === "") {
        return
    }

    await axios.post(`http://127.0.0.1:3000/product`, {
        productName: name,
        productPrice: price,
        ProductImage: image,
        productDetails: about,
        categoryId: category,
        userId: userId
    });
    alert("Ürün Kaydedildi")
    window.location = "/"

}


export const login = async (username, password, setPassword, setUsername) => {
    const resp = await axios.post(
        "http://127.0.0.1:3000/login",
        {
            username,
            password,
        },
        /*     { withCredentials: true } */
    );

    setUsername(username)
    setPassword(password)


    return resp.status === 200 ? resp : false;
};


export const isAuthenticated = async () => {
    const resp = await axios.get("http://localhost:3000/user", {
        withCredentials: true,
    });

    return resp.status === 200 ? resp.data : false;
};



export async function sendTradeOffer(name, price, image, about, category, userId, senderUserId) {

    if (name === "" || price === "" || image === "") {
        return
    }

    await axios.post(`http://127.0.0.1:3000/trade`, {
        productname: name,
        productprice: price,
        Productimage: image,
        productdetails: about,
        categoryid: category,
        userid: userId,
        senderuserid: senderUserId
    });
    alert("Takas Teklifiniz Başarı ile Gönderildi")
    /*    window.location = "/" */

}