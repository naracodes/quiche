export const fetchPortfolioCashBalance = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/portfolios`
    })
}

export const addTransaction = order => {
    const assetToAdd = $.ajax({
      method: "POST",
      url: `/api/transactions`,
      data: { order },
    });
    return assetToAdd;
}