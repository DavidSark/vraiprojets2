<template>
  <div class="flex justify-center">
    <div>
      <div class="form-check">
        <input
          class="
            form-check-input
            appearance-none
            h-4
            w-4
            border border-gray-300
            rounded-sm
            bg-white
            checked:bg-Gris/foncé checked:border-blue-600
            focus:outline-none
            transition
            duration-200
            mt-1
            align-top
            bg-no-repeat bg-center bg-contain
            float-left
            mr-2
            cursor-pointer
          "
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label
          class="form-check-label inline-block text-gray-800"
          for="flexCheckDefault"
        >
          J'accepte de m'inscrire à la newsletter.
        </label>
      </div>
      <div class="form-check">
        <input
          class="
            form-check-input
            appearance-none
            h-4
            w-4
            border border-gray-300
            rounded-sm
            bg-white
            checked:bg-Gris/foncé checked:border-blue-600
            focus:outline-none
            transition
            duration-200
            mt-1
            align-top
            bg-no-repeat bg-center bg-contain
            float-left
            mr-2
            cursor-pointer
          "
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
        <label
          class="form-check-label inline-block text-gray-800"
          for="flexCheckChecked"
        >
          J'ai lu et j'accepte les conditions d'utilisation.
        </label>
      </div>
    </div>
  </div>
</template>