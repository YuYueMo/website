import "./style.less";
const MyPage = () => {
  return (
    <div className="myBox">
      <div className="myContent">
        <div className="baseInfo">
          <h2>基础信息</h2>
          <ul>
            <li>姓名：汪冉洋(男)</li>
            <li>手机号：13937627224</li>
            <li>学历：本科(全日制)</li>
            <li>专业：计算机科学与技术</li>
            <li>邮箱：13937627224@163.com</li>
          </ul>
        </div>
        <div className="baseInfo userAdvantages">
          <h2>个人优势</h2>
          <ul className="numList" >
            <li>开发框架：精通React开发框架，熟练使用Vue开发框架；</li>
            <li>项目框架：熟练使用Umi Max和Taro框架；</li>
            <li>开发组件：精通Ant Design，ProComponents，TaroUI等常用组件库；</li>
            <li>开发语言：熟练使用JavaScript编程语言，包括DOM，语法函数；</li>
            <li>开发配合：精通云效，Apipost，蓝湖，飞书以及figma进行项目和其他开发人员配合；</li>
            <li>开发基础：熟练掌握HTML，CSS知识用于网页构建以及样式布局；</li>
            <li>熟练使用typescript进行类型处理；</li>
            <li>熟练使用高德API进行车辆轨迹绘制；</li>
            <li>熟练使用TaroUI进行微信小程序的开发；</li>
            <li>熟悉通过二次封装的Axios来和后端接口进行数据交互；</li>
            <li>了解浏览器兼容性问题，可以编写出兼容浏览器的代码</li>
          </ul>
        </div>
        <div className="baseInfo workExperience">
          <h2>工作经历</h2>
          <div className="workOne">
            <div className="companyName">
              <div>
                <h3>南京智能汇科技有限公司</h3>
                <p>前端开发工程师</p>
              </div>
              <div>2023.10-至今</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPage;
