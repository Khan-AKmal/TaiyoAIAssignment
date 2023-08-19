import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Card from "../Card";
import Sidebar from "../Sidebar";
import notfound from "../assets/notFound.svg";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";

const Contacts = () => {

  // data from redux store
  const contacts = useSelector((state: any) => state.contacts);

  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div className="flex lg:flex-row flex-col">
      
      <Sidebar />
      <div className="lg:w-[75%] w-full">
        
      <div className="mx-[40%] mt-[20px] shadow-md">
          <Button
            variant = "create"
            text="Create Contact"
            onClick={() => {
              navigate("/contacts/create");
            }}
          />
      </div>

        <div className="flex flex-col justify-center items-center lg:m-0 m-5">
          {contacts?.items?.length > 0 ? (
            // render list if length is greater than 0
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10 ">
              {contacts.items?.map((item: any) => (
                <Card
                  details={item}
                  key={item?.id}
                />
              ))}
            </div>
          ) : (
            // if contacts are empty
            <div className="mt-10 border border-primary p-5 rounded flex items-center gap-5 bg-teal-50">
              <img
                className="w-[56px] h-[56px]"
                src={notfound}
                alt={notfound}
              />
              <p className="text-start text-primary font-medium">
                No contacts found!
                <br />
                Please add contact from <br /> Create Contact Button
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Contacts;
