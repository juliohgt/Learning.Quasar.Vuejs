<template>
  <q-page class="flex flex-center">
    <div id="q-app" style="min-height: 100vh">
      <TableComponents></TableComponents>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TableComponents from "components/TableComponents.vue";

export default defineComponent({
  name: "PageIndex",
  components: { TableComponents },
  setup() {
    return {};
  },
});
</script>
