export async function getAllTeachers(page: number = 1) {
  const limit = 15;
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/teachers?limit=${limit}&page=${page}`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}

export async function getTeacherbyId() {
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/teacher`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  console.log(response);
  return response;
}

export async function deleteTeacherByid(id: number) {
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/teacher/${id}`;
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

export async function getAllTeacherPresence(page: number = 1, id: number) {
  const limit = 15;
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/presence/${id}?limit=${limit}&page=${page}`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}
export async function getTeacherBySearch(text: string) {
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/teachers/search/${text}`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}

interface Iteacher {
  name: string;
  lastname: string;
  email: string;
}

export async function CreateTeacher(teacher: Iteacher) {
  try {
    const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/teacher`;
    const token = localStorage.getItem("token");
    const API = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(teacher),
    });
    const response = await API.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error as string;
  }
}

export interface IVacation {
  id: number;
  vacation: string;
  status: number;
}

export async function Vacation(vacation: IVacation) {
  try {
    const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/teacherstatus`;
    const token = localStorage.getItem("token");
    const API = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(vacation),
    });
    const response = await API.json();
    return response;
  } catch (error) {
    return error as string;
  }
}

interface ITeacherUpdate {
  name: string;
  lastname: string;
  email: string;
  password: string;
  oldpassword: string;
  oldemail: string;
}

export async function updateTeacher(teacher: ITeacherUpdate) {
  if (!teacher.email) {
    teacher.email = teacher.oldemail;
  }
  if (!teacher.password) {
    teacher.password = teacher.oldpassword;
  }
  const url =
    "https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/teacher";
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(teacher),
  });
  const response = await API.json();
  return response;
}

export async function getTeacherPresence(page: number = 1) {
  const limit = 10;
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/teacherpresence?limit=${limit}&page=${page}`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}
