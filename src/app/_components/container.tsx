type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div style={{ maxWidth: "705px" }} className="mx-auto px-5">
      {children}
    </div>
  );
};

export default Container;
