import { useRoutes } from "react-router-dom";
import { routes } from './routes';

function RoutesList() {
  let element = useRoutes(routes);
  return element
}

export default RoutesList;