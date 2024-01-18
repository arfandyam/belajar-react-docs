/**
 * Updating nested state involves making copies of objects all the way up from the part that 
 * changed. Deleting a deeply nested place would involve copying its entire parent place chain. 
 * Such code can be very verbose.
 * 
 * If the state is too nested to update easily, consider making it “flat”. Here is one way you can 
 * restructure this data. Instead of a tree-like structure where each place has an array of its 
 * child places, you can have each place hold an array of its child place IDs. Then store a mapping
 * from each place ID to the corresponding place.
 */

import PropTypes from "prop-types";
import { useState } from "react";
import { initialTravelPlan } from "./places.js";

function PlaceTree({ parentId, id, plan, onComplete }) {
  const place = plan[id];
  const childIds = place.childIds;
  return (
    <>
      <li>
        {place.title}
        <button onClick={() => {
            onComplete(parentId, id);
          }}>
          Complete
        </button>
        {childIds.length > 0 && 
          <ol>
            {childIds.map(childId => (
              <PlaceTree
                key={childId}
                parentId={id}
                id={childId}
                plan={plan}
                onComplete={onComplete}
              />
            ))}
          </ol>
        }
      </li>
    </>
  );
}

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  function handleOnComplete(parentId, childId){
    const parent = plan[parentId];

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(id => id !== childId)
    };

    setPlan({
      ...plan,
      [parentId]: nextParent
    });
  }

  return (
    <>
      <h1>Places to Visit</h1>
      <ol>
        {planetIds.map(planetId => (
          <PlaceTree
            key={planetId}
            parentId={0}
            id={planetId}
            plan={plan}
            onComplete={handleOnComplete}
          />
        ))}
      </ol>
    </>
  );
}

PlaceTree.propTypes = {
  parentId: PropTypes.number,
  id: PropTypes.number,
  plan: PropTypes.object,
  onComplete: PropTypes.func
}


