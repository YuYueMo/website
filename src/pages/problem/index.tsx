import "./styles.less";
const ProblemPage = () => {
  return (
    <div className="problemPage">
      <dl>
        <dt>1.处理form校验问题</dt>
        <dd className="onlyOne">
          使用组件时会有form.validateFields()进行处理，需要使用async
          await，否则会造成异步;
          之前使用getFieldsValue()会让表单列表未进行校验且没有提示。非组件需要对字段进行校验处理。
        </dd>
        <dt>2.</dt>
      </dl>
    </div>
  );
};
export default ProblemPage;
