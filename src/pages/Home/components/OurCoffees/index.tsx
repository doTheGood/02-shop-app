import { TitleText } from "../../../../Components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { OurCoffeesContainer } from "./styles";

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeCard/>
    </OurCoffeesContainer>
  );
}