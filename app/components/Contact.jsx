import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto flex  md:flex-row flex-col gap-4 my-8">
      <div className="md:px-0 px-3">
        <h1 className="sm:text-2xl text-1xl font-bold underline text-green-700 capitalize">
          get in touch with us
        </h1>
        <p className="text-gray-600 mb-2">
          contact us with your house details, if you have house to sell for us{" "}
        </p>

        <div className="flex items-center gap-3 mb-2">
          <span>
            <HiOutlineLocationMarker
              size={30}
              className="text-green-600 bg-gray-100 p-2 rounded-full"
            />
          </span>
          <div>
            <h1 className="font-semibold ">Our office address</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 my-4">
          <span>
            <FaRegEnvelope
              size={30}
              className="text-green-950 bg-gray-100 p-2 rounded-full"
            />
          </span>
          <div>
            <h1 className="font-semibold ">Email</h1>
            <p className="text-gray-950">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <span>
            <MdOutlineLocalPhone
              size={30}
              className="text-green-950 bg-gray-100 p-2 rounded-full"
            />
          </span>
          <div>
            <h1 className="font-semibold ">Phone</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-5 md:px-5 px-3 sm:rounded-sm rounded-sm flex-1">
        <h1 className="my-2 font-semibold">Looking to make an enquiry</h1>
        <form className="flex  flex-col gap-2 ">
          <input
            type="text"
            placeholder="name"
            className="p-2 bg-white rounded-sm outline-none"
          />
          <input
            type="email"
            placeholder="email"
            className="p-2 bg-white rounded-sm outline-none"
          />
          <input
            type="number"
            placeholder="contact"
            className="p-2 bg-white rounded-sm outline-none"
          />
          <textarea
            id=""
            rows={5}
            placeholder="your message"
            className="outline-none px-2"
          ></textarea>
          <button className="p-3 text-white flex items-center font-semibold justify-center capitalize gap-4 rounded-md hover:bg-green-950 bg-green-950">
            {" "}
            send message <BsFillSendFill size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
