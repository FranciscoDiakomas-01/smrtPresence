
export default function isLogged() {
  const token = localStorage.getItem("token")
  console.log(token)
  return token !== null
}