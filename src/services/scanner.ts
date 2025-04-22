export default async function createPresence(token: string) {
  const data = {
    token_teacher: token,
    date:
      String(new Date().toLocaleDateString("pt")) +
      " --- " +
      String(new Date().toLocaleTimeString("pt")),
    hour: String(new Date().getHours()).padStart(2, "0"),
  };
  try {
    const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/presence`;
    const token = localStorage.getItem("token");
    const API = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const response = await API.json();
    return response;
  } catch (error) {
    return error as string;
  }
}

export async function updatePresence(token: string) {
  const data = {
    token_teacher: token,
    date: String(new Date().toLocaleTimeString("pt")),
    hour: String(new Date().getHours()).padStart(2, "0"),
  };
  try {
    const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/presence`;
    const token = localStorage.getItem("token");
    const API = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(data),
    });
    const response = await API.json();
    return response;
  } catch (error) {
    return error as string;
  }
}
