import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderIllustration from "../../assets/confirmed-order.svg";

export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido Confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar o seu café chegar até você.
        </RegularText>
      </div>
      <section>
        <OrderDetailsContainer>
          <p>oi</p>
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} />
      </section>

    </OrderConfirmedContainer>
  );
}