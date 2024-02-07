# Certara Cards

## How to Run Locally

This app uses NPM for dependency management. Before starting, make sure you have NPM installed.

1. Clone or Fork the application from GitHub
2. Run `npm install`
3. Run `npm run dev`
4. The application should be available at http://localhost:5173 by default. However, check the console to get the exact port since it could be different if the default port is occupied.

## Thought Process

I wanted to mimic what it would be like to consume components from an external component library. These simulated "external components" live inside the `/src/components/library` directory, the primary one being the `Card` component and its subcomponents.

The `Card` is a "base-level" design component that can be used anywhere in, in any of the company's applications. Although this example is extremely simple, it is possible to add additional style items or functionality that can easily be applied to all of the consuming applications. For example, maybe we want to add accordion-like dropdown functionality to all of the `Cards` in our design system. Instead of adding the new functionality to all of the applications individually, we can just update the `Card` in our component library and propogate that to the downstream apps.

The `ActionCard` component is a more opinionated, application-specific component. It utilized our component library `Card` component and extended it to fit the current application's needs. It's quite possible each application will want to use cards a bit differently while maintaining the base design system's card styles and functionality. It's the application's responsibility to extend the component library components (like the `Card`) to fit their use cases.
