export interface ICoord {
  name?: string;
  lastname?: string;
  email?: string;
}
export async function getAllCoord(page: number = 1) {
  const limit = 12;
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/coords?page=${page}&limit=${limit}`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}

export async function getAllCoordBySearch(text: string) {
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/coords/search/${text}`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}

export async function CoorddeleteByID(id: number) {
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/coord/${id}`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    method: "DELETE",
  });
  const response = await API.json();
  return response;
}

export async function getCoorbyId() {
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/coord`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}
export async function CoordtoogleStatus(coordid: number, status: boolean) {
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/coordstatus`;
  const token = localStorage.getItem("token");
  const body = {
    id: coordid,
    status: status,
  };

  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(body),
  });
  const response = await API.json();
  return response;
}

export async function CreateCoord(coord: ICoord) {
  try {
    const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/coord`;
    const token = localStorage.getItem("token");
    const API = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(coord),
    });
    const response = await API.json();
    return response;
  } catch (error) {
    return error as string;
  }
}

interface ICoordUpdate {
  name: string;
  lastname: string;
  email: string;
  password: string;
  oldpassword: string;
  oldemail: string;
}

export async function updateCoord(coord: ICoordUpdate) {
  if (!coord.email) {
    coord.email = coord.oldemail;
  }
  if (!coord.password) {
    coord.password = coord.oldpassword;
  }
  const url =
    "https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/coord";
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(coord),
  });
  const response = await API.json();
  return response;
}
