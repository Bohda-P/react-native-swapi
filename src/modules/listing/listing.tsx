import React, { useEffect, useState } from 'react';
// Hooks
import { useAppDispatch, useAppSelector } from '../../store';
// Actions
import { getPeople } from '../../store/people/actions';
// Selectors
import {
  selectSelectedFemalePeople,
  selectPeople,
  selectPeopleLoading,
  selectSelectedMalePeople,
  selectSelectedOtherPeople,
} from '../../store/people/selectors';
// Styled
import {
  Container,
  Count,
  CountContainer,
  CountTitle,
  HeaderContainer,
  ResetButton,
  Title,
} from './listing.styled';
import { ActivityIndicator, FlatList } from 'react-native';
import { ListItem, Loading } from '../../components';
import { getSelectedPeople, resetState } from '../../store/people/slice';
import { useNavigation } from '@react-navigation/native';
import { NavigatorRoutes } from '../../navigation/navigation.namespace';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';

const Listing: React.FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const people = useAppSelector(selectPeople);
  const selectedMale = useAppSelector(selectSelectedMalePeople);
  const selectedFemale = useAppSelector(selectSelectedFemalePeople);
  const selectedOther = useAppSelector(selectSelectedOtherPeople);
  const loading = useAppSelector(selectPeopleLoading);

  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    dispatch(getPeople(page));
  }, [page]);

  if (loading && !people.results.length) {
    return <Loading />;
  }

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleSelect = (index: number) => {
    dispatch(getSelectedPeople(index));
  };

  const handleReset = () => {
    dispatch(resetState());
  };

  const handleNavigate = (id: number) => {
    navigate(NavigatorRoutes.DETAILS, { id });
  };

  return (
    <Container>
      <HeaderContainer>
        <Title>Fans</Title>
        <ResetButton onPress={handleReset}>
          <Title>Reset</Title>
        </ResetButton>
      </HeaderContainer>
      <CountContainer>
        <Count>
          <Title>Female</Title>
          <CountTitle>{selectedFemale.length}</CountTitle>
        </Count>
        <Count>
          <Title>Male</Title>
          <CountTitle>{selectedMale.length}</CountTitle>
        </Count>
        <Count>
          <Title>Other</Title>
          <CountTitle>{selectedOther.length}</CountTitle>
        </Count>
      </CountContainer>
      <FlatList
        data={people.results}
        onEndReached={loadMore}
        contentContainerStyle={{ paddingBottom: 170 }}
        renderItem={({ item, index }) => (
          <ListItem
            name={item.name}
            dateOfBirth={item.birth_year}
            gender={item.gender}
            onLikePress={() => {
              handleSelect(index);
            }}
            onItemPress={() => handleNavigate(index)}
            isSelected={item?.selected}
          />
        )}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        ListFooterComponent={() => loading && <ActivityIndicator style={{ margin: 20 }} />}
      />
    </Container>
  );
};

export default Listing;
