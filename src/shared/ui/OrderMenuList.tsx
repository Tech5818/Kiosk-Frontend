import { Order } from "@shared/types/Order";
import styled from "styled-components";
import { OrderMenu } from "./OrderMenu";
import { useCurrentOrder } from "@shared/model/CurrentOrder";
import { useEffect } from "react";

interface OrderMenuList {
  order?: Order;
}

export const OrderMenuList = ({ order }: OrderMenuList) => {
  const { currentOrder } = useCurrentOrder((state) => state);

  useEffect(() => {
    console.log(currentOrder);
  }, [currentOrder]);
  return (
    <>
      <Container>
        {currentOrder &&
          currentOrder.map((order, idx) => (
            <OrderMenu
              name={order.name}
              imgPath={order.imgPath}
              price={order.price}
              quantity={order.quantity}
              id={order.menuId}
              key={idx}
            />
          ))}
        {order?.orderMenus.map((orderMenu, idx) => (
          <OrderMenu
            name={orderMenu.menu.name}
            imgPath={orderMenu.menu.imgPath}
            price={orderMenu.menu.price}
            quantity={orderMenu.quantity}
            key={idx}
            id={orderMenu.menu.id}
            isOrdered
          />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  overflow-y: scroll;
`;
