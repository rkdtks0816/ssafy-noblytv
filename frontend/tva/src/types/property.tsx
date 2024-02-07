export interface ChildModalProps {
  title?: string;
  content: string | JSX.Element;
  isActive?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
  isFullScreen?: boolean;
}
