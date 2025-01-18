import { Outlet, useNavigate } from "react-router";
import { List, Typography } from "antd";
import { useSelector } from "react-redux";
import menu from "../../../data/menu";
import "./index_menu.scss";

const Menu = () => {
  const nav = useNavigate();
  const showMenu = useSelector((state) => state.menu.showMenu);
  const isMobile = useSelector((state) => state.core.isMobile);

  return (
    <>
      {showMenu && (
        <List
          className={isMobile ? "menu-mobile" : "menu"}
          dataSource={menu}
          renderItem={(item) => (
            <List.Item
              className="item shadow-one"
              onClick={(item) => {
                const path = item?.target?.children[0]?.attributes[1]?.value;
                nav(path);
              }}
            >
              <Typography.Text key={item?.path} name={item?.path}>
                {item?.name}
              </Typography.Text>
            </List.Item>
          )}
        />
      )}
      <Outlet />
    </>
  );
};

export default Menu;
