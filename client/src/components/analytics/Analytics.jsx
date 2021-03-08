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

import "./styles.scss";

const Analytics = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="analytics">
      <div className="analytics__toggle" {...getToggleProps()}>
        <Strong size={400} color="black" marginRight={20}>
          Lifetime Analytics:
        </Strong>
        <Text size={500} color="black" marginRight={30}>
          Views: 3012
        </Text>
        <Text size={500} color="black" marginRight={30}>
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
      <section className="analytics__collapse" {...getCollapseProps()}>
        <Button>GO PROP</Button>
      </section>
    </div>
  );
};

export default Analytics;
