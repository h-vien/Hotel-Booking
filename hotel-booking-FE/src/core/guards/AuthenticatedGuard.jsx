import { Redirect } from "react-router-dom";
import { useAuthenticated } from "../hooks/useAuthenticated";

export default function AuthenticatedGuard({ children }) {
  const authenticated = useAuthenticated();
  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return <>{children}</>;
}
