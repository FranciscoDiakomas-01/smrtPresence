export async function getAllCalendarByTeacherId(id: number) {
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/calendar/${id}`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}

export async function getAllCalendarByTeacher() {
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/calendar`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}

export async function getTeacherCalendarByToken() {
  const token = localStorage.getItem("token");
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/calendarbytoken`;
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}

export async function deleteCalendarVyId(id: number) {
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/calendar/${id}`;
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

export async function getAllNames() {
  const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/allteachers`;
  const token = localStorage.getItem("token");
  const API = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const response = await API.json();
  return response;
}

interface calendar {
  teaherid: number;
  week_day: string;
  hour_start: string;
  hour_end: string;
}
export async function CreateCalendar(calendar: calendar) {
  try {
    const url = `https://yelping-cora-franciscodiakomas-01-ced8cbf6.koyeb.app/calendar/${calendar.teaherid}`;
    const token = localStorage.getItem("token");
    const API = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(calendar),
    });
    const response = await API.json();
    console.log(response);
    return response;
  } catch (error) {
    return error as string;
  }
}
