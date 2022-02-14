export const setCookie = (token) => {
  localStorage.setItem("token", token);
};

export const getCookie = () => localStorage.getItem("token");
