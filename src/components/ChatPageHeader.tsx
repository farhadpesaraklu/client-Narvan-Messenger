import React, { useState, useEffect } from "react";
import axios from "axios";
interface Props {
  onClosButton?: () => void;
}
// const getMembers = async () => {
//   const { data } = await axios({
//     method: "get",
//     headers: {},
//     url: "http://192.168.10.111:3033/usercount",
//   });
//   console.log("sdgsdgdsfgasdg", data);
  
// };

const ChatPageHeader: React.FC<Props> = ({ onClosButton }) => {
  const [members, setMembers] = useState("...");

  useEffect(() => {
    // const members = getMembers();
    // setMembers(members)
    getMembers();
    
  }, []);
  const getMembers = async () => {
    const { data } = await axios({
      method: "get",
      headers: {},
      url: "http://192.168.10.111:3033/usercount",
    });
    console.log("numberrrrrrr", data);
    setMembers(data.Usercount)
    console.log(data.Usercount);
  };
  
  return (
    <div className=" has-background-info-light">
      <div className="chatPageHeaderContainer is-flex is-justify-content-space-between is-align-items-center">
        <span className="has-background-info-light" onClick={onClosButton}>
          <i className="fas fa-times has-text-primary-dark  is-clickable is-size-4" />
        </span>
        <div>
          <div className="is-flex is-justify-content-space-around is-align-items-center">
            <img
              className="chatPageHeaderImage is-justify-content-space-between is-align-items-center"
              alt=""
            />
            <div>
              <p className=" is-3 is-size-5  has-text-weight-bold has-text-primary-dark">
                Narvan Chat Room
              </p>
              <p className="has-text-justified is-size-7  has-text-weight-semibold has-text-primary-dark ">
                Participants:{" "}
                <span className="has-text-justified is-size-8 has-text-primary-dark p-2">
                  26
                </span>
              </p>
              <p className="has-text-justified is-size-7 has-text-weight-semibold has-text-primary-dark ">
                Online Members:{""}
                <span className="has-text-justified is-size-8 has-text-primary-dark p-2">
                  {members}
                </span>
              </p>
            </div>
          </div>
          <div>
          </div>
        </div>

        <span>
          <i className="fa fa-ellipsis-v has-text-primary-dark is-clickable is-size-4 mr-1"></i>
        </span>
      </div>
    </div>
  );
};
export default ChatPageHeader;
