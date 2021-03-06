import {
  ChevronDownIcon,
  ChevronUpIcon,
  Help,
  HelpIcon,
  Strong,
  Text,
} from "evergreen-ui";
import React from "react";
import useCollapse from "react-collapsed";

export default function Settings() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return <div className="settings">settings</div>;
}
