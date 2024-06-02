import { Anchor, Col, Row } from "antd";
import "./styles.less";
import { AnchorItem } from "./configProps";

const TechnologyPage = () => {
  return (
    <div className="technologyBox">
      <Row>
        <Col span={6}>
          <div className="technologyLeft">
            <Anchor items={AnchorItem()} />
          </div>
        </Col>
        <Col span={18}>
          <div className="technologyRight">
            <div id="htmlId">
              <h2>Html</h2>
            </div>
            <div id="cssId">
              <h2>Css</h2>
            </div>
            <div id="javascriptId">
              <h2>Javascript</h2>
            </div>
            <div id="reactId">
              <h2>React</h2>
            </div>
            <div id="vueId">
              <h2>Vue</h2>
            </div>
            <div id="typescriptId">
              <h2>Typescript</h2>
            </div>
            <div id="nodeId">
              <h2>Node</h2>
            </div>
            <div id="gitId">
              <h2>Git</h2>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TechnologyPage;
