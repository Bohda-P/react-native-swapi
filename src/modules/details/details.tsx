import React from 'react';
import { Linking } from 'react-native';
// Navigation
import { RootStackParamList } from '../../navigation';
import { NavigatorRoutes } from '../../navigation/navigation.namespace';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// Hooks
import { useAppSelector } from '../../store';
// Selector
import { selectPeopleByIndex } from '../../store/people/selectors';
// Styled
import {
  Container,
  ContentContainer,
  Subtitle,
  SubtitleContent,
  Title,
  Link,
} from './details.styled';

type DetailsProps = NativeStackScreenProps<RootStackParamList, NavigatorRoutes.DETAILS>;

const Details: React.FC<DetailsProps> = ({
  route: {
    params: { id },
  },
}) => {
  const person = useAppSelector(selectPeopleByIndex(id));

  const onLinkPress = (link: string) => {
    Linking.openURL(link);
  };

  return (
    <Container>
      <ContentContainer>
        <Title>Name -</Title>
        <Subtitle>{person.name}</Subtitle>
      </ContentContainer>
      <ContentContainer>
        <Title>Birth -</Title>
        <Subtitle>{person.birth_year}</Subtitle>
      </ContentContainer>
      <ContentContainer>
        <Title>Created -</Title>
        <Subtitle>{new Date(person.created).toDateString()}</Subtitle>
      </ContentContainer>
      <ContentContainer>
        <Title>Gender -</Title>
        <Subtitle>{person.gender}</Subtitle>
      </ContentContainer>
      <ContentContainer>
        <Title>Mass -</Title>
        <Subtitle>{person.mass}</Subtitle>
      </ContentContainer>
      <ContentContainer>
        <Title>Hair -</Title>
        <Subtitle>{person.hair_color}</Subtitle>
      </ContentContainer>
      <ContentContainer>
        <Title>Skin -</Title>
        <Subtitle>{person.skin_color}</Subtitle>
      </ContentContainer>
      <ContentContainer>
        <Title>Films -</Title>
        <SubtitleContent>
          {person.films.map((item) => (
            <SubtitleContent>
              <Link
                hitSlop={{
                  bottom: 20,
                  left: 20,
                  right: 20,
                  top: 20,
                }}
                onPress={() => onLinkPress(item)}
              >
                <Subtitle numberOfLines={1} ellipsizeMode="tail">
                  {item}
                </Subtitle>
              </Link>
            </SubtitleContent>
          ))}
        </SubtitleContent>
      </ContentContainer>
    </Container>
  );
};

export default Details;
