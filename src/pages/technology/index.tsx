import { Anchor, Col, Row } from "antd";
import "./styles.less";
import { AnchorItem } from "./configProps";

const TechnologyPage = () => {
  return (
    <div className="technologyBox">
      {/* <Row gutter={24}>
        <Col span={6}> */}
      <div className="technologyLeft">
        <Anchor items={AnchorItem()} />
      </div>
      {/* </Col>
        <Col span={18}> */}
      <div className="technologyRight">
        {/* HTML */}
        <div id="htmlId">
          <h2>HTML</h2>
          <dl>
            <dt>1.BOM,DOM</dt>
            <dd>
              BOM(Browser Object
              Model):浏览器对象模型，用于访问和操作网页文档的对象模型。
            </dd>
            <dd style={{ marginBottom: 10 }}>
              DOM(Document Object
              Model):文档对象模型，用于控制浏览器窗口及其各个组件的对象模型。
            </dd>
            <dt>2.前端跨页面通信方法</dt>
            <dd>
              (1)LocalStorage 或 SessionStorage。
              存储大小为5MN-10MB;差别:SessionStorage在页签关闭存储数据会清除;
              LocalStorage仍存在除非浏览器清除缓存。
            </dd>
            <dd>(2)cookie:存储大小为4KB;cookie不支持跨域。</dd>
            <dd>
              (3)IndexedDB:浏览器提供的一个客户端数据库;非沙箱网站为50-100MB,
              沙箱网站为几MB。
            </dd>
            <dd>(4)WebSocket:基于TCP协议的实时通讯协议。</dd>
            <dd>
              (5)PostMessage:window.postMessage()
              方法允许从一个窗口向另一个窗口发送消息。
            </dd>
            <dd>
              (6)Broadcast
              Channel:允许在同一浏览器下的不同上下文之间进行双向通信(类似于发布-订阅模式的机制)。
            </dd>
            <dd style={{ marginBottom: 10 }}>
              (7)SharedWorker:是一个可由多个窗口或标签页共享的 Web
              Worker,可以在不同页面之间进行跨页面通信。
            </dd>
            <dt>3.DOM树</dt>
            <dd style={{ marginBottom: 10 }}>
              从网络传给渲染引擎的 HTML
              文件字节流是无法直接被渲染引擎理解的，所以要将其转化为渲染引擎能够理解的内部结构，这个结构就是
              DOM。会将 Web 页面和 JavaScript 脚本连接起。
            </dd>
            <dd>HTML 解析器负责将 HTML 字节流转换为 DOM 结构。</dd>
            <dt>4.行内元素?块级元素?空元素?有哪些</dt>
            <dd>行内元素:span,strong,em,a,img,input</dd>
            <dd>块级元素:div,p,h1-h6,ul,ol,li,table,tr,td,th,form</dd>
            <dd style={{ marginBottom: 10 }}>
              空元素:br,hr,img,input,meta,link
            </dd>
            <dt>5.渐进增强与优雅降级</dt>
            <dd>
              渐进增强:针对低版本的浏览器进行页面重构,保证基本的功能情况下,再针对高级浏览器进行效果。
            </dd>
            <dd style={{ marginBottom: 10 }}>
              优雅降级:针对高级版本的浏览器进行页面重构,保证基本的功能情况下,再针对低版本浏览器进行兼容。
            </dd>
            <dt>6.页面加载白屏时间过长原因与优化</dt>
            <dd>原因:浏览器解析时间过长,页面渲染资源过大时。</dd>
            <dd style={{ marginBottom: 10 }}>
              优化:DNS优化解析(预加载,优先缓存,);TCP网络优化(购买更好服务器);服务端优化(Redis缓存,数据库优化);精简HTML代码结构,优化CSS,JS代码位置等。
            </dd>
            <dt>7.HTML 页面的生命周期</dt>
            <dd>
              DOMContentLoaded —— 浏览器已完全加载 HTML,并构建了DOM树。DOM
              已经就绪，并初始化接口。
            </dd>
            <dd>
              load —— 浏览器已加载并解析了所有 HTML,并构建了 DOM 树和渲染树
            </dd>
            <dd style={{ marginBottom: 10 }}>
              beforeunload(正在离开)/unload(几乎已经离开) ——
              当用户正在离开页面时。
            </dd>
            <dt>8.HTML5新增特性</dt>
            <dd>
              (1)语义化标签:header footer 、 nav 、 aside 、 section 、 meau 、
              template 、 article 、 audio 、 video 、 canvas 等
            </dd>
            <dd>(2)webStorage 储存机制 sessionStorage 和 localStorage</dd>
            <dd>(3)history 对象:go();back();forward()</dd>
            <dd>(4)表单元素的升级:给表单元素新增加属性placeholder</dd>
            <dd>(5)多媒体:用于回放的 video 和 audio 元素</dd>
            <dd>(6)用于绘画的 canvas</dd>
          </dl>
        </div>
        {/* CSS */}
        <div id="cssId">
          <h2>CSS</h2>
          <dl>
            <dt>1.Animation、Transition 和 Transform</dt>
            <dd>
              animation
              属性用于创建复杂的动画序列。动画的名称、持续时间、动画方式（timing
              function）、延迟时间、播放次数等来控制动画的效果{" "}
            </dd>
            <dd>
              transition 属性用于在状态变化时平滑过渡 property(css属性名称/all)
              duration(完成过渡时间) timing-function(过渡函数)
              delay(开始出现延迟时间);
            </dd>
            <dd style={{ marginBottom: 10 }}>
              transform 属性用于对元素进行变形rotate();
              scale();translate();skew()
            </dd>
            <dt>2.移动端适配</dt>
            <dd style={{ marginBottom: 10 }}>
              响应式设计;弹性布局;网格布局;图片和多媒体适配;移动端优先;交互友好;测试和调试
            </dd>
            <dt>3.CSS新增特效</dt>
            <dd>(1)选择器</dd>
            <dd>(2)新样式(边框,背景,文字,颜色)</dd>
            <dd>(3)transition 过渡</dd>
            <dd>(4)transform 转换</dd>
            <dd>(5)animation 动画</dd>
            <dd>(6)渐变</dd>
            <dd style={{ marginBottom: 10 }}>
              (7)还包括flex弹性布局、Grid栅格布局；媒体查询等
            </dd>
            <dt>4.重绘于回流</dt>
            <dd>
              重绘:计算好盒模型位置大小及其他属性，浏览器根据盒子特性进行绘制；时机是DOM元素新增属性或修改属性（颜色，文本方向，阴影修改）。
            </dd>
            <dd style={{ marginBottom: 10 }}>
              回流：布局引擎会根据各种样式计算盒子在页面上大下与位置；时机则是DOM元素发生变化。
            </dd>
            <dt></dt>
          </dl>
        </div>
        {/* Js */}
        <div id="javascriptId">
          <h2>Javascript</h2>
        </div>
        {/* React */}
        <div id="reactId">
          <h2>React</h2>
        </div>
        {/* Vue */}
        <div id="vueId">
          <h2>Vue</h2>
        </div>
        {/* Typescript */}
        <div id="typescriptId">
          <h2>Typescript</h2>
        </div>
        {/* Node */}
        <div id="nodeId">
          <h2>Node</h2>
        </div>
        {/* Git */}
        <div id="gitId">
          <h2>Git</h2>
        </div>
      </div>
      {/* </Col>
      </Row> */}
    </div>
  );
};

export default TechnologyPage;
