import "./styles.less";
import { ComButtonProps } from "./interface";
// import "./btnJson"

const ComButton: React.FC<ComButtonProps> = (props) => {
  // const { children , ...realProps} = props
  const { children } = props;

  return (
    <button>
      <span>{children}</span>
    </button>
  );
};
export default ComButton;
