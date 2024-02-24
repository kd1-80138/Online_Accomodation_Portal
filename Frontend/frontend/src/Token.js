const token = sessionStorage.getItem('jwt'); 
export const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};