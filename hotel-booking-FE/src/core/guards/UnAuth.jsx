import { Redirect } from "react-router-dom";
import { useAuthenticated } from "../hooks/useAuthenticated";

export default function UnAuth({ children }) {
  const authenticated = useAuthenticated();
  if (authenticated) {
    return <Redirect to="/" />;
  }
  return <>{children}</>;
}
