import { html, TemplateResult } from "npm:lit-html";

// https://stackoverflow.com/a/70658580
const render = (template: TemplateResult): string => {
  const { strings, values } = template;
  const v = [...values, ""].map((e) =>
    typeof e === "object" ? render(e as TemplateResult) : e
  );
  return strings.reduce((acc, s, i) => acc + s + v[i], "");
};

export default function (): string {
  const template = html`
    <script type="module" src="/component.js"></script>
    <main>
      <h1>Lit-HTML</h1>

      <p>This page is a Lit-HTML template</p>
      <p>But the blue text following this is is a Lit web-component: <simple-greeting></simple-greeting></p>
  </main>
  `;
  return render(template);
}
