import { defineStore } from "pinia"

const defaultText = "default store text"

export const useTextStore = defineStore("text", {
  state: () => ({ text: defaultText }),
  actions: {
    toDefault() {
      this.text = defaultText
    },
  },
})
