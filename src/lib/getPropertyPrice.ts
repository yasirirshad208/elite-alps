export const getChaletPrice = (chalet: any, checkin:any) => {
  if (!checkin) return chalet.winterPrice;

  // Find availability for SAME checkin date
  const matched = chalet.availability?.find((item: any) =>
    item.checkin === checkin
  );

  return matched?.price || chalet.winterPrice;
};
