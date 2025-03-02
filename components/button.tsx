"use client"; // Ensure this is at the top

type BlogSlug = {
  id: string;
};

interface ButtonProps {
  id?: string | BlogSlug; // Allow both types
}

const MyButton: React.FC<ButtonProps> = ({ id }) => {
  const handleClick = () => {
    window.location.href = "/blog";
  };
  const handleClickHome = () => {
    window.location.href = "/";
  };

  return (
    <p className="text-2xl font-bold">
      <button onClick={handleClickHome} className="p-4">
        Home
      </button>
      /
      <button onClick={handleClick} className="p-4">
        Blog
      </button>
      {id ? ` / ${typeof id === "string" ? id : id.id}` : ""}
    </p>
  );
};

export default MyButton;
