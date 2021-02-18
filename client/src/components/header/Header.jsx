import React from "react";
import { Avatar, HelpIcon, NotificationsIcon } from "evergreen-ui";
import LogoIcon from "../../assets/icons/Logo";

import "./header.scss";

export default function Header() {
  return (
    <header>
      <LogoIcon width={28} height={28} />
      <div className="actions">
        <div>
          <HelpIcon size={24} color="disabled" />
        </div>
        <div>
          <NotificationsIcon size={24} color="disabled" />
        </div>

        <div className="avatar">
          <Avatar
            src="https://www.shareicon.net/data/256x256/2015/09/08/98071_man_512x512.png"
            size={45}
          />
        </div>
      </div>
    </header>
  );
}
