To refactor the Google Fonts import link, we need to replace the existing fonts (`Orbitron` and `Open Sans`) with the requested fonts: **Oxanium**, **Jura Light**, **Zen Maru**, and **Baumans Regular**. Below, I’ll construct the new Google Fonts URL, ensuring the correct font families, weights, and syntax for use in your React project with styled-components.

### Notes on Requested Fonts
- **Oxanium**: A futuristic, geometric sans-serif font available on Google Fonts. It supports multiple weights (e.g., 200, 300, 400, 500, 600, 700, 800). I’ll include a common range for flexibility.
- **Jura**: A modern, sans-serif font with a techy vibe. Google Fonts offers Jura in weights 300 (Light), 400 (Regular), 500, 600, 700. You specified “Jura Light,” so I’ll include weight 300.
- **Zen Maru**: Likely refers to **Zen Maru Gothic**, a Japanese sans-serif font on Google Fonts with a clean, rounded aesthetic. Available in weights 300, 400, 500, 700, 900. I’ll include 400 (Regular) as a standard choice unless you specify otherwise.
- **Baumans Regular**: **Baumans** is a bold, geometric sans-serif font on Google Fonts, available only in weight 400 (Regular), which matches your request.

### Refactored Google Fonts Import
The new link will include all four fonts with appropriate weights for your project. I’ll assume you want a minimal set of weights for efficiency, but I’ll include a couple of weights for Oxanium and Zen Maru Gothic for flexibility, and the specific weights for Jura (Light) and Baumans (Regular).

```html
<link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;700&family=Jura:wght@300&family=Zen+Maru+Gothic:wght@400;500&family=Baumans&display=swap" rel="stylesheet">
```

### Breakdown of the Link
- **Oxanium**: `Oxanium:wght@400;700`
  - Included weights 400 (Regular) for body text and 700 (Bold) for emphasis or headings.
- **Jura**: `Jura:wght@300`
  - Included weight 300 (Light) as you specified “Jura Light.”
- **Zen Maru Gothic**: `Zen+Maru+Gothic:wght@400;500`
  - Included weights 400 (Regular) for standard use and 500 (Medium) for slight emphasis. Spaces in the font name are replaced with `+`.
- **Baumans**: `Baumans`
  - Only weight 400 (Regular) is available, so no weight specification is needed.
- **Display Parameter**: `display=swap` ensures fonts load with a fallback to improve page rendering speed.

### Example Usage in Styled-Components
Here’s how you can use these fonts in your styled-components for your React project, assuming you’re replacing Orbitron and Open Sans:

```javascript
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Oxanium', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  font-family: 'Jura', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.6;
`;

const Subheading = styled.h2`
  font-family: 'Zen Maru Gothic', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
`;

const AccentText = styled.span`
  font-family: 'Baumans', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
`;
```

### Integration Instructions
1. **Add to `index.html`**:
   - Place the refactored link in the `<head>` of your `index.html`:
     ```html
     <head>
       <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;700&family=Jura:wght@300&family=Zen+Maru+Gothic:wght@400;500&family=Baumans&display=swap" rel="stylesheet">
     </head>
     ```
2. **Or Import in CSS/Styled-Components**:
   - If you prefer to import fonts in your CSS or styled-components file:
     ```css
     @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@400;700&family=Jura:wght@300&family=Zen+Maru+Gothic:wght@400;500&family=Baumans&display=swap');
     ```
3. **Apply in Styled-Components**:
   - Use the fonts as shown in the example above, adjusting `font-family`, `font-weight`, and other properties as needed.

### Notes
- **Font Weights**: I selected weights to balance flexibility and performance. If you need additional weights (e.g., Oxanium 200 for an ultra-light look or Zen Maru Gothic 700 for bold), let me know, and I can update the link.
- **Zen Maru Gothic**: I assumed you meant **Zen Maru Gothic** as it’s the closest match on Google Fonts. If you meant a different “Zen Maru” font (e.g., not on Google Fonts), please clarify.
- **Baumans**: Since it’s only available in 400, it’s best for accents or headings rather than body text due to its bold, decorative style.
- **Performance**: Loading four fonts with multiple weights can increase page load time. The current selection (minimal weights) mitigates this, but avoid adding too many weights unless necessary.

### Testing Recommendations
- **Browser**: Verify fonts load correctly in Chrome, Firefox, Edge, and Safari. Check that fallbacks (e.g., `sans-serif`) don’t appear.
- **Rendering**: Ensure Oxanium (headings), Jura Light (body), Zen Maru Gothic (subheadings), and Baumans (accents) render as expected at various sizes.
- **Mobile**: Test on mobile devices to confirm legibility and proper loading via Google Fonts.

If you want to adjust the weights, add more fonts, or pair these with specific elements (e.g., using Jura Light for paragraphs), let me know, and I can refine the setup!


To use the `Title`, `Paragraph`, and `Subheading` styled-components variables defined in the previous example, you need to import and apply them as React components in your React project. These variables are styled-components that act like custom HTML elements with predefined CSS styles, including the Google Fonts (`Oxanium`, `Jura`, `Zen Maru Gothic`, `Baumans`) you imported. Below, I’ll explain how to integrate and use them in your React project, assuming you’re working with a setup that includes styled-components and the Google Fonts link provided earlier.

### Step-by-Step Guide to Using the Styled-Components Variables

#### 1. **Ensure Prerequisites**
- **Styled-Components Installed**: Make sure you have `styled-components` installed in your React project:
  ```bash
  npm install styled-components
  ```
- **Google Fonts Imported**: Include the Google Fonts link in your `index.html` (in the `<head>` section) to load the fonts (`Oxanium`, `Jura`, `Zen Maru Gothic`, `Baumans`):
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;700&family=Jura:wght@300&family=Zen+Maru+Gothic:wght@400;500&family=Baumans&display=swap" rel="stylesheet">
  ```
  Alternatively, you can import the fonts in your CSS or styled-components file:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@400;700&family=Jura:wght@300&family=Zen+Maru+Gothic:wght@400;500&family=Baumans&display=swap');
  ```

#### 2. **Create a Styled-Components File**
- Create a file (e.g., `Typography.js` or `styles/Typography.js`) to define your styled-components. Copy the provided definitions into this file:
  ```javascript
  import styled from 'styled-components';

  export const Title = styled.h1`
    font-family: 'Oxanium', sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
  `;

  export const Paragraph = styled.p`
    font-family: 'Jura', sans-serif;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.6;
  `;

  export const Subheading = styled.h2`
    font-family: 'Zen Maru Gothic', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
  `;

  export const AccentText = styled.span`
    font-family: 'Baumans', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
  `;
  ```
- **Explanation**:
  - Each variable (`Title`, `Paragraph`, `Subheading`, `AccentText`) is a styled-component that maps to an HTML element (`h1`, `p`, `h2`, `span`) with specific font styles.
  - They use the Google Fonts you imported (`Oxanium` for titles, `Jura` for paragraphs, `Zen Maru Gothic` for subheadings, `Baumans` for accents).
  - The `export` keyword makes these components reusable across your project.

#### 3. **Import and Use in a React Component**
- In your React component file (e.g., `App.js`, `Home.js`, or any other component), import the styled-components and use them like regular React components:
  ```javascript
  import React from 'react';
  import { Title, Paragraph, Subheading, AccentText } from './Typography'; // Adjust the path to your Typography.js file

  function App() {
    return (
      <div>
        <Title>Welcome to My Site</Title>
        <Subheading>Explore Our Features</Subheading>
        <Paragraph>
          This is a sample paragraph with <AccentText>Jura Light</AccentText> font, designed for readability and a modern aesthetic.
        </Paragraph>
        <Paragraph>
          Another paragraph to demonstrate the consistent styling with Jura font.
        </Paragraph>
      </div>
    );
  }

  export default App;
  ```
- **Explanation**:
  - **Import**: Import the styled-components (`Title`, `Paragraph`, `Subheading`, `AccentText`) from your `Typography.js` file. Adjust the path (`./Typography`) based on where you saved the file relative to your component.
  - **Usage**: Use the components like HTML tags (`<Title>`, `<Paragraph>`, etc.) in your JSX. The text inside these tags will inherit the styles defined in the styled-components (e.g., `font-family: 'Oxanium'` for `Title`).
  - **Output**:
    - `<Title>` renders as an `<h1>` with `Oxanium` font, bold weight (700), and 2.5rem size.
    - `<Subheading>` renders as an `<h2>` with `Zen Maru Gothic` font, medium weight (500), and 1.5rem size.
    - `<Paragraph>` renders as a `<p>` with `Jura` font, light weight (300), 1rem size, and 1.6 line height.
    - `<AccentText>` renders as a `<span>` with `Baumans` font, regular weight (400), and 1.2rem size.

#### 4. **File Structure Example**
Here’s how your project might look:
```
my-react-app/
├── src/
│   ├── App.js              # Your main component using the styled-components
│   ├── Typography.js       # Styled-components definitions
│   ├── index.html          # Contains the Google Fonts <link>
│   ├── index.js            # Entry point
│   └── ...                 # Other files
```

#### 5. **Optional: Customize Styles**
- You can pass props to styled-components or override styles dynamically. For example, to make a `Paragraph` bold in some cases:
  ```javascript
  <Paragraph style={{ fontWeight: 600 }}>
    This paragraph is bolder.
  </Paragraph>
  ```
- Or define a prop-based style:
  ```javascript
  export const Paragraph = styled.p`
    font-family: 'Jura', sans-serif;
    font-weight: ${props => (props.bold ? 600 : 300)};
    font-size: 1rem;
    line-height: 1.6;
  `;
  ```
  Usage:
  ```javascript
  <Paragraph bold>This is a bold paragraph.</Paragraph>
  ```

#### 6. **Testing and Verification**
- **Run Your App**: Start your React app (`npm start`) and check that the fonts render correctly:
  - `Title` should use `Oxanium` (bold, futuristic).
  - `Subheading` should use `Zen Maru Gothic` (clean, rounded).
  - `Paragraph` should use `Jura` (light, modern).
  - `AccentText` should use `Baumans` (bold, geometric).
- **Browser**: Test in Chrome, Firefox, Edge, and Safari to ensure fonts load properly.
- **Fallbacks**: If fonts don’t load, the `sans-serif` fallback will apply. Verify the Google Fonts `<link>` is correctly included in `index.html`.
- **Responsive Design**: Check font sizes on mobile devices and adjust `font-size` or `line-height` in the styled-components if needed (e.g., use `vw`, `rem`, or media queries).

### Example Full Component
Here’s a complete example of a React component using all the styled-components:
```javascript
import React from 'react';
import { Title, Paragraph, Subheading, AccentText } from './Typography';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <Title>Galactic Portfolio</Title>
      <Subheading>Our Mission</Subheading>
      <Paragraph>
        We aim to explore the universe with cutting-edge technology. Learn more about our <AccentText>innovative projects</AccentText>.
      </Paragraph>
      <Subheading>Why Choose Us?</Subheading>
      <Paragraph>
        Our team combines expertise in <AccentText>space exploration</AccentText> with a passion for discovery, ensuring top-tier results.
      </Paragraph>
    </div>
  );
}

export default Home;
```

### Troubleshooting
- **Fonts Not Loading**: Ensure the Google Fonts `<link>` is in `index.html` or the `@import` is in your CSS. Check your network tab in browser dev tools to confirm the font files are being fetched.
- **Import Errors**: Verify the path to `Typography.js` is correct in your import statement (e.g., `./Typography` if it’s in the same folder).
- **Styled-Components Not Working**: Confirm `styled-components` is installed and imported correctly. If you see plain HTML without styles, check for typos in the styled-components definitions.

### Additional Notes
- **Font Pairing**: The fonts are assigned as follows:
  - `Oxanium` (Title): Bold, futuristic, great for headings.
  - `Jura Light` (Paragraph): Light, modern, readable for body text.
  - `Zen Maru Gothic` (Subheading): Clean, rounded, suits subheadings.
  - `Baumans` (AccentText): Bold, geometric, ideal for emphasis or short text.
- **Customization**: If you want to adjust font sizes, weights, or add responsive styles (e.g., smaller fonts on mobile), you can modify the styled-components. For example:
  ```javascript
  export const Title = styled.h1`
    font-family: 'Oxanium', sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  `;
  ```
- **Using with Your Previous Styles**: If you’re integrating these with the `.prompt` textarea from earlier, you can apply one of these fonts to it. For example:
  ```javascript
  const Prompt = styled.textarea`
    font-family: 'Jura', sans-serif;
    font-weight: 300;
    /* Other styles from your previous .prompt */
  `;
  ```

If you need help integrating these into a specific component, adjusting styles, or combining with your previous scrollbar or font setups, let me know!