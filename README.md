# 🚨

> **This repository is no longer maintained.** I decided to rebuild the portfolio template as a Gatsby Theme which makes it easier to update. Please use this Starter project instead: **[Gatsby Starter Portfolio Minimal Theme](https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme)**

# Gatsby Starter Portfolio Minimal

#### A modern one-page portfolio with a clean yet expressive design.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Netlify Status](https://api.netlify.com/api/v1/badges/16b36180-0897-40c5-925c-fefa0232555c/deploy-status)](https://app.netlify.com/sites/gatsby-starter-portfolio-minimal/deploys)

Portfolio Minimal is a Gatsby Starter. Starters are boilerplate projects that can be used to set up new sites effortless. With this starter, you can create a modern one-page portfolio within minutes.

Just install the starter, add your content, and there you go!

<a href="#sections">Sections</a> · <a href="#features">Features</a> · <a href="#how-to-start">How to Start</a> · <a href="#edit-content">Edit Content</a> · <a href="#edit-theme">Edit Theme</a> · <a href="#edit-page-structure">Edit Page Structure</a> · <a href="#feedback">Feedback</a>

<a href="https://gatsby-starter-portfolio-minimal.netlify.app/" target="_blank"><strong>>> LIVE DEMO</strong></a>

<a href="https://konstantin.digital/" target="_blank"><strong>>> LIVE DEMO (with Splash Screen and Cookie Bar)</strong></a>

**New Features:** 🌛 Dark Mode · 🪟 Splash Screen · 🍪 Cookie Consent Bar

---

<img src="screenshot.png" alt="Gatsby Starter Portfolio Minimal Screenshot" width="600" />

---

## Sections

The starter has predefined sections as well as a template that you can use to create new, custom sections.

**The predefined sections are:**

1. About me
2. Interests/Skills
3. Projects
4. Contact me
5. Medium articles

---

## Features

#### 🍪 [NEW] Cookie Consent Bar - Be ready for GDPR-compliant tracking.

Add tracking services like Google Analytics to your site and display a GDPR-compliant cookie consent banner.

#### 🌛 [NEW] Dark Mode - Based on user's preferences.

If the user's OS is set to using dark mode, the Gatsby Starter will automatically switch to a dark theme too.

#### 🕹️ Quick and Easy Setup - Add content and deloy.

Just install the starter, add your content, and deploy it! This starter works seamlessly with hosts like Netlify.

#### 📓 Content Integration via MDX - No external CMS needed.

MDX is a Markdown format that allows you to enrich your content with React components. This makes it fully customizable without external dependencies.

#### 🧰 Extendable Layout - Add more sections as you like.

The starter includes predefined sections as well as a template for new, custom sections. Moreover, you can add new projects to the project section without additional coding.

#### 💅 Responsive Design - With freshening animations.

The starter is designed with a mobile-first approach and looks perfect on small and large breakpoints. Moreover, it has some nice and smooth animations.

#### <img src="http://logok.org/wp-content/uploads/2015/10/Medium-logo-old.png" alt="Medium Icon" width="20" /> Medium Integration - Features latest articles.

In case you are a writer on Medium, the starter has a easy to use Medium integration that allows you to feature your latest articles.

To see all features in action, have a look at the <a href="https://gatsby-starter-portfolio-minimal.netlify.app/" target="_blank"><strong>live demo</strong></a>.

---

## How to Start

With Portfolio Minimal, you get up and running in just a few minutes.

1. **Install the Gatsby CLI.**

   ```
   npm install -g gatsby-cli

   ```

2. **Create a new Gatsby site with the Portfolio Minimal starter.**

   ```
   gatsby new portfolio-minimal https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal
   ```

3. **Start the site in `develop` mode.**

   ```
   cd portfolio-minimal
   gatsby develop
   ```

4. **Open the source code and start editing!**

---

## Edit Content

After you installed the starter project, you most likely want to add your own content.

### Edit configuration

First, you want to edit the config file which stores the site's configuration (e.g. title, description) and social profiles.

```
|-- config
    |-- index.js
```

Navigate to the `index.js` file in the config folder, edit the configuration, save it, that's it!

### Edit page content

Next, you can edit the content for each section you want to be displayed. By default, all sections are shown. If you want to remove certain sections from the site, check out <a href="#editing-page-structure">this part of the Readme</a>.

```
|-- content
    |-- imprint
    |-- index
       |-- about
       |-- contact
       ...
    ...
```

You find all content in the content folder (surprisingly). For content integration, the project uses MDX, a Markdown format. If you haven't worked with Markdown or MDX before, check the Markdown syntax in <a href="https://www.gatsbyjs.org/docs/mdx/markdown-syntax/" target="_blank">Gatsby's docs</a>. They also provide <a href="https://www.gatsbyjs.org/docs/mdx/writing-pages/" target="_blank">further information about MDX</a>.

To get up and running, just edit the predefined data fields in each `mdx` file.

---

## Edit Theme

You find the color and font settings in the configuration file, located at: `config/index.js`.

> Note: The usage of the splash screen can be set for each page individually in the page content directory.

---

## Edit Page Structure

To remove or reorder predefined sections, navigate to the `src/pages/index.js` file. This is the home page of your site.

Each section (besides the Articles section) exists of an imported React component and a GraphQL query that is needed for data querying.

**If you want to remove a section**, just delete the imported React component and query.

**If you want to reorder your sections**, just reorder the React components inside the `<Layout />` component.

### Add custom sections

If you want to add your own custom sections, there is a section template you can use. You can find it in the following directory: `src/components/templates`

---

## Feedback

Designing and building a portfolio from scratch can be tough. To inspire you and provide you a foundation to build upon, I've decided to publish [my personal website](https://konstantin.digital) as a Gatsby Starter. This boilerplate project should motivate you to build your own awesome portfolio with Gatsby.

I always appreciate feedback, so share your thoughts and suggestions with me: [mail@konstantin.digital](mailto:mail@konstantin.digital)

If you find any bugs or have feature suggestions, create a new issue or pull request 🙏

Thanks a lot for using this starter! 💪

<a href="https://www.buymeacoffee.com/kmuenster" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Konstantin Münster – [konstantin.digital](https://konstantin.digital)

---

## License

Distributed under the [MIT](http://showalicense.com/?fullname=Konstantin+M%C3%BCnster&year=2019#license-mit) license.

See `LICENSE` for more information.
