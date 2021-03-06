import {
  Button,
  ChevronDownIcon,
  ChevronUpIcon,
  Help,
  HelpIcon,
  Strong,
  Text,
} from "evergreen-ui";
import React from "react";
import useCollapse from "react-collapsed";

export default function Links() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="settings">
      <div className="settings__analytics" {...getToggleProps()}>
        <Strong size="400" color="black" marginRight={20}>
          Lifetime Analytics:
        </Strong>
        <Text size="400" color="black" marginRight={30}>
          Views: 3012
        </Text>
        <Text size="400" color="black" marginRight={30}>
          Clicks: 25
        </Text>
        <div className="icon-help">
          <HelpIcon />
        </div>
        <div className="icon-chevron">
          {isExpanded ? (
            <ChevronUpIcon size={20} />
          ) : (
            <ChevronDownIcon size={20} />
          )}
        </div>
      </div>
      <section {...getCollapseProps()}>
        <Button>GO PROP</Button>
      </section>
    </div>
  );
}
