import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectProductRootState = (state: RootState) => state.people;

export const selectPeople = createSelector(selectProductRootState, ({ people }) => people);

export const selectSelectedMalePeople = createSelector(selectProductRootState, ({ people }) =>
  people.results.filter((item) => item.gender === 'male' && item?.selected)
);

export const selectSelectedFemalePeople = createSelector(selectProductRootState, ({ people }) =>
  people.results.filter((item) => item.gender === 'female' && item?.selected)
);

export const selectSelectedOtherPeople = createSelector(selectProductRootState, ({ people }) =>
  people.results.filter(
    (item) => item.gender !== 'female' && item.gender !== 'male' && item?.selected
  )
);

export const selectPeopleByIndex = (index: number) =>
  createSelector(selectProductRootState, ({ people }) => people.results[index]);

export const selectPeopleLoading = createSelector(selectProductRootState, ({ loading }) => loading);
