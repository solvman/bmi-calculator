import { type TCard } from "../utils/types";

import iconEating from "../assets/images/icon-eating.svg";
import iconExercise from "../assets/images/icon-exercise.svg";
import iconSleep from "../assets/images/icon-sleep.svg";

import iconGender from "../assets/images/icon-gender.svg";
import iconAge from "../assets/images/icon-age.svg";
import iconMuscle from "../assets/images/icon-muscle.svg";
import iconPregnancy from "../assets/images/icon-pregnancy.svg";
import iconRace from "../assets/images/icon-race.svg";

export const limitationCards: TCard[] = [
  {
    id: 1,
    icon: iconGender,
    title: "Gender",
    content:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    id: 2,
    icon: iconAge,
    title: "Age",
    content:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    id: 3,
    icon: iconMuscle,
    title: "Muscle",
    content:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    id: 4,
    icon: iconPregnancy,
    title: "Pregnancy",
    content:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    id: 5,
    icon: iconRace,
    title: "Race",
    content:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];

export const tips: TCard[] = [
  {
    id: 1,
    icon: iconEating,
    title: "Healthy Eating",
    content:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    id: 2,
    icon: iconExercise,
    title: "Regular Exercise",
    content:
      "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    id: 3,
    icon: iconSleep,
    title: "Adequate sleep",
    content:
      "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];
