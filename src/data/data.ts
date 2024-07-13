import { type TTip } from "../utils/types";

import iconEating from "../assets/images/icon-eating.svg";
import iconExercise from "../assets/images/icon-exercise.svg";
import iconSleep from "../assets/images/icon-sleep.svg";

export const limitationCards = [
  {
    icon: "/assets/images/icon-gender.svg",
    title: "Gender",
    content:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    icon: "/assets/images/icon-age.svg",
    title: "Age",
    content:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    icon: "/assets/images/icon-muscle.svg",
    title: "Muscle",
    content:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  // Pregnancy
  {
    icon: "/assets/images/icon-pregnancy.svg",
    title: "Pregnancy",
    content:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  //Race
  {
    icon: "/assets/images/icon-race.svg",
    title: "Race",
    content:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];

export const tips: TTip[] = [
  {
    icon: iconEating,
    title: "Healthy Eating",
    content:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    icon: iconExercise,
    title: "Regular Exercise",
    content:
      "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    icon: iconSleep,
    title: "Adequate sleep",
    content:
      "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];
