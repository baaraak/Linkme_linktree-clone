import React, { useState } from "react";
import {
  EditIcon,
  GroupedBarChartIcon,
  MediaIcon,
  Strong,
  Text,
  Tooltip,
  TrashIcon,
} from "evergreen-ui";

import "./styles.scss";
import ResizableInput from "../resizable-input/ResizableInput";
import Button from "../button/Button";

const DeleteComponent = ({ onClose, onDelete, _id }) => {
  return (
    <div className="delete-component">
      <Text color="black">
        Are you sure you want to delete this link? This action cannot be undone.
      </Text>
      <div className="actions">
        <Button fullWidth height={40} onClick={onClose}>
          Cancel
        </Button>
        <Button
          fullWidth
          height={40}
          appearance="primary"
          intent="danger"
          onClick={() => onDelete(_id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

const AnalyticComponent = ({ clicks }) => {
  return (
    <Text color="black">
      This link has been clicked <Strong>{clicks}</Strong> times.
    </Text>
  );
};

const ThumbnailComponent = ({ onThumbnail }) => {
  return <div>"ThumbnailComponent"</div>;
};

const Messages = {
  DELETE: {
    id: "delete",
    title: "Delete Link",
    component: <DeleteComponent />,
  },
  ANALYTIC: {
    id: "analytic",
    title: "Link Analytics",
    component: <AnalyticComponent />,
  },
  THUMBNAIL: {
    id: "thumbnail",
    title: "Add Thumbnail",
    component: <ThumbnailComponent />,
  },
};

const Link = ({
  title,
  href,
  active,
  provided,
  isDragging,
  clicks,
  onDelete,
  _id,
}) => {
  const [linkMessage, setLinkMessage] = useState();

  const onThumbnail = (id) => {
    console.log("***********************");
    console.log("delete", id);
    console.log("***********************");
  };

  return (
    <div
      className={`link-container ${isDragging ? "shadow-2xl" : "shadow"}`}
      {...provided.draggableProps}
      ref={provided.innerRef}
    >
      <div className="link">
        <div className="link__handle" {...provided.dragHandleProps}>
          <svg width="4" height="16" viewBox="0 0 4 16">
            <path d="M0 2C0 .897.897 0 2 0s2 .897 2 2-.897 2-2 2-2-.897-2-2M0 8c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2M0 14c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2"></path>
          </svg>
        </div>
        <div className="link__content">
          <div className="input link__title">
            <ResizableInput placeholder="Enter title" />
            <EditIcon />
          </div>
          <div className="input link__href">
            <ResizableInput placeholder="http://url" />

            <EditIcon />
          </div>
          <div className="link__actions">
            <div
              className="thumbnails"
              onClick={() => setLinkMessage(Messages.THUMBNAIL)}
            >
              <Tooltip content="Add Thumbnail">
                <MediaIcon />
              </Tooltip>
            </div>
            <div
              className="analytic"
              onClick={() => setLinkMessage(Messages.ANALYTIC)}
            >
              <Tooltip content="Analytics">
                <GroupedBarChartIcon />
              </Tooltip>
            </div>
            <div
              className="trash"
              onClick={() => setLinkMessage(Messages.DELETE)}
            >
              <Tooltip content="Delete">
                <TrashIcon />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      {linkMessage && (
        <div className="link__message">
          <div className="title">
            <Strong color="black">{linkMessage.title}</Strong>
            <div className="close" onClick={() => setLinkMessage(null)}>
              x
            </div>
          </div>
          <div className="message">
            {React.cloneElement(linkMessage.component, {
              onClose: () => setLinkMessage(null),
              clicks,
              _id,
              onDelete,
              onThumbnail,
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Link;
