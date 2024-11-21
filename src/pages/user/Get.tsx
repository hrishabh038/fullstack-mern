import React from "react";
import Box1 from "../../containers/Box1";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Props {}

const Get = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex justify-center p-4 overflow-auto">
      <div className="w-[800px] flex flex-col gap-4">
        <div
          className="flex items-center gap-3 text-purple-500 text-xs cursor-pointer w-fit mb-4"
          onClick={() => navigate("/user")}
        >
          <div className="bg-purple-500 text-white p-1 rounded-full">
            <FaLongArrowAltLeft />
          </div>{" "}
          Back to profiles
        </div>

        <Box1 className="w-full">
          <>hello</>
        </Box1>
        <Box1 className="w-full">
          <>hello</>
        </Box1>
        <Box1 className="w-full">
          <>hello</>
        </Box1>
        <Box1 className="w-full">
          <>hello</>
        </Box1>
      </div>
    </div>
  );
};

export default Get;
