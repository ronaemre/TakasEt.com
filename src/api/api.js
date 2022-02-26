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



export async function addProduct(name, price, image, about, category) {

    if (name === "" || price === "" || image === "") {
        return
    }

    await axios.post(`http://127.0.0.1:3000/product`, {
        productName: name,
        productPrice: price,
        ProductImage: image,
        productDetails: about,
        categoryId: category
    });
    alert("Ürün Kaydedildi")
    window.location = "/"

}
