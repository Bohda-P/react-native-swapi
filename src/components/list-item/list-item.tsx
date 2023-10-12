import React from 'react';
import { Container, HeartFilledIcon, HeartIcon, IconContainer, Title } from './list-item.styled';

interface ListItemProps {
  name: string;
  dateOfBirth: string;
  gender: string;
  isSelected: boolean;
  onLikePress: () => void;
  onItemPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  name,
  dateOfBirth,
  gender,
  isSelected,
  onLikePress,
  onItemPress,
}) => {
  return (
    <Container onPress={onItemPress}>
      <IconContainer onPress={onLikePress}>
        {isSelected ? <HeartFilledIcon /> : <HeartIcon />}
      </IconContainer>
      <Title>{name}</Title>
      <Title>{dateOfBirth}</Title>
      <Title>{gender}</Title>
    </Container>
  );
};

export default ListItem;
