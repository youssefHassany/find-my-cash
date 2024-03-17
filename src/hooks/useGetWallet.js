export const useGetWallet = () => {
  const wallet = Number(localStorage.getItem("find-my-cash-wallet"));
  return wallet ? wallet : 0;
};
