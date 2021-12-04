import { Link } from "react-router-dom";
import { dashboardMenus } from "../../config/dashboard-menu";
import { TDashboardMenu } from "../../types/dashboard-menu.type";

import "./sidebar.scss";

type TSidebarMenuProps = {
  menuItems?: TDashboardMenu[];
};

const SidebarMenu: React.FC<TSidebarMenuProps> = ({
  menuItems = dashboardMenus,
}) => {
  return (
    <ul className="manu-list">
      {menuItems.map((menu: TDashboardMenu, index: any) => {
        return (
          <li key={index}>
            <Link to={menu.path}>
              <img
                src={menu.iconImagePath}
                alt={menu.label}
                width="24"
                height="28"
                className="pb-2 w-h-size"
              />
              <p> {menu.label} </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default SidebarMenu;
