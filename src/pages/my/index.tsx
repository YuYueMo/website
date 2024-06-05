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
              <div className="projectNameRight">2023.10-2024.02</div>
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
          <div className="projectThree">
            <div className="projectName">
              <div className="projectNameLeft">
                <h3>司机任务分配(小程序+移动端)</h3>
                <p>前端开发工程师</p>
              </div>
              <div className="projectNameRight">2024.01-2024.03</div>
            </div>
            <div className="projectDetail">
              项目描述：本项目主要为司机领取机械化管理设定的任务所制作的移动端与小程序。
              司机根据自己所在片区查看片区所有任务，领取属于自己的任务，并填写相关数据用于考核。
            </div>
            <div className="projecttechnology">
              项目技术：小程序(React + Taro + TaroUI + Redux ); 移动端(React +
              Umi + Antd-Mobile + Mockjs )
            </div>
            <div className="projectDuty">
              <p>项目职责:</p>
              <ul>
                <li>负责任务领取，任务大厅以及历史任务开发;</li>
                <li>处理不同时间段展示不同任务;</li>
                <li>处理IOS和Android的navigationBar差异;</li>
                <li>研究不同系统在小程序与移动端适配问题。</li>
              </ul>
            </div>
          </div>
          {/* 4 */}
          <div className="projectFour">
            <div className="projectName">
              <div className="projectNameLeft">
                <h3>知权专利</h3>
                <p>前端开发工程师</p>
              </div>
              <div className="projectNameRight">2023.04-2024.09</div>
            </div>
            <div className="projectDetail">
              项目描述：本项目主要海口一律所针对用户申请专利所开发。用户进入平台注册登录后可进行专利申请，
              同时可以查看自己的专利申请进度。律所端可以查看所有专利申请进度，并查看专利申请详情。
            </div>
            <div className="projecttechnology">
              项目技术：React + And Design + Axios + AHooks + Vite
            </div>
            <div className="projectDuty">
              <p>项目职责:</p>
              <ul>
                <li>负责申请专利页面，用户中心页面，专利进度页面开发;</li>
                <li>处理页面搜索防抖提高使用体验;</li>
                <li>使用Ant Design进行页面绘制;</li>
              </ul>
            </div>
          </div>
          {/* 5 */}
          <div className="projectFive">
            <div className="projectName">
              <div className="projectNameLeft">
                <h3>知会</h3>
                <p>前端开发工程师(实习)</p>
              </div>
              <div className="projectNameRight">2022.10-2023.02</div>
            </div>
            <div className="projectDetail">
              项目描述：本项目主要做的是公司内部信息发布通知系统。员工端主要用于获取所属部门发布信息通知等。
              领导端则对当前部门事项进行通知发布。
            </div>
            <div className="projecttechnology">
              项目技术：React + And Design + Axios + AHooks + Dayjs + Vite +
              Redux
            </div>
            <div className="projectDuty">
              <p>项目职责:</p>
              <ul>
                <li>负责用户中心页面，信息展示页面开发;</li>
                <li>根据UI图绘制相关页面与交互;</li>
                <li>研究React相关hooks的使用;</li>
              </ul>
            </div>
          </div>
          {/* 6 */}
          <div className="projectFive">
            <div className="projectName">
              <div className="projectNameLeft">
                <h3>趣卡淘</h3>
                <p>前端开发工程师(实习)</p>
              </div>
              <div className="projectNameRight">2022.05-2022.09</div>
            </div>
            <div className="projectDetail">
              项目描述：本项目用于发布收藏卡片的App。用户注册登录后可以查看所有卡片，
              若有想出售的卡片可以在发布卡片页面填写相关信息进行卡片发布。
            </div>
            <div className="projecttechnology">
              项目技术：Vue + ElementUI + Axios + Lodash + Vite
            </div>
            <div className="projectDuty">
              <p>项目职责:</p>
              <ul>
                <li>负责用户中心页面，卡片详情页面开发;</li>
                <li>根据UI图绘制相关页面与交互;</li>
                <li>了解整个项目不同模块需求绘制相关交互;</li>
                <li>研究Vue相关语法糖的使用。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBox">
        <ComFooter onClick={clickFooter} />
      </div>
    </div>
  );
};
export default MyPage;
