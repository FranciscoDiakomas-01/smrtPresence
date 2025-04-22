export async function DashBoard() {
  const url =
    "https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/admin/dash";
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}

export async function getAdminData() {
  const url =
    "https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/admin";
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}

export async function getAdminVariables() {
  const url =
    "https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/adminvariable";
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}
interface IADmin {
  name: string;
  lastname: string;
  email: string;
  password: string;
  oldpassword: string;
  oldemail: string;
}

export async function updateAdmin(adimn: IADmin) {
  if (!adimn.email) {
    adimn.email = adimn.oldemail;
  }
  if (!adimn.password) {
    adimn.password = adimn.oldpassword;
  }
  const url =
    "https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/admin";
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(adimn),
  });
  const response = await API.json();
  return response;
}

interface IVariables {
  coord: string;
  teacher: string;
}

export async function updateAdminVariables(Variables: IVariables) {
  const url =
    "https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/adminvariable";
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(Variables),
  });
  const response = await API.json();
  return response;
}

export async function getAllLatest(page: number = 1) {
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/presence?page=${page}&limit=15`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}
