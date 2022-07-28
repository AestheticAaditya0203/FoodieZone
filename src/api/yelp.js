import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Ox1dPyMFowdC1KnQxkg5khZeHnh2CEFUatNpYxFFTcppxtOeJhcBe3QzvCUyl3vDsE_ToYeaIJgnv142pnstFlAeSs6CQ6qIv7vS9tmzPzJhNhgnSFIlgE0AdCmzYnYx",
  },
});

/* my own key: 01ki55PRJXeBxI0uwO_XVN1ipNu-YlzSNnHkUDcrosYQr5x4zwjRar_kklvjLpDvwRt-fSHlRhA0k0f5mWHVpspHJ527noUp6I5WDzTC-uojuddlrWf41n-4nSHaYnYx */
