import React from "react";
import {
  Avatar,
  HelpIcon,
  MenuIcon,
  Pane,
  Popover,
  Position,
} from "evergreen-ui";
import Logo from "../logo/Logo";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./header.scss";

export default function Header() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  return (
    <header>
      <Logo small size={30} />

      <div className="actions">
        <Popover
          content={
            <Pane
              width={240}
              height={240}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <div>PopoverContent help</div>
            </Pane>
          }
        >
          <HelpIcon size={28} color="disabled" />
        </Popover>

        <div className="avatar">
          <Popover
            content={
              <Pane
                width={240}
                height={240}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <div>PopoverContent Avatar</div>
              </Pane>
            }
          >
            {!isMobile ? (
              <Avatar
                src="https://www.shareicon.net/data/256x256/2015/09/08/98071_man_512x512.png"
                size={45}
              />
            ) : (
              <MenuIcon size={20} />
            )}
          </Popover>
        </div>
      </div>
    </header>
  );
}

function Desktop() {
  return (
    <Avatar
      src="https://www.shareicon.net/data/256x256/2015/09/08/98071_man_512x512.png"
      size={45}
    />
  );
}
