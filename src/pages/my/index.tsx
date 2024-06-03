import "./style.less";
const MyPage = () => {
  return (
    <div className="myBox">
      <div className="myContent">
        <div className="baseInfo">
          <h2>基础信息</h2>
          <ul>
            <li>姓名：汪冉洋(男)</li>
            <li>2+年工作经验</li>
            <li>中高端前端开发工程师</li>
            <li>手机号：13937627224</li>
            <li>学历：本科(全日制)</li>
            <li>专业：计算机科学与技术</li>
            <li>邮箱：13937627224@163.com</li>
          </ul>
        </div>
        <div className="baseInfo userAdvantages">
          <h2>个人优势</h2>
          <ul className="numList" >
            <li>精通 HTML5 和 CSS3 的布局与样式；</li>
            <li>掌握 JavaScript（ES6+）语法，熟练运用；</li>
            <li>熟练使用 React 框架，掌握 Vue 框架；</li>
            <li>熟悉 Ant Design、TaroUI 和 Element 等组件库；</li>
            <li>熟悉 Umi Max、Taro 等前端应用开发框架；</li>
            <li>掌握 Webpack、Vite 等构建工具的配置与使用；</li>
            <li>熟练运用 Git 进行团队协作；</li>
            <li>了解 Unix 命令；</li>
            <li>了解前端项目发布与部署；</li>
            <li>了解微前端框架 Qiankun；</li>
            <li>在小程序和移动端项目开发有经验；</li>
            <li>了解浏览器兼容性问题，能编写兼容性代码；</li>
            <li>了解 Python 和 Android 开发。</li>
            A
          </ul>
        </div>
        <div className="baseInfo workExperience">
          <h2>工作经历</h2>
          <div className="workOne">
            <div className="companyName">
              <div className="companyNameBox">
                <h3>南京信息有限公司</h3>
                <p>前端开发工程师</p>
              </div>
              <div className='companyTime' >2023.10-至今</div>
            </div>
            {/*工作内容*/}
            <div className='workContent'>
              <p>工作内容</p>
              <ul>
                <li>熟练使用 React 全家桶，高效开发业务且代码可读性维护性高；</li>
                <li>封装项目中高频出现组件；</li>
                <li>封装项目中常用数据结构处理函数;</li>
                <li>利用MockJs等工具提升项目开发效率；</li>
                <li>使用Husky、Eslint、Pritter等工具规范项目代码；</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPage;
