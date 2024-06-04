import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    this.showTab(1);
  }

  showTab(tabIndex) {
    const targetId = tabIndex.toString();
    const contentTargets = this.element.querySelectorAll('[data-panel]');
    const tabTargets = this.element.querySelectorAll('[data-tabs-target]');

    contentTargets.forEach(content => {
      content.classList.toggle('hidden', content.dataset.panel !== targetId);
    });

    tabTargets.forEach(tab => {
      const selected = tab.getAttribute('data-tabs-target') === targetId;
      tab.classList.toggle('text-blue-600', selected);
      tab.classList.toggle('border-blue-600', selected);
    });
  }

  showContent(event) {
    const targetId = event.currentTarget.getAttribute('data-tabs-target');
    this.showTab(parseInt(targetId));
  }
}
