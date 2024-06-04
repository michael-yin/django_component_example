// This is the scss entry file
import "../styles/index.scss";

import { Application } from "@hotwired/stimulus";
import modalController from "../controllers/modal_controller";

window.Stimulus = Application.start();
window.Stimulus.register("modal", modalController);
