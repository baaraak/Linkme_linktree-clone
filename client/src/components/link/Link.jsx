import React, { useState } from "react";
import {
  EditIcon,
  GroupedBarChartIcon,
  MediaIcon,
  Strong,
  Switch,
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
  onThumbnail,
  onUpdate,
  _id,
}) => {
  const [linkMessage, setLinkMessage] = useState();

  const handleChange = (e) => {
    onUpdate(_id, { [e.target.name]: e.target.value });
  };
  return (
    <div
      className={`link-container ${isDragging ? "shadow-2xl" : "shadow"}`}
      {...provided.draggableProps}
      ref={provided.innerRef}
    >
      <div className="link">
        <div className="link__handle" {...provided.dragHandleProps}>
          <svg viewBox="0 0 16 16" enableBackground="new 0 0 24 24">
            <path d="M6 2C6 0.9 6.9 0 8 0C9.1 0 10 0.9 10 2C10 3.1 9.1 4 8 4C6.9 4 6 3.1 6 2M6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10C6.9 10 6 9.1 6 8M6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16C6.9 16 6 15.1 6 14"></path>
          </svg>
        </div>
        <div className="link__content">
          <div className="input link__title">
            <ResizableInput
              onBlur={handleChange}
              name="title"
              defaultValue={title}
              placeholder="Title"
            />
            <EditIcon />
          </div>
          <div className="input link__href">
            <ResizableInput
              onBlur={handleChange}
              placeholder="http://url"
              defaultValue={href}
              name="href"
            />

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
          </div>
        </div>
        <div className="link__status">
          <Switch height={21} hasCheckIcon={false} />
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
