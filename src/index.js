import { storeState } from './storeState.js';
import { changeState } from './changeState.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function addPlant(plantName) {
  if (document.getElementById(`${plantName}-info`)) {
    return "A plant with this name already exists.";
  }

  const mainContent = document.getElementById("main-content");
  const plantWrapper = document.createElement("div");
  plantWrapper.setAttribute("id", `${plantName}-info`);
  const title = document.createElement("h5");
  title.textContent = `${plantName}`.replace(/\s+/g, '-');
  title.setAttribute("id", `${plantName}-description`);
}