import { ChoiceType } from "@/types/common";
import { OptionsInput } from "@/types/options";

export const OptionTypeList: ChoiceType[] = [
  {
    label: "location",
    value: 1,
  },
];

export const DefaultOptionInput: OptionsInput = {
  name: "",
  type: "",
  description: "",
};
