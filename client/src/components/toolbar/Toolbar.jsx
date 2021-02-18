import { Button, Link, Strong } from "evergreen-ui";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./toolbar.scss";

export default function Toolbar() {
  const { pathname } = useLocation();
  return (
    <div className="toolbar">
      <Strong size={400}>My Linkme: </Strong>
      <Link href="/" size={400} color="neutral" target="_blank">
        https://linkme.cc/baraki
      </Link>
      <Button>Share</Button>
    </div>
  );
}
