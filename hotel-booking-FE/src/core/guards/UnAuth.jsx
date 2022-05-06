import { Redirect } from "react-router-dom";
import { useAuthenticated } from "../hooks/useAuthenticated";

export default function UnAuth({ children }) {
  const authenticated = useAuthenticated();
  console.log(authenticated);
  if (authenticated) {
    return <Redirect to="/" />;
  }
  return <>{children}</>;
}
