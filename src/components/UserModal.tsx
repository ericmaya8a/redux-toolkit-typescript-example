import { FC } from "react";
import { Dialog, Classes } from "@blueprintjs/core";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../hooks";
import { clearSelectedUser } from "../reducers/selectedUser";
import { Image } from "./UsersList";

interface UserModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const UserModal: FC<UserModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.selectedUser.data);

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => {
        dispatch(clearSelectedUser());
        onClose();
      }}
      title={user ? `${user.firstName} ${user.lastName}` : "Selected User"}
      canEscapeKeyClose={false}
      canOutsideClickClose={false}
    >
      <Body className={Classes.DIALOG_BODY}>
        {user && (
          <>
            <Image
              src={user.avatar}
              alt="avatar"
              gender={user.gender}
              style={{ height: "400px", width: "400px", margin: 0 }}
            />
            <h2>
              {user.firstName} {user.lastName}{" "}
              <Gender
                icon={user.gender === "male" ? faMars : faVenus}
                gender={user.gender}
              />
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, eveniet, vel nemo vero quia ratione eum sit aspernatur
              ipsam sunt sed alias atque pariatur itaque?
            </p>
          </>
        )}
      </Body>
    </Dialog>
  );
};

const Gender = styled(FontAwesomeIcon)<{ gender: string }>`
  color: ${({ gender }) => (gender === "male" ? "#0E5A8A" : "#F5498B")};
`;

const Body = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
