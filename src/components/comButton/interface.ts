


export interface ComButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  name?: string;
  style?: React.CSSProperties;
  // htmlType?: 'button' | 'submit' | 'reset';
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  // danger?: boolean;
  // ghost?: boolean;
  // block?: boolean;
  // shape?: 'default' | 'circle' | 'round';
  // size?: 'large' | 'middle' | 'small';
  // loadingIcon?: React.ReactNode;
  // loadingText?: string;
}