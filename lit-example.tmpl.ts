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
    <h1>Test World</h1>
  `;
  return render(template);
}
