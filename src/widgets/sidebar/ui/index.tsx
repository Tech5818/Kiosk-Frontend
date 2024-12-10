import { useSideBar } from "@shared/model/SideBar";
import { SideBarBottom } from "@shared/ui/SideBarBottom";
import { SideBarHeader } from "@shared/ui/SideBarHeader";
import styled from "styled-components";
import { useGetOrder } from "../api/useGetOrder";
import { OrderMenuList } from "@shared/ui/OrderMenuList";

export const Sidebar = () => {
  const { open } = useSideBar((state) => state);
  const { data, isSuccess } = useGetOrder();

  return (
    <>
      <Container $open={open}>
        <SideBarHeader />
        <OrderMenuList order={data} />
        <SideBarBottom />
      </Container>
    </>
  );
};

interface ContainerProps {
  $open: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 300px;
  transform: translateX(${({ $open }) => ($open ? "0px" : "400px")});
  background: ${({ theme }) => theme.light.color.white};
  padding: 20px 20px 50px 20px;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  transition: transform 0.3s;
  box-shadow: 0 0 45px -15px rgba(0, 0, 0, 0.25);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
