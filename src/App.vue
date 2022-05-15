<template>
  <h1 class="font-inter text-2xl text-center font-semibold uppercase">
    Guide de style
  </h1>
  <p class="font-inter text-lg text-center">David Sarkissian - TDB MMi1</p>
  <h1
    class="
      font-mulish
      text-xl text-center
      font-semibold
      bg-slate-200
      text-Gris/foncé
      mt-9
      mb-5
      uppercase
    "
  >
    Couleurs
  </h1>

  <div class="flex justify-center mb-5">
    <div class="">
      <couleur class="bg-Gris/foncé"></couleur>
      <p class="text-center">#111827</p>
    </div>

    <div class="flex justify-center mb-5">
      <div class="">
        <couleur class="bg-indigo/500"></couleur>
        <p class="text-center">#6366F1</p>
      </div>
    </div>

    <div class="flex justify-center mb-5">
      <div class="">
        <couleur class="bg-indigo/900"></couleur>
        <p class="text-center">#312E81</p>
      </div>
    </div>

    <div class="flex justify-center mb-5">
      <div class="">
        <couleur class="bg-white border-2 border-gray-400"></couleur>
        <p class="text-center">#FFFFFF</p>
      </div>
    </div>
  </div>
  <h1
    class="
      font-inter font-semibold
      text-xl text-center
      bg-slate-200
      text-Gris/foncé
      mt-5
      mb-5
      uppercase
    "
  >
    Typographie
  </h1>

  <div class="m-4 border-l-2 border-gray-400">
    <p class="ml-2 font-inter font-semibold">H1 / Headline 1</p>
    <p class="ml-2 text-xs text-neutral-400">Inter / Bold</p>
    <p class="ml-2 text-xs text-neutral-400">68px font-size</p>
    <p class="font-inter font-bold text-2xl ml-2">
      The quick brown fox jumps over the lazy dog...
    </p>
  </div>

  <div class="m-4 border-l-2 border-gray-400">
    <p class="ml-2 font-inter font-semibold">H2 / Headline 2</p>
    <p class="ml-2 text-xs text-neutral-400">Inter / Bold</p>
    <p class="ml-2 text-xs text-neutral-400">40px font-size</p>
    <p class="font-inter font-semibold text-xl ml-2">
      The quick brown fox jumps over the lazy dog...
    </p>
  </div>

  <div class="m-4 border-l-2 border-gray-400">
    <p class="ml-2 font-inter font-semibold">Body medium</p>
    <p class="ml-2 text-xs text-neutral-400">Inter / Medium</p>
    <p class="ml-2 text-xs text-neutral-400">16px font-size</p>
    <p class="font-inter font-medium text-medium ml-2">
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don't look even slightly believable.
    </p>
  </div>

  <div class="m-4 border-l-2 border-gray-400">
    <p class="ml-2 font-inter font-semibold">Body Small</p>
    <p class="ml-2 text-xs text-neutral-400">Inter / Medium</p>
    <p class="ml-2 text-xs text-neutral-400">14px font-size</p>
    <p class="font-inter font-medium text-medium ml-2 text-s">
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don't look even slightly believable.
    </p>
  </div>

  <div class="m-4 border-l-2 border-gray-400">
    <p class="ml-2 font-inter font-semibold">Body xSmall</p>
    <p class="ml-2 text-xs text-neutral-400">Inter / Medium</p>
    <p class="ml-2 text-xs text-neutral-400">12px font-size</p>
    <p class="font-inter font-medium text-medium ml-2 text-xs">
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don't look even slightly believable.
    </p>
  </div>

  <h1
    class="
      font-inter font-semibold
      text-xl text-center
      bg-slate-200
      text-Gris/foncé
      mt-5
      mb-5
      uppercase
    "
  >
    Icones
  </h1>

  <div class="flex justify-center m-5">
    <BeakerIcon class="h-16 text-Gris/foncé" />
    <ArrowCircleRightIcon class="h-16 text-Gris/foncé" />
    <ArchiveIcon class="h-16 text-Gris/foncé" />
    <HandIcon class="h-16 text-Gris/foncé" />
    <BellIcon class="h-16 text-Gris/foncé" />
  </div>

  <h1
    class="
      font-inter font-semibold
      text-xl text-center
      bg-slate-200
      text-black
      mt-5
      mb-5
      uppercase
    "
  >
    Composants
  </h1>
  <div class="flex justify-center mb-5">
    <boutton class="text-white">Boutton</boutton>
  </div>

  <div class="flex justify-center mb-5">
    <checkbox></checkbox>
  </div>

  <div class="flex justify-center mb-5">
    <ComboBox></ComboBox>
  </div>
</template>


<script>
import boutton from "./components/boutton.vue";
import couleur from "./components/couleur.vue";
import checkbox from "./components/checkbox.vue";
import ComboBox from "./components/combobox.vue";

import {
  BeakerIcon,
  ArrowCircleRightIcon,
  ArchiveIcon,
  HandIcon,
  BellIcon,
} from "@heroicons/vue/solid";

export default {
  name: "App",
  components: {
    BeakerIcon,
    ArrowCircleRightIcon,
    ArchiveIcon,
    HandIcon,
    BellIcon,
    boutton,
    couleur,
    checkbox,
    ComboBox,
  },
};
</script>