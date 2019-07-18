import React from "react";
import { Link } from "react-router-dom";

import Notifications from "~/components/Notifications";
import { ReactComponent as Logo } from "~/assets/logo.svg";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <span>
            <Logo />
          </span>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Everton Zoelner</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Everton Zoelner"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
