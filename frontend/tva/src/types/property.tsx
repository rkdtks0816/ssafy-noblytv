export interface ChildModalProps {
  title: string;
  content: string;
  isActive?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
}
