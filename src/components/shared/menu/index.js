import { Outlet, useNavigate } from "react-router";
import { FloatButton, List, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import menu from "../../../data/menu";
import "./index_menu.scss";
import { useRef } from "react";

const Menu = () => {
  const nav = useNavigate();
  const showMenu = useSelector((state) => state.menu.menu);
  const isMobile = useSelector((state) => state.core.isMobile);
  const myRef = useRef();

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
                  myRef.current.click();
                  nav(item?.path);
                }}
              />
            ))}
          </FloatButton.Group>
        )}
        {/* There is a bug in antd fab that if the menu is not closed it ,oves to
        bottom right outside visible screen. Therefore, added this hiddeb button
        to close opened FAB */}
        <button className="close-button" ref={myRef} />
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