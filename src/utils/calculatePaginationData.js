export const calculatePaginationData = (contactsCount, perPage, page) => {
  const totalPages = Math.ceil(contactsCount / perPage);
  const hasNextPage = Boolean(totalPages - page);
  const hasPreviousPage = page !== 1;

  return {
    page,
    perPage,
    totalItems: contactsCount,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
};
