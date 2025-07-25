---
tags: []
ogImage:
  props: {}
schemaOrg: {}
head:
  script: []
sitemap:
  videos: []
  images:
    - loc: /projects/helpr.webp
      caption: this is imag
  lastmod: 2025-07-11T00:00:00.000Z
  loc: /center-image.png
  changefreq: monthly
  priority: 2
title: Powerful Components page
description: Build Beautiful UI With 111+ Powerful Components page
readingTime: "15"
image: /articles/simplicity-is-the-ultimate-sophistication.jpg
---

# Build Beautiful UI With 111+ Powerful Components

## Introduction

> Nuxt UI harnesses the combined strengths of Reka UI, Tailwind CSS, and Tailwind Variants to offer developers an unparalleled set of tools for creating sophisticated, accessible, and highly performant user interfaces.

:iframe{.rounded-md allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow-full-screen="true" frame-border="0" height="100%" referrer-policy="strict-origin-when-cross-origin" src="https://www.youtube-nocookie.com/embed/_eQxomah-nA?si=pDSzchUBDKb2NQu7" style="aspect-ratio: 16/9;" title="YouTube video player" width="100%"}

## Reka UI

We've transitioned from [Headless UI](https://headlessui.com/) to [Reka UI](https://reka-ui.com/) as our core component foundation. This shift brings several key advantages:

- **Extensive Component Library**: With 55+ primitives, Reka UI significantly expands our component offerings.
- **Active Development**: Reka UI's growing popularity ensures ongoing improvements and updates.
- **Enhanced Accessibility**: Built-in accessibility features align with our commitment to inclusive design.
- **Vue 3 Optimization**: Seamless integration with Vue 3 and the Composition API.

This transition empowers Nuxt UI to become a more comprehensive and flexible UI library, offering developers greater power and customization options.

## Tailwind CSS v4

Nuxt UI integrates the latest Tailwind CSS v4, bringing significant improvements:

- **Built for performance**: Full builds in the new engine are up to 5x faster, and incremental builds are over 100x faster — and measured in microseconds.
- **Unified toolchain**: Built-in import handling, vendor prefixing, and syntax transforms, with no additional tooling required.
- **CSS-first configuration**: A reimagined developer experience where you customize and extend the framework directly in CSS instead of a JavaScript configuration file.
- **Designed for the modern web**: Built on native cascade layers, wide-gamut colors, and including first-class support for modern CSS features like container queries, @starting-style, popovers, and more.

::note
---
ariaLabel: Tailwind CSS v4 upgrade guide
target: _blank
to: https://tailwindcss.com/docs/upgrade-guide#changes-from-v3
---
Learn about all the breaking changes in Tailwind CSS v4.
::

## Tailwind Variants

We've adopted [Tailwind Variants](https://www.tailwind-variants.org/) to manage our design system, offering:

- **Dynamic Styling**: Flexible component variants with a powerful API
- **Type Safety**: Full TypeScript support with auto-completion
- **Conflict Resolution**: Efficient merging of conflicting styles

This integration unifies the styling of components, ensuring consistency and code maintainability.

## TypeScript Integration

Nuxt UI offers significantly improved TypeScript integration, providing a superior developer experience:

- **Enhanced Auto-completion**:
  - Full auto-completion for component props based on your theme
  - Intelligent suggestions for `app.config.ts` theme configuration
- **Generic-based Components**:
  - Built using [Vue 3 Generics](https://vuejs.org/api/sfc-script-setup.html#generics)
  - Improved type inference for slots and events
- **Type-safe Theming**:
  - Leveraging Tailwind Variants for type-safe styling options
  - Customizable types for extended theme configurations

::note
---
ariaLabel: Accordion component with custom slot
to: /components/accordion#with-custom-slot
---
Check out an example of the Accordion component with auto-completion for props and slots.
::

## Vue compatibility

You can now use Nuxt UI in any Vue project without Nuxt by adding the Vite and Vue plugins to your configuration. This provides:

- **Auto-imports**: Components and composables are automatically imported and available globally
- **Theming System**: Full theming support with customizable colors, sizes, variants and more
- **Developer Experience**: Complete TypeScript support with IntelliSense and auto-completion

::tip{ariaLabel="Vue installation guide" to="/getting-started/installation/vue"}
Learn how to install and configure Nuxt UI in a Vue project in the **Vue installation guide**.
::

## Nuxt DevTools Integration

You can play with Nuxt UI components as well as your app components directly from Nuxt Devtools with the [compodium](https://github.com/romhml/compodium) module, providing a powerful development experience:

- **Component Inspector**: Inspect and analyze Nuxt UI components in real-time
- **Live Preview**: Modify component props and see changes instantly
- **Code Generation**: Get the corresponding code for your component configurations

::note
Install the module to your Nuxt application with one command:

```bash [Terminal]
npx nuxt module add compodium
```
::

:video{.w-full,h-auto,rounded controls poster="https://res.cloudinary.com/nuxt/video/upload/so_0/v1740751953/nuxt-ui/nuxt-compodium_y2bvqw.jpg"}

## Migration

We want to be transparent: migrating from Nuxt UI v2 to v3 will require significant effort. While we've maintained core concepts and components, Nuxt UI v3 has been rebuilt from the ground up, resulting in a new library with enhanced capabilities.

Key points to consider:

- Read our [migration guide](/getting-started/migration) to upgrade your project from v2 to v3.
- Review the new documentation and components carefully before attempting to upgrade.
- If you encounter any issues, please report them on our [GitHub repository](https://github.com/nuxt/ui/issues).

## FAQ

::accordion
  :::accordion-item{label="Is Nuxt UI compatible with standalone Vue projects?"}
  Nuxt UI is now compatible with Vue! You can follow the [installation guide](/getting-started/installation/vue) to get started.
  :::

  :::accordion-item{label="What about Nuxt UI Pro?"}
  We've also rebuilt Nuxt UI Pro from scratch as v3 to match Nuxt UI version. The license you bought or will buy is valid for both Nuxt UI Pro v1 and v3, this is a **free update**. You can follow the [installation guide](/getting-started/installation/pro/nuxt) to get started.
  :::

  :::accordion-item
  ---
  label: Will Nuxt UI work with other CSS frameworks like UnoCSS?
  ---
  Nuxt UI is currently designed to work exclusively with Tailwind CSS. While there's interest in UnoCSS support, implementing it would require significant changes to the theme structure due to differences in class naming conventions. As a result, we don't have plans to add UnoCSS support.
  :::

  :::accordion-item{label="How does Nuxt UI handle accessibility?"}
  Nuxt UI enhances accessibility through Reka UI integration. This provides automatic ARIA attributes, keyboard navigation support, intelligent focus management, and screen reader announcements. While offering a strong foundation, proper implementation and testing in your specific use case remains crucial for full accessibility compliance. For more detailed information, refer to [Reka UI's accessibility documentation](https://reka-ui.com/docs/overview/accessibility).
  :::

  :::accordion-item{label="What is the testing approach for Nuxt UI?"}
  Nuxt UI ensures reliability with 1000+ Vitest tests, covering core functionality and accessibility. This robust testing suite supports the library's stability and serves as a reference for developers.
  :::
::

---

We're excited about the possibilities Nuxt UI v3 brings to your projects. Explore our documentation to learn more about new features, components, and best practices for building powerful, accessible user interfaces.
