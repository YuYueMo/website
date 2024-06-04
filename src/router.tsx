import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPage from "./pages/my";
import ProblemPage from "./pages/problem";
import HomePage from "./pages/home";
import ComHeader from "./components/comHeader";
import "./index.less";
import TechnologyPage from "./pages/technology";
import BlogPage from "./pages/blog";
import { useEffect, useRef, useState } from "react";
import { Col, Divider, Row } from "antd";

export default function Router() {
  const [open, setOpen] = useState(false);
  const [isHeaderClicked, setIsHeaderClicked] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const showDrawer = () => {
    setIsHeaderClicked(true); // 标记为标题栏点击事件
    setOpen(!open);
  };

  useEffect(() => {
    /* eslint-disable */
    const handleClickOutside = (event: any) => {
      if (
        divRef.current &&
        !divRef.current?.contains(event.target) &&
        open &&
        !isHeaderClicked // 如果是标题栏点击事件，则不执行关闭逻辑
      ) {
        setOpen(false);
      }
      setIsHeaderClicked(false); // 重置标题栏点击状态
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, isHeaderClicked]);
  // const clickFooter = () => {
  //   window.open("https://beian.miit.gov.cn/");
  // };
  return (
    <div className="pageBox">
      <Row>
        <Col span={24}>
          <ComHeader onClick={showDrawer} />
        </Col>
        <Col span={24}>
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/my" element={<MyPage />}></Route>
                <Route path="/problem" element={<ProblemPage />}></Route>
                <Route path="/blog" element={<BlogPage />}></Route>
                <Route path="/technology" element={<TechnologyPage />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </Col>
        {/* <Col span={24}>
          <ComFooter onClick={clickFooter} />
        </Col> */}
      </Row>
      {open && (
        <div className="drawrBox" ref={divRef}>
          <ul>
            <li>
              <a href="/">首页</a>
            </li>
            <li>
              <a href="/technology">面试积累</a>
            </li>
            <li>
              <a href="/problem">日常问题解决分享</a>
            </li>
            <li>
              <a href="/blog">博客</a>
            </li>
            <li>
              <a href="/my">关于我</a>
            </li>
          </ul>
          <Divider></Divider>
        </div>
      )}
    </div>
  );
}
