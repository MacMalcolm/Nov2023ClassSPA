import html from "html-literal";

export default state => html`
  <footer>
    &copy; 2020 <a href="https://savvycoders.com/">Savvy Coders</a>
    The weather in ${state.weather.city} is ${state.weather.description}.
  </footer>
`;
