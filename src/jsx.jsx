export default function () {
  return <>
    <script type="module" src="/component.js"></script>
    <main>
      <h1>JSX</h1>
      <p>This page is a JSX template.</p>
      <p>No React in sight! YUCK!</p>
      <p>But the blue text following this is is a Lit web-component: <simple-greeting></simple-greeting></p>
    </main>
  </>;
}