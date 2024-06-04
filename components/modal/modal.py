from django_viewcomponent import component
from django_viewcomponent.fields import RendersOneField


@component.register("modal")
class ModalComponent(component.Component):
    modal_trigger = RendersOneField(required=True)
    modal_header = RendersOneField(required=True)
    modal_body = RendersOneField(required=True)
    modal_footer = RendersOneField(required=True)

    template_name = "modal/modal.html"
