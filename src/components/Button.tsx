

const Button = ({ text, onClick, width, variant }: any) => {
  return (
    <>
      {variant === "edit" ? (
        <button onClick={onClick} className="border-green-500 p-2 border text-base text-green-500 hover:bg-green-950 uppercase rounded hover:shadow-md w-full">
          {text}
        </button>
      ) : variant === "delete" ? (
        <button onClick={onClick} className="border-red-400 p-2 border text-base text-red-400 hover:bg-red-950 uppercase rounded hover:shadow-md w-full">
          {text}
        </button>
      ) : variant === "create" ?(
        <button
          onClick={onClick}
          className={`bg-black p-4 text-base font-medium text-white tracking-widest rounded hover:shadow-md ${
            width ? width : "w-full"
          } uppercase `}
        >
          {text}
        </button>
      ): (
        <button
          onClick={onClick}
          className={`border-teal-950 p-2 border p-4 hover:bg-teal-950 bg-teal-700 text-base font-medium text-white tracking-widest rounded hover:shadow-md ${
            width ? width : "w-full"
          } uppercase `}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
