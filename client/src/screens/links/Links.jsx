import { Heading, Text } from "evergreen-ui";
import Button from "../../components/button/Button";
import useLinks from "./useLinks";
import Analytics from "../../components/analytics/Analytics";
import Link from "../../components/link/Link";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function Links() {
  const { links: data, create } = useLinks();
  const [links, setLinks] = useState(data);

  const onDragEnd = (result) => {
    console.log({ result });
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(links, result.source.index, result.destination.index);

    setLinks(items);
  };
  return (
    <div className="settings">
      <Analytics />
      <div className="page__container">
        <Button
          fullWidth
          onClick={create}
          appearance="primary"
          height={45}
          marginTop={50}
        >
          Add New Link
        </Button>

        <div className="links">
          {links.length > 0 ? (
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {links.map((link, index) => (
                      <Draggable
                        key={link._id}
                        draggableId={link._id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <Link
                            key={link._id}
                            {...link}
                            provided={provided}
                            isDragging={snapshot.isDragging}
                          />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          ) : (
            <div className="link__empty">
              You don't have any links to display.
              <br />
              Click the button above to add one.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
