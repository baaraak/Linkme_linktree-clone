import { Heading, Text } from "evergreen-ui";
import Button from "../../components/button/Button";
import useLinks from "./useLinks";
import Analytics from "../../components/analytics/Analytics";
import Link from "../../components/link/Link";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

export default function Links() {
  const { links, create, onDelete, reOrder } = useLinks();

  const onDragEnd = ({ draggableId, destination, source }) => {
    // dropped outside the list
    if (!draggableId || !destination || !source) {
      return;
    }
    console.log("***********************");
    console.log(links);
    console.log("***********************");
    reOrder(links[source.index].index, links[destination.index].index);
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
                            onDelete={onDelete}
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
