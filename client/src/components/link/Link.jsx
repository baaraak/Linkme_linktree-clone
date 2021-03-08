import React from "react";
import {
  EditIcon,
  GroupedBarChartIcon,
  MediaIcon,
  TrashIcon,
} from "evergreen-ui";

import "./styles.scss";
import ResizableInput from "../resizable-input/ResizableInput";

const Link = ({ title, href, active, provided, isDragging }) => {
  return (
    <div
      className={`link ${isDragging ? "shadow-2xl" : "shadow"}`}
      {...provided.draggableProps}
      ref={provided.innerRef}
    >
      <div className="link__handle" {...provided.dragHandleProps}>
        <svg width="4" height="16" viewBox="0 0 4 16">
          <path d="M0 2C0 .897.897 0 2 0s2 .897 2 2-.897 2-2 2-2-.897-2-2M0 8c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2M0 14c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2"></path>
        </svg>
      </div>
      <div className="link__content">
        <div className="input link__title">
          <ResizableInput placeholder="Enter Title" />
          <EditIcon />
        </div>
        <div className="input link__href">
          <ResizableInput placeholder="Enter Title" placeholder="http://url" />

          <EditIcon />
        </div>
        <div className="link__actions">
          <div className="thumbnails">
            <MediaIcon />
          </div>
          <div className="analytic">
            <GroupedBarChartIcon />
          </div>
          <div className="trash">
            <TrashIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link;
