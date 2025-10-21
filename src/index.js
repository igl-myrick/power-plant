import { storeState } from './storeState.js';
import { changeState } from './changeState.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function addPlant(plantName) {
  if (document.getElementById(`${plantName}-info`)) {
    return "A plant with this name already exists.";
  }

  const snakeCasePlantName = plantName.replace(/\s+/g, '-');
  const mainContent = document.getElementById("main-content");
  const plantWrapper = document.createElement("div");
  plantWrapper.setAttribute("id", `${snakeCasePlantName}-info`);

  const title = document.createElement("h5");
  title.textContent = `${plantName}`;

  const description = document.createElement("div");
  description.setAttribute("id", `${snakeCasePlantName}-description`);
  description.classList.add("row");

  const plantSoilTextWrapper = document.createElement("div");
  plantSoilTextWrapper.classList.add("col-md-4");
  const plantSoilText = document.createElement("p");
  plantSoilText.classList.add("text-center");
  const plantSoilValue = document.createElement("span");
  plantSoilValue.setAttribute("id", `${snakeCasePlantName}-soil`);
  plantSoilValue.innerText = "0";

  const plantLightTextWrapper = document.createElement("div");
  plantLightTextWrapper.classList.add("col-md-4");
  const plantLightText = document.createElement("p");
  plantLightText.classList.add("text-center");
  const plantLightValue = document.createElement("span");
  plantLightValue.setAttribute("id", `${snakeCasePlantName}-light`);
  plantLightValue.innerText = "0";

  const plantWaterTextWrapper = document.createElement("div");
  plantWaterTextWrapper.classList.add("col-md-4");
  const plantWaterText = document.createElement("p");
  plantWaterText.classList.add("text-center");
  const plantWaterValue = document.createElement("span");
  plantWaterValue.setAttribute("id", `${snakeCasePlantName}-water`);
  plantWaterValue.innerText = "0";
}