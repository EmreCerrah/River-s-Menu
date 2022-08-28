import * as actionType from "./actionType";


export function getProductsSuccess(products) {
  return { type: actionType.GET_PRODUCTS_SUCCESS, payload: products };
}

export function getProducts(categoryId) {


  return function (dispatch) {

    let url = "https://api.jsonbin.io/v3/b/63065aa75c146d63ca7dba28/latest";

    /* if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
*/   
    return fetch(url, {
      headers: {
        "X-ACCESS-KEY":
          "$2b$10$/56vLCdIHWuXOLw2uk5SU.JrFqCgULyGMjNiz9wL8xD4PPvKgz9wu",
      },
    })
      .then((Response) => Response.json())
      .then((data) => { 
        if (categoryId) {
          dispatch(getProductsSuccess(data.record.products.filter(urun => urun.categoryId===categoryId)));
        } else {
          dispatch(getProductsSuccess(data.record.products));
        };
      });
  };
}




/*


export function createProductsSuccess(product) {
  return { type: actionType.CREATE_PRODUCTS_SUCCESS, payload: product };
}

export function updateProductsSuccess(product) {
  return { type: actionType.UPDATE_PRODUCTS_SUCCESS, payload: product };
}

export function saveProductsApi(product) {
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "POST" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handlerResponse) //Intensional programing Niyet ettim proglamlamaya
    .catch(handleError);
}
export function saveProducts(product) {
  return function (dispatch) {
    return saveProductsApi(product).then((savedProduct) => {
      product.id
        ? dispatch(updateProductsSuccess(savedProduct))
        : dispatch(createProductsSuccess(savedProduct));
    }).catch(err=>{throw err;});
  };
}

export async function handlerResponse(response){
  if (response.ok){
    return response.json()
  }
  const err = await response.text()
  throw new Error(err)
}
export function handleError(err){
  console.error("hatalandik");
  throw err;
}
*/
