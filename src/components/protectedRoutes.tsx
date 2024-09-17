import { ReactNode  } from "react";
import { Navigate } from "react-router-dom";
interface IProps {
  isLoggedIn: boolean;
  children: ReactNode;
  to: string;
}
const ProtectedRoutes = ({ isLoggedIn, to, children }: IProps) => {
  if (!isLoggedIn) return <Navigate to={to} />;
  return (<>{children}</>);
};
export default ProtectedRoutes;
