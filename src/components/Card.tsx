import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
import { removeContact } from "./middleware/store";

const Card = ({ details }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="lg:w-[300px] w-[250px] border-2 border-teal-500 p-5 m-2 rounded shadow-md bg-current ">
      <div className="flex lg:flex-col items-center">
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Text" height={56} width={90} />
      </div>
      <p className="text-lg text-teal-50 text-center">
        {details.firstName} {details.lastName}
      </p>
      <div className="flex lg:flex-col flex-row gap-5 mt-5">
        <Link to="/contacts/edit" state={details} className="w-full">
          <Button text="edit" variant="edit" />
        </Link>
        <Button
          onClick={() => {
            dispatch(removeContact(details?.id));
          }}
          text="delete"
          variant="delete"
        />
      </div>
    </div>
  );
};

export default Card;
