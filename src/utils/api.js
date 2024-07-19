const api = (() => {
    // const BASE_URL = import.meta.env.REACT_APP_BASE_URL;
    const BASE_URL = import.meta.env.VITE_REACT_API_URL;
  
    async function _fetchWithAuth(url, options = {}) {
      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${getAccessToken()}`
        }
      });
    }
  
    function putAccessToken(token) {
      localStorage.setItem('accessToken', token);
    }
  
    function getAccessToken() {
      return localStorage.getItem('accessToken');
    }
  
    async function register({ nisn, email, name, password, conf_password }) {
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          nisn,
          email,
          name,
          password,
          conf_password
        })
      });
  
      const responseJson = await response.json();
      const { status, message } = responseJson;
  
      if (status !== 'success') {
        throw new Error(message);
      }
  
      const { result } = responseJson;
  
      return result;
    }
  
    async function login({ nisn, password }) {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            nisn,
            password,
          })
      });
  
      const responseJson = await response.json();
  
      const { msg } = responseJson;
  
      if (msg) {
        throw new Error(msg);
      }
  
      return responseJson;
    }

    async function logout(){
        const response = await fetch(`${BASE_URL}/logout`, {
            method: 'DELETE',
        });
        if (response.status !== 204){
            throw new Error("error")
        }

        return response
    }

    async function getProgressDashboard() {
        const response = await _fetchWithAuth(`${BASE_URL}/me`);
        const responseJson = await response.json();
    
        const { status, message, result } = responseJson;
    
        if (status !== 'success') {
          throw new Error(message);
        }
    
        return result;
    }

    async function getProfileNavbarSiswa() {
        const response = await _fetchWithAuth(`${BASE_URL}/navbar`);
        const responseJson = await response.json();
    
        const { status, message, result } = responseJson;
    
        if (status !== 'success') {
          throw new Error(message);
        }
    
        return result;
    }

    async function getThreeKnowledge({type}) {
        const response = await _fetchWithAuth(`${BASE_URL}/knowledge?type=${type}&slice=true`);
        const responseJson = await response.json();
    
        const { status, message, result } = responseJson;
    
        if (status !== 'success') {
          throw new Error(message);
        }
    
        return result;
    }

    async function getAllKnowledge({type, mapel}) {
        const response = await _fetchWithAuth(`${BASE_URL}/knowledge?type=${type}&mapel=${mapel}`);
        const responseJson = await response.json();
    
        const { status, message, result } = responseJson;
    
        if (status !== 'success') {
          throw new Error(message);
        }
    
        return result;
    }

    async function tambahNilai({url}){
      const response = await _fetchWithAuth(`${BASE_URL}/tambahnilai`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            url
          })
      });      
      return response
    }

    async function tambahComic({ judul, file }) {
      const formData = new FormData();
      formData.append('judul', judul);
      formData.append('file', file);
    
      const response = await _fetchWithAuth(`${BASE_URL}/comics`, {
        method: 'POST',
        body: formData,
      });

      const { status, message, result } = await response.json();
    
      if (status !== 'success') {
        throw new Error(message);
      }
  
      return result;
    }
    
    async function getMyComic() {
      const response = await _fetchWithAuth(`${BASE_URL}/my/comics`);
      const responseJson = await response.json();
  
      const { status, message, result } = responseJson;
  
      if (status !== 'success') {
        throw new Error(message);
      }
  
      return result;
  }
    async function getVerifiedComic() {
      const response = await _fetchWithAuth(`${BASE_URL}/verified/comics`);
      const responseJson = await response.json();
  
      const { status, message, result } = responseJson;
  
      if (status !== 'success') {
        throw new Error(message);
      }
  
      return result;
  }

  async function getComicById({id}) {
    const response = await _fetchWithAuth(`${BASE_URL}/comics/${id}`);
    const responseJson = await response.json();

    const { status, message, result } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return result;
  }

  async function getComicHome() {
    const response = await _fetchWithAuth(`${BASE_URL}/homecomics`);
    const responseJson = await response.json();

    const { status, message, result } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

  return result;
  }

  async function getBukuHome() {
    const response = await _fetchWithAuth(`${BASE_URL}/homebukus`);
    const responseJson = await response.json();

    const { status, message, result } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

  return result;
  }

  async function getAllBuku() {
    const response = await _fetchWithAuth(`${BASE_URL}/bukus`);
    const responseJson = await response.json();

    const { status, message, result } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

  return result;
  }

  async function getBukuId({id}) {
    const response = await _fetchWithAuth(`${BASE_URL}/bukus/${id}`);
    const responseJson = await response.json();

    const { status, message, result } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return result;
  }

  async function historyBacaan({ buku_id, dari, sampai, ringkasan }) {
    const response = await _fetchWithAuth(`${BASE_URL}/history-bacaan`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          buku_id,
          dari,
          sampai,
          ringkasan
        })
    })
    const responseJson = await response.json();
  
    const { msg } = responseJson;

    if (msg) {
      throw new Error(msg);
    }

    return responseJson;
  }

  async function HistoryRingkasanById({id}) {
    const response = await _fetchWithAuth(`${BASE_URL}/history-bacaan/${id}`);
    const responseJson = await response.json();

    const { status, message, result } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return result;
  }

  async function getMyBukuBacaan() {
    const response = await _fetchWithAuth(`${BASE_URL}/my-history-bacaan`);
    const responseJson = await response.json();

    const { status, message, result } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return result;
  }

  async function getLeaderboard() {
    const response = await _fetchWithAuth(`${BASE_URL}/leaderboard`);
    const responseJson = await response.json();

    const { status, message, result } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return result;
  }

  async function arun({ pertanyaan }) {
    const response = await _fetchWithAuth(`${BASE_URL}/arunda`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          pertanyaan
        })
    })
    const responseJson = await response.json();
  
    const { msg } = responseJson;

    if (msg) {
      throw new Error(msg);
    }

    return responseJson;
  }
  


    return {
      putAccessToken,
      getAccessToken,
      register,
      login,
      logout,
      getProgressDashboard,
      getProfileNavbarSiswa,
      getThreeKnowledge,
      tambahNilai,
      getAllKnowledge,
      tambahComic,
      getMyComic,
      getVerifiedComic,
      getComicById,
      getComicHome,
      getBukuHome,
      getAllBuku,
      getBukuId,
      historyBacaan,
      HistoryRingkasanById,
      getMyBukuBacaan,
      getLeaderboard,
      arun
    };
  })();
  
  export default api;
  