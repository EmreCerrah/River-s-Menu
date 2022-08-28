import * as actionType from "./actionType";


export function changeCategory(category) {
  return { type: actionType.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(results) {
  return { type: actionType.GET_CATEGORIES_SUCCESS, payload: results };
}

export function getCategories() {
  return function (dispatch) {
    let url = "https://api.jsonbin.io/v3/b/63065aa75c146d63ca7dba28/latest";
    return fetch(url, {
      headers: { "X-ACCESS-KEY": "$2b$10$/56vLCdIHWuXOLw2uk5SU.JrFqCgULyGMjNiz9wL8xD4PPvKgz9wu" }})
      .then((Response) => Response.json())
      .then((data) =>{ dispatch(getCategoriesSuccess(data.record.categories));});
  };
}
