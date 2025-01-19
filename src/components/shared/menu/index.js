import { Outlet, useNavigate } from "react-router";
import { FloatButton, List, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import menu from "../../../data/menu";
import "./index_menu.scss";

const Menu = () => {
  const nav = useNavigate();
  const showMenu = useSelector((state) => state.menu.menu);
  const isMobile = useSelector((state) => state.core.isMobile);

  if (isMobile) {
    return (
      <>
        {showMenu && (
          <FloatButton.Group
            tooltip="Menu"
            trigger="click"
            type="primary"
            icon={<MenuOutlined />}
          >
            {menu.map((item, index) => (
              <FloatButton
                key={index}
                shape="square"
                tooltip={item?.name}
                style={{ insetInlineEnd: 24 }}
                icon={item?.icon}
                onClick={() => {
                  nav(item?.path);
                }}
              />
            ))}
          </FloatButton.Group>
        )}
        <Outlet />
      </>
    );
  }

  return (
    <>
      {showMenu && (
        <List
          className="menu"
          dataSource={menu}
          renderItem={(item) => (
            <List.Item
              className="item shadow-one"
              onClick={() => {
                nav(item?.path);
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
