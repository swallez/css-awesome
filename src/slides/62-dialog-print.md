---
skip: devoxx mixit
---

```html
<dialog id="diag-print" open>This is a dialog!</dialog>
```

<style scoped contenteditable="true">.editable dialog {
  box-shadow: .25em .25em .125em rgba(0, 0, 0, 0.42);
}
.editable dialog::backdrop {
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>

<div class="editable">
  <dialog id="diag">This is a dialog!</dialog>
</div>
