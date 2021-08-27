import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export function Dashboard() {
  const data = [
    {
      title: "Desenvolvimento de App",
      amount: "R$ 12.400,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "12/08/2021",
    },
    {
      title: "Desenvolvimento de App",
      amount: "R$ 12.400,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "12/08/2021",
    },
    {
      title: "Desenvolvimento de App",
      amount: "R$ 12.400,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "12/08/2021",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/15041184?v=4",
              }}
            />

            <User>
              <UserGretting>Olá, </UserGretting>
              <UserName>Daniel</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title="Entrada"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 08 de agosto"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de agosto"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
