import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Button from "../Button";
import Input from "../Input";
import RadioButton from "../RadioButton";
import Navbar from "../Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addContact } from "../middleware/store";
import { updateContact } from "../middleware/store";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const radioItems = [
  {
    label: "Active",
    value: "Active",
  },
  {
    label: "Inactive",
    value: "Inactive",
  },
];

const CreateContact = ({ edit }: any) => {
  const { state } = useLocation();

  console.log(state, "from edit route");

  const dispatch = useDispatch();

  // settings current contact details
  useEffect(() => {
    setParams({
      firstName: state?.firstName,
      lastName: state?.lastName,
      status: state?.status,
    });
  }, [state]);

  // initial parameters
  const initialStates = {
    firstName: "",
    lastName: "",
    status: "",
  };

  const [params, setParams] = useState(initialStates);
  console.log(params);

  // to capture user input
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  // to handle radio button input
  const handleRadio = (e: any) => {
    setParams({ ...params, status: e.target.value });
  };

  const navigate = useNavigate();

  // to create a new contact and check for validation
  const handleSubmit = () => {
    if (!params.firstName || !params.lastName || !params.status) {
      return toast.warning("Please fill all the fields");
    } else {
      dispatch(addContact({ ...params, id: nanoid() }));
      navigate("/contacts");
    }
  };

  // to update the existing contact details
  const handleUpdate = () => {
    dispatch(updateContact({ ...params, id: state.id }));
    navigate("/contacts");
  };

  return (
    <>
      <Navbar />
      <div className="flex lg:flex-row flex-col">
        <Sidebar />
        <div className="lg:w-[1590px] w-full my-[10%]">
          <p className="text-center text-2xl font-medium text-teal-500 p-4 uppercase tracking-widest">
            {edit ? "Edit Contact" : "Create Contact"}
          </p>

          <div className="bg-black border border-teal-200 lg:w-[450px] lg:m-auto m-5 p-4 rounded flex flex-col gap-5">
            <Input
              label="First Name"
              placeholder="Lara"
              onChange={handleChange}
              value={params.firstName}
              name="firstName"
            />

            <Input
              label="Last Name"
              placeholder="Croft"
              onChange={handleChange}
              value={params.lastName}
              name="lastName"
            />

            <div className="flex items-center lg:gap-[85px] lg:justify-start md:justify-between gap-12">
              <p className="text-teal-50 font-medium">Status</p>

              <div className="w-[100px]">
                <RadioButton
                  onChange={handleRadio}
                  items={radioItems}
                  defaultValue={edit ? state.status : params?.status}
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Button
                onClick={edit ? handleUpdate : handleSubmit}
                text={edit ? "Save Edited Contact" : "Save Contact"}
                width="lg:w-[300px] rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateContact;
