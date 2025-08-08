import styles from "./ModalTemplate.module.css";

type ModalTemplateProps = {
  children: React.ReactNode;
};

const ModalTemplate = ({ children }: ModalTemplateProps) => {
  return <div>{children}</div>;
};

export default ModalTemplate;
