interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="font-bold text-6xl">{title}</h1>
    </div>
  );
};

export default Title;
