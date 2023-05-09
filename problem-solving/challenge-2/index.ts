import { throws } from "assert";

export const diceFacesCalculator = (
  dice1: number,
  dice2: number,
  dice3: number
): number => {
  let dices = [dice1, dice2, dice3];
  dices.sort((a,b)=> a-b);
  if(dices[0] < 1 || dices[2] > 6) throw new Error("Dice out of number range");
  if(dices[0] === dices[2]) return 3*dices[0];
  if(dices[0] === dices[1]) return 2*dices[0];
  if(dices[1] === dices[2]) return 2*dices[1];
  return dices[2];
};
