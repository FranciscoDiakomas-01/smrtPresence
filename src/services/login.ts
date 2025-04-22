export interface Body {
  email?: string;
  password?: string;
  type?: number;
}
export default async function loginFunc(body: Body) {
  const adminAPI =
    "https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/admin/login";
  const coordAPI =
    "https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/coord/login";
  const teacherAPI =
    "https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/teacher/login";
  try {
    if (!body.email || !body.password) {
      return "Please fill all fields";
    }
    if (body.type == undefined) {
      return "Please select a type";
    }

    if (body.type == 1) {
      const API = await fetch(adminAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const response = await API.json();
      console.log(response);
      return response;
    } else if (body.type == 2) {
      const API = await fetch(teacherAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const response = await API.json();
      return response;
    } else {
      const API = await fetch(coordAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const response = await API.json();
      return response;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}
