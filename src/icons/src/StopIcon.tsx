import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const StopIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M12,4 C7.584,4 4,7.584 4,12 C4,16.416 7.584,20 12,20 C16.416,20 20,16.416 20,12 C20,7.584 16.416,4 12,4 Z M12,18.4 C8.464,18.4 5.6,15.536 5.6,12 C5.6,10.52 6.104,9.16 6.952,8.08 L15.92,17.048 C14.84,17.896 13.48,18.4 12,18.4 Z M17.048,15.92 L8.08,6.952 C9.16,6.104 10.52,5.6 12,5.6 C15.536,5.6 18.4,8.464 18.4,12 C18.4,13.48 17.896,14.84 17.048,15.92 Z"
    />
  </SvgIcon>
);

export default StopIcon;
