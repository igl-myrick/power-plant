import { storeState } from '../src/storeState.js';
import { changeState } from '../src/changeState.js';

describe("storeState", () => {
  const plant = { soil: 0, light: 0, water: 0 };
  const stateControl = storeState();
  const feed = changeState("soil")(1);
  const state = stateControl(feed);

  test("should correctly return an object", () => {
    expect(typeof state).toEqual("object");
  });
});