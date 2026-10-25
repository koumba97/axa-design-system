# Technical test - AXA Design system

## Presentation

AXA Design system is a UI components library built with [Lit]('https://lit.dev/') and [Typescript]('https://www.typescriptlang.org/').

This library allow users to import web components in various frontend project while centralazing styles and UI elements.

## Explore the project locally

To set up the project locally and explore its features, follow these steps:

### 1. Install

Clone the github repository and install the dependencies.

```shell
git clone https://github.com/koumba97/axa-design-system
```

```shell
cd axa-design-system
```

```shell
npm install
```

### 2. Run Storybook

The project was build with [Storybook]('https://storybook.js.org/'), which allows you to vizualize the components, go through their variants and inspect their APIs.

To run Storybook, run the following command:

```shell
npm run storybook
```

### 3. Run the tests

The tests were written using [Vitest]('https://vitest.dev/') as the project was built with [Vite]('https://vite.dev/').

To run the tests, run the following command:

```shell
npm run test
```

## Use the design system on production

The Storybook and the UI library have been deployed on production. Here's how to access the components and integrate the design system in your projects.

### Storybook

You can go through the components and the documentation of the design system via this link: [https://koum-axa-design-system.vercel.app/]('https://koum-axa-design-system.vercel.app/').

### Install the design system

The library is available as a [npm package]('https://www.npmjs.com/package/koum-axa-design-system').
Install it in your project using:

```shell
npm install koum-axa-design-system
```

### Usage

Import the components you need and the library's stylesheet in your project:

```typescript
import "koum-axa-design-system";
import "koum-axa-design-system/style.css";
```

And use the components in your application. For example, in a React project:

```typescript
function App() {
  return (
    <section>
        <axa-card
            type="sm"
            image="/images/AXA_Logo.svg.webp"
            cardDate="11/12/2020"
            cardTitle="Car Insurance"
            content="AXA Car insurance is tailored to your needs."
            subHead="Member online"
        ></axa-card>

       <axa-button-link
            label="Button"
            buttonstyle="link"
            buttontype="button"
            url=""
        ></axa-button-link>
    </section>
  );
}
```

### Available components

The library currently includes the following components:

- [Image]('https://koum-axa-design-system.vercel.app/?path=/docs/components-image--docs') (axa-image)
- [ButtonLink]('https://koum-axa-design-system.vercel.app/?path=/docs/components-buttonlink--docs') (axa-button-link)
- [Card]('https://koum-axa-design-system.vercel.app/?path=/docs/components-card--docs') (axa-card)

For more details about their properties and available variants, visit the [Storybook]('https://koum-axa-design-system.vercel.app/') documentation.
