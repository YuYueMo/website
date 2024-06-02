import "./styles.less";
const ComFooter = (props: any) => {
  const { onClick } = props;
  return (
    <div className="footerBox">
      <div className="footContent">
        <div className="footUse">
          MIT Licensed | Copyright &copy; 2024-present Wang Ranyang
        </div>
        <div className="fillBox" onClick={onClick}>
          豫ICP备2024054074号-1
        </div>
      </div>
    </div>
  );
};
export default ComFooter;
