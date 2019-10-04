function getStationNumberByName(name) {
  const nameNumberMap = {
    Reykjavik: 1,
    Akuryeri: 422,
    Husavik: 3696
  };

  return nameNumberMap[name];
}

module.exports = {
  getStationNumberByName
};
