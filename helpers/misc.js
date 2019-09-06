exports.checkDateAvailability = (date) => {
  if (new Date(date).getDate() < new Date().getDate()){
      return false
  }else{
      return true;
  }
}