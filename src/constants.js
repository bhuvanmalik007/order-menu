export const API_ENDPOINT = 'https://api.hazlnut.com/external/activeCulture/acMenuExt.php';

export const REQUEST_OBJ = {
  token: 'plHZDxMrf1NzXeElFLdOstRMBkpEdH8b',
  client: 'Active Culture',
  storeNums: [ 1 ],
  itemNums: Array.from(Array(100), (_, i) => i + 18200)
};

export const CORS_ENABLER_URL = 'https://cors-anywhere.herokuapp.com/';
