import Axios from "axios";
import { DOMAIN, TOKEN, TOKENBYCLASS } from "../util/settings/config";
export class baseService {
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        token: "Bearer " + localStorage.getItem(TOKEN),
        tokenByClass: TOKENBYCLASS,
      },
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: {
        token: "Bearer " + localStorage.getItem(TOKEN),
        tokenByClass: TOKENBYCLASS,
      },
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {
        token: "Bearer " + localStorage.getItem(TOKEN),
        tokenByClass: TOKENBYCLASS,
      }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {
        token: "Bearer " + localStorage.getItem(TOKEN),
        tokenByClass: TOKENBYCLASS,
      }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}
