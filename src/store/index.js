import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import CONSTANTS from "../config/constants";

const { persistAtom } = recoilPersist();

export const todoListState = atom({
  key: CONSTANTS.STOREKEYS.TODOLIST,
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const todoListFilterState = atom({
  key: CONSTANTS.STOREKEYS.TODOLISTFILTER,
  default: "Show All",
  effects_UNSTABLE: [persistAtom],
});

export const todoListStatsState = selector({
  key: CONSTANTS.STOREKEYS.TODOLISTSTATS,
  get: ({ get }) => {
    const todoList = get(filteredTodoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

export const filteredTodoListState = selector({
  key: CONSTANTS.STOREKEYS.FILTEREDTODOLIST,
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case CONSTANTS.FILTERS.COMPLETE:
        return list.filter((item) => item.isComplete);
      case CONSTANTS.FILTERS.UNCOMPLETE:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
