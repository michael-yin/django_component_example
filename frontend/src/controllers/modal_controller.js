import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["container"];

  openModal() {
    this.containerTarget.classList.remove("hidden");
  }

  closeModal() {
    this.containerTarget.classList.add("hidden");
  }
}
