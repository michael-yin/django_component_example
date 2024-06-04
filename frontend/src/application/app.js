// This is the scss entry file
import "../styles/index.scss";

import { Application } from "@hotwired/stimulus";
import modalController from "../controllers/modal_controller";
import tabsController from "../controllers/tabs_controller";  // new

window.Stimulus = Application.start();
window.Stimulus.register("modal", modalController);
window.Stimulus.register("tabs", tabsController);
