import ComFooter from "../../components/comFooter";
import "./style.less";
const MyPage = () => {
  const clickFooter = () => {
    window.open("https://beian.miit.gov.cn/");
  };

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
          <ul className="numList">
            <li>精通 HTML5 和 CSS3 的布局与样式;</li>
            <li>掌握 JavaScript（ES6+）语法，熟练运用;</li>
            <li>熟练使用 React 框架，掌握 Vue 框架;</li>
            <li>熟悉 Ant Design、TaroUI 和 Element 等组件库;</li>
            <li>熟悉 Umi Max、Taro 等前端应用开发框架;</li>
            <li>掌握 Webpack、Vite 等构建工具的配置与使用;</li>
            <li>熟练运用 Git 进行团队协作;</li>
            <li>了解 Unix 命令;</li>
            <li>了解前端项目发布与部署;</li>
            <li>了解微前端框架 Qiankun;</li>
            <li>在小程序和移动端项目开发有经验;</li>
            <li>了解浏览器兼容性问题，能编写兼容性代码;</li>
            <li>了解 Python 和 Android 开发。</li>
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
              <div className="companyTime">2023.10-至今</div>
            </div>
            {/*工作内容*/}
            <div className="workContent">
              <p>工作内容</p>
              <ul>
                <li>
                  熟练使用 React 全家桶，高效开发业务且代码可读性维护性高;
                </li>
                <li>封装项目中高频出现组件;</li>
                <li>封装项目中常用数据结构处理函数;</li>
                <li>利用MockJs等工具提升项目开发效率;</li>
                <li>使用Husky、Eslint、Pritter等工具规范项目代码;</li>
              </ul>
            </div>
          </div>
          <div className="workTwo">
            <div className="companyName">
              <div className="companyNameBox">
                <h3>海口采料科技有限公司</h3>
                <p>前端开发工程师(实习)</p>
              </div>
              <div className="companyTime">2022.04-2023.09</div>
            </div>
            {/*工作内容*/}
            <div className="workContent">
              <p>工作内容</p>
              <ul>
                <li>快速/高效输出UI页面。且能多端适配;</li>
                <li>封装axios请求库，实现页面请求的异步加载，高效渲染;</li>
                <li>合理使用防抖、节流等优化手段，提示用户体验;</li>
                <li>快速定位bug点，及时修复，并记录在案，寻找更优解决方案;</li>
                <li>总结开发内容，记录在个人站点以及个人博客上。</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="baseInfo projectExperience">
          <h2>项目经历</h2>
          {/* 1 */}
          <div className="projectOne">
            <div className="projectName">
              <div className="projectNameLeft">
                <h3>云平台</h3>
                <p>前端开发工程师</p>
              </div>
              <div className="projectNameRight">2024.03-至今</div>
            </div>
            <div className="projectDetail">
              项目描述：本项目主要对当前公司所有系统进行集成化。
              用户通过自己账号所分配的岗位登录后查看分配菜单，
              在切换系统可以处理不同业务，减少用户来回切换系统。
            </div>
            <div className="projecttechnology">
              项目技术：React + Ant Design + UmijsMax + Typescript + Qiankun +
              Eslint + Husky
            </div>
            <div className="projectDuty">
              <p>项目职责:</p>
              <ul>
                <li>负责Web前端系统的页面开发及交互;</li>
                <li>与项目经理沟通选定合适的交互方式;</li>
                <li>封装项目高频组件;</li>
                <li>优化页面响应速度,提升用户体验;</li>
                <li>后期优化项目使用中出现的bug。</li>
              </ul>
            </div>
          </div>
          {/* 2 */}
          <div className="projectTwo">
            <div className="projectName">
              <div className="projectNameLeft">
                <h3>机械化管理</h3>
                <p>前端开发工程师</p>
              </div>
              <div className="projectNameRight">2023.10-2024.01</div>
            </div>
            <div className="projectDetail">
              项目描述：本项目主要为智能化所带来的我机械化考核所做项目。
              管理人员通过岗位为自己岗位下司机进行分配任务，可以在车辆轨迹查看司机是否行驶规定路线，
              完成所下发的任务。
            </div>
            <div className="projecttechnology">
              项目技术：React + Ant Design + Umijs + Mmockjs + 高德API + Xlsx
            </div>
            <div className="projectDuty">
              <p>项目职责:</p>
              <ul>
                <li>负责季节，车辆等页面开发;</li>
                <li>研究高德地图在车辆轨迹显示处理;</li>
                <li>规范代码维护性与可读性;</li>
                <li>根据项目流程完成项目;</li>
                <li>关注好的前端技术并用到项目中。</li>
              </ul>
            </div>
          </div>
          {/* 3 */}
          {/* 4 */}
          {/* 5 */}
        </div>
      </div>
      <div className="footerBox">
        <ComFooter onClick={clickFooter} />
      </div>
    </div>
  );
};
export default MyPage;
