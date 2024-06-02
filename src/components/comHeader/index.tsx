import { MenuUnfoldOutlined } from "@ant-design/icons";
import "./styles.less";
import { Dropdown, MenuProps } from "antd";
const ComHeader = (props: any) => {
  const { onClick } = props;
  const pathname = window.location.pathname;
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a target="_blank" href="https://blog.csdn.net/m0_53825856?type=blog">
          CSDN
        </a>
      ),
    },
  ];

  return (
    <div className="headerBox">
      <div className="headerTitle">
        <div className="headerShow">
          <div onClick={onClick}>
            <MenuUnfoldOutlined style={{ fontSize: "18px" }} />
          </div>
        </div>
        <a href="/">汪冉洋的小站</a>
      </div>
      <div className="headerContent">
        <ul>
          <li>
            <a
              style={
                pathname === "/"
                  ? { borderBottom: "2px solid skyblue" }
                  : { borderBottom: "none" }
              }
              href="/"
            >
              首页
            </a>
          </li>
          <li>
            <a
              style={
                pathname === "/technology"
                  ? { borderBottom: "2px solid skyblue" }
                  : { borderBottom: "none" }
              }
              href="/technology"
            >
              面试积累
            </a>
          </li>
          <li>
            <a
              style={
                pathname === "/problem"
                  ? { borderBottom: "2px solid skyblue" }
                  : { borderBottom: "none" }
              }
              href="/problem"
            >
              日常问题解决分享
            </a>
          </li>
          <li>
            <Dropdown menu={{ items }} className="dropdownBtn">
              <a onClick={(e) => e.preventDefault()}>博客</a>
            </Dropdown>
          </li>
          <li>
            <a
              style={
                pathname === "/my"
                  ? { borderBottom: "2px solid skyblue" }
                  : { borderBottom: "none" }
              }
              href="/my"
            >
              关于我
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ComHeader;
