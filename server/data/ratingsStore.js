class RatingsStore {
  constructor() {
    this.ratings = {
      "😇": 0,
      "😡": 0,
      "😭": 0
    };
  }

  increment(emoji) {
    ++this.ratings[emoji];
  }

  getCount(emoji) {
    return this.ratings[emoji];
  }
}

module.exports = { ratingsStore: new RatingsStore() };
