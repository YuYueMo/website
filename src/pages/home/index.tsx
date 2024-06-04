// import { useNavigate } from 'react-router-dom'
import ComFooter from "../../components/comFooter";
import "./style.less";
const HomePage = () => {
  const clickFooter = () => {
    window.open("https://beian.miit.gov.cn/");
  };
  // const navigate = useNavigate()
  return (
    <div className="homeBox">
      <div className="homeContent">
        <div className="homeImg"></div>
        <div className="homeText">
          <h2>汪冉洋的学习笔记及日常问题解决分享。</h2>
          <h3>默观风起，静见枫落。</h3>
          <h3>不断进步，不求甚解。</h3>
        </div>
      </div>
      <div>
        <ComFooter onClick={clickFooter} />
      </div>
    </div>
  );
};
export default HomePage;
