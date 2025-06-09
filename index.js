const foo = "foo";
const foobar = "foobar";

const html = html`
  <button aria-label="${foobar === "foo"}" aria-pressed=${foo === "bar"}>
    foobar
  </button>
`;
