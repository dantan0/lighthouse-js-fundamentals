const chooseStations = function (stations) {
  // Your code in here ...
  let eligibleStations = [];
  for (let station of stations) {
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) {
      eligibleStations.push(station[0]);
    }
  }
  return eligibleStations;
}
