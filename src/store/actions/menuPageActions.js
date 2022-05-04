export const changeCategory = (selectedCategoryNumber) => {
  return {
    type: "CHANGE_CATEGORY",
    payload: selectedCategoryNumber,
  };
};
