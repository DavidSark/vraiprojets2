<template>
  <div
    class="
      relative
      flex
      w-28
      items-center
      justify-center
      gap-2
      rounded-lg
      border
      bg-Gris/foncé
      px-4
      py-2.5
      hover:bg-
    "
  >
    <p class="flex-shrink-0 flex-grow-0 text-center text-sm font-bold">
      <slot />
    </p>
    <ArrowCircleRightIcon class="px-1.05 white" />
  </div>
</template>

<script >
import { ArrowCircleRightIcon } from "@heroicons/vue/solid";

export default {
  components: { ArrowCircleRightIcon },
};
</script>