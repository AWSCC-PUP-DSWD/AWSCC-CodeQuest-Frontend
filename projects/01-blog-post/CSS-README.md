**<h1 align=center> CSS STYLING </h1>**

***Welcome to the styling phase of CodeQuest!*** This guide will help you style the HTML structure provided in the Blog Template. Follow these instructions to enhance the visual appeal of your web page.

**<h2 style="border-bottom: none;"> Step 1: Link the external CSS to your HTML </h2>**

**<h2 style="border-bottom: none;"> Step 2: Add classes to the elements </h2>**

Please observe the comments where you'll find words or phrases enclosed in double quotation marks. Utilize these quoted strings or words as a guide when naming your element classes. This will enhance clarity and streamline the implementation of the upcoming instructions.
After naming the classes, we can now push through with the styling in the external CSS

### **Global Styling:**
   - Open the provided CSS file (`styles.css`) and familiarize yourself with the global styles.
   - Note the `:root` declarations, defining variables for colors and box shadows.
   - Take advantage of these variables for consistent styling throughout your document.

### **Reset and Normalize:**
   - The CSS file includes a universal reset for padding and margin. Ensure you understand how this affects your elements.

### **Typography:**
   - The font used in this template is "Lato" from Google Fonts. Make sure to include the import statement in your HTML `<head>` section:
     ```css
     @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
     ```
   - Apply the 'Lato' font to the entire document using the `font-family` property.

### **Navigation Styling:**


#### **Step 1: Navigation Bar Styles**
In this step, we define the overall styling for the navigation bar. It sets it as a flex container with space between items, a sticky position, and adjusts margin and height. This creates a flexible and sticky navigation bar.

```css
nav {
    display: ;
    justify-content:;
    align-items: ;
    flex-wrap: ;
    flex-direction: ;
    margin: ; 
    Height: ;
    position: ;
}
```

#### **Step 2: Navigation Text Styles**
Here, we style the text inside the navigation bar, setting the font size, weight, color, and cursor. The transition property adds a smooth effect when interacting with the text.


```css
nav p {
    font-size: ;
    font-weight: ;
    color: ;
    cursor: ;
    transition: ;
}
```

#### **Step 3: Navigation Span Styles**
Styles a specific span element within the navigation text. This step changes the color of the span and adds a transition effect.


```css
nav p span {
    color: ;
    transition: ;

}

```

#### **Step 4: Navigation List Styles**
Styles the navigation list, making it a flex container with a specified gap, font size, and z-index. The z-index ensures the navigation list is visually above other elements.


```css
nav ul {
    display: ;
    gap: ;
    font-size: ;
    z-index: ;
}
```

#### **Step 5: Navigation List Item Styles**
Styles individual items within the navigation list, setting borders, padding, border radius, cursor, and transition. These styles enhance the appearance of each navigation item.


```css
nav ul li {
    border: ;
    padding: ;
    border-radius: ;
    cursor: ;
    transition: ;
}
```


#### **Step 6: Navigation List Item Hover Styles**
Defines the styles for when a user hovers over a navigation item. It changes the border and border radius with a smooth transition effect.


```css
nav ul li:hover {
    border: ;
    border-radius: ;
    transition: ;
}
```


#### **Step 7: Navigation List Item Anchor Styles**
Styles the anchor links within the navigation list items. It sets the text color, font weight, and adds a transition effect for a smooth color change.
```css
nav ul li a {
    color: ;
    font-weight: ;
    transition: ;
}
```


#### **Step 8: Navigation List Item Anchor Hover Styles**
Specifies the styles for anchor links when hovered over. It changes the text color with a smooth transition effect.

```css
nav ul li:hover > a {
    color: ;
    transition: ;
}
```


#### **Step 9: Responsive Styles for Navigation**
Adds responsive styles for screens with a maximum width of 880px. It adjusts the margin to make the navigation more suitable for smaller screens.
```css
@media only screen and (max-width: 880px) {
    nav {
        margin: ;
    }
}
```


#### **Step 10: Responsive Styles for Hidden Navigation on Small Screens**

Adds responsive styles for screens with a maximum width of 700px. It hides the navigation list on smaller screens to optimize the layout for mobile devices.

```css
@media only screen and (max-width: 700px) {
    nav ul {
        display: ;
    }
}
```

### **Slider Section Styling:**
   - Style the slider section (`<section class="slider">`) to have a background color, height, and position.
   - Adjust the text color and size within the slider content for readability.


#### **Step 1: Section Styles**
Defines the overall style for the section containing the slider. It sets the position to relative, gives it a green background color, and sets an initial height of 250px.

```css
section {
    position: ;
    background-color: ;
    height: ;
}
```

#### **Step 2: Content Styles**
Styles the content within the section. It uses absolute positioning to center the content both horizontally and vertically. The text is set to be centered, with a white color, and the width is set to 100%.

```css
.content {
    position: ;
    left: ;
    top: ;
    transform: ;
    text-align: ;
    color: ;
    width: ;
}
```


#### **Step 3: Heading Styles**
Styles the heading (h2) within the content. It sets the font size to 6rem, controlling the size of the main text in the slider.

```css
.content h2 {
    font-size: ;
}
```


#### **Step 4: Paragraph Styles**
Styles the paragraph (p) within the content. It sets the font size to 1.8rem, controlling the size of additional text in the slider.

```css
.content p {
    font-size: ;
}
```


#### **Step 5: Responsive Styles**
Adjusts the font sizes for the heading and paragraph at different screen widths using media queries. This ensures that the slider content remains visually appealing and readable on various devices. The paragraph is hidden on screens with a maximum width of 300px.

```css
@media only screen and (max-width: 945px) {
    .content h2 {
        font-size: ;
    }
    
    .content p {
        font-size: ;
    }
}

@media only screen and (max-width: 680px) {
    .content h2 {
        font-size: ;
    }
    
    .content p {
        font-size: ;
    }
}

@media only screen and (max-width: 300px) {
    .content h2 {
        font-size: ;
    }
    
    .content p {
        display: ;
    }
}
```

### **Main Content Section Styling:**
   - Style the main content section (`<main class="main-content">`) to have a flexible layout with a gap between the blog and sidebar sections.
    - Ensure responsiveness by using media queries to adjust styles based on screen size.


#### **Step 1: Main Content Container Styles**
Defines the main content container, configuring it as a flex container with a row layout, left-aligned items, and specific margins. The container has a gap of 5rem between child elements.
```css
.main-content {
    display: ;
    align-items: ;
    flex-direction: ;
    text-align: ;
    margin: ;
    gap: ;
}
```

#### **Step 2: Blog Section Styles**
Styles the blog section within the main content. It is set to take up three times as much space as the other flex items, creating a flexible layout.
```css
.blog {
    flex: ;
}
```


#### **Step 3: Sidebar Section Styles**
Styles the sidebar section within the main content. It is set to take up one times as much space as the other flex items, creating a flexible layout.

```css
.sidebar {
    flex: ;
}
```


#### **Step 4: Post Styles**
Styles each post within the main content. Posts are displayed as flex containers with a white background, box shadow, margin, and a minimum height.
```css
.post {
    display: ;
    background-color: ;
    box-shadow: ;
    margin-bottom: ;
    position: ;
    min-height: ;
}
```


#### **Step 5: Post Image Styles**
Styles the post image, ensuring it takes up at least the full height of its container with a smooth transition effect and hidden overflow.
```css
.post-image {
    min-height: ;
    transition: ;
    overflow: ;
}
```

#### **Step 6: Hover Effect on Post **Image
Adds a hover effect to the post image, scaling it to 1.5 times its original size with a smooth transition effect.
```css
.post:hover .post-image img {
    transform: ;
    transition: ;
}
```


#### **Step 7: Post Image Inner Styles**
Styles the inner image within the post, ensuring it covers the entire container with a smooth transition effect.
```css
.post-image img {
    height: ;
    transition: ;
    object-fit: ;
}
```


#### **Step 8: Post Content Styles**
Styles the content within each post, adding padding, left-aligning text, and configuring it as a flex container with a column layout and space-evenly distribution.


```css
.post-content {
    padding: ;
    text-align: ;
    display: ;
    flex-direction: ;
    flex-wrap: ;
    justify-content: ;
}
```

#### **Step 9: Post Title Styles**
Styles the title of each post with a specific color, font size, bold weight, and a pointer cursor to indicate interactivity.


```css
.post-title {
    color: ;
    font-size: ;
    font-weight: ;
    cursor: ;
}
```


#### **Step 10: Post Info Styles**
Styles the information section of each post with left-aligned text, padding, a specific color, and font size.
```css
.post-info {
    text-align: ;
    padding: ;
    color: ;
    font-size: ;
}
```

#### **Step 11: Post Summary Styles**
Styles the summary section of each post with a specified line height, color, and font size.
```css
.post-summary {
    line-height: ;
    color: ;
    font-size: ;
}
```

#### **Step 12: Responsive Styles**
Adjusts the layout of the main content container to a column on screens with a maximum width of 992px, ensuring a responsive design.
```css
@media only screen and (max-width: 992px) {
    .main-content {
        flex-direction: ;
    }
}
```
- Configures the main content container to display its children in a column layout on screens with a maximum width of 992px.

#### **Step 13: Responsive Styles for Posts**
Adjusts the margin for the main content container and changes the direction of posts to be displayed in a column on screens with a maximum width of 500px, optimizing the layout for smaller screens.
```css
@media only screen and (max-width: 500px) {
    .main-content {
        margin: 3rem 1rem;
    }

    .post {
        flex-direction: column;
    }
}
```
- Adjusts the margin for the main content container and changes the direction of the posts to be displayed in a column on screens with a maximum width of 500px.

These styles collectively create a flexible and responsive layout for the main content section, including blog posts and a sidebar. Adjustments may be needed based on your specific design preferences and HTML structure.

### **Sidebar Styling:**


#### **Step 1: Sidebar Container Styles**
Defines the overall styling for the sidebar container, making it a flex container with a column layout and aligning items.
```css
.sidebar {
    text-align: ;
    display: ;
    flex-direction: ;
    flex-wrap: ;
    align-items: ;
    align-content: ;
}
```


#### **Step 2: Popular Posts Container Styles**
Styles the container for popular posts within the sidebar, specifying margin and width.
```css
.popular-posts-side {
    margin: ;
    width: ;
}
```

#### **Step 3: Popular Posts Heading Styles**
Defines the styling for the heading of the popular posts section, including font size, color, weight, and padding.


```css
.popular-posts-side h2 {
    font-size: ;
    color: ;
    font-weight: ;
    padding-bottom: ;
    padding-top: ;
}
```


#### **Step 4: Popular Post Styles**
Configures the styles for each individual popular post, setting background color, margin, box shadow, and other visual properties.
```css
.popular-post {
    position: ;
    background-color: ;
    margin-bottom: ;
    box-shadow: ;
    display: ;
    align-items: ;
    flex-wrap: ;
    flex-direction: ;
    align-content: ;
    padding: ;
    gap: ;
    transition: ;
}
```


#### **Step 5: Popular Post Hover Styles**
Specifies the styles for a popular post when hovered, creating a visual effect by adjusting margins.
```css
.popular-post:hover {
    margin-left: ;
    margin-right: ;
    transition: ;
}
```

#### **Step 6: Popular Post Image Styles**
Styles the container for popular post images, setting a fixed width and height.

```css
.popular-post-image {
    width: ;
    height: ;
}
```

#### **Step 7: Popular Post Image Hover Styles**
Defines styles for images within popular posts, ensuring they cover the container with a minimum width and height.

```css
.popular-post-image img {
    min-width: ;
    min-height: ;
    object-fit: ;
}
```


#### **Step 8: Popular Post Title Styles**
Specifies the styles for the title within popular posts, setting font size, color, and weight.
```css
.popular-post-title {
    font-size: ;
    color: ;
    font-weight: ;
}
```

#### **Step 9: Popular Post Description Styles**
Styles the description within popular posts, setting font size and color.


```css
.popular-post-desc {
    font-size: ;
    color: ;
}
```

#### **Step 10: Responsive Styles for Popular Posts Container**
Adjusts the layout of the popular posts container for smaller screens, ensuring proper alignment.


```css
@media only screen and (max-width: 500px) {
    .popular-posts-side {
        margin: ;
    }

    .sidebar {
        flex-direction: ;
    }
}
```

#### **Step 11: Social Side Container Styles**
Styles the container for social links within the sidebar, specifying margin and width.


```css
.social-side {
    margin: ;
    width: ;
}
```

#### **Step 12: Social Side Box Styles**
Configures the styles for each social link box, including display, padding, box shadow, background color, border radius, and alignment.


```css
.social-side div {
    display: ;
    padding: ;
    box-shadow: ;
    background: ;
    border-radius: ;
    gap: ;
    justify-content: ;
}
```


#### **Step 13: Social Side Link Styles**
Styles the links within social link boxes, setting a maximum width and a transition effect.
```css
.social-side div a {
    max-width: ;
    transition: ;
}
```

#### **Step 14: Social Side Link Hover Styles**
Defines styles for social links when hovered, adding a border radius and blur effect.


```css
.social-side div a:hover img {
    border-radius: ;
    filter: ;
    transition: ;
}
```
- Defines the styles for the social side links when hovered, adding a border radius and a blur effect.

#### **Step 15: Footer Splitter Styles**
Adjusts the layout of the sidebar for smaller screens, ensuring proper alignment of popular posts and social links.


```css
@media only screen and (max-width: 992px) {
  .sidebar {
        flex-direction: ;
    }

    .popular-posts-side {
        flex: ;
    }
}
```


These steps collectively create a styled sidebar with popular posts, social links, and responsive design. Adjustments can be made based on specific design preferences and requirements.




### **Footer Styling:**
    - Style the footer (`<footer>`) to have a background color and text color that complement the overall theme.
    - Apply styles to the individual footer boxes for a neat and organized appearance.
    - Use the provided `<hr>` with class "splitter" for visual separation.



#### **Step 1: Footer Container Styles**
Sets the background color of the footer container to black and the text color to white.
```css
.container footer {
    background-color: ;
    color: ;
}
```

#### **Step 2: Footer Boxes Container Styles**
Configures the footer boxes container as a horizontally centered flex container with padding and a gap between child elements.
```css
.container footer .footerBoxes {
    display: ;
    flex-direction: ;
    align-content: ;
    justify-content: ;
    align-items: ;
    gap: ;
    padding: ;
}
```

#### **Step 3: Responsive Styles for Footer Boxes Container**
Adjusts the padding of the footer boxes container for screens with a maximum width of 1000px.


```css
@media only screen and (max-width: 1000px) {
    .container footer .footerBoxes {
        padding: ;
    }
}
```

#### **Step 4: Responsive Styles for Footer Boxes Container (Mobile)**
Changes the layout of the footer boxes container to a column on screens with a maximum width of 600px, optimizing for smaller screens.


```css
@media only screen and (max-width: 600px) {
    .container footer .footerBoxes {
        flex-direction: ;
    }
}
```
- Changes the layout of the footer boxes container to a column on screens with a maximum width of 600px, optimizing for smaller screens.

#### **Step 5: Footer Box Styles**
Sets each footer box within the footer boxes container to take up an equal amount of space and aligns text to the center.


```css
.container footer .footerBoxes .footerBox {
    flex: ;
    text-align: ;
}
```

#### **Step 6: Footer Box Heading Styles**
Styles the heading within each footer box with a specific color, font size, weight, letter spacing, and padding.


```css
.container footer .footerBoxes .footerBox h3 {
    color: ;
    font-size: ;
    font-weight: ;
    letter-spacing: ;
    padding-bottom: ;
}
```


#### **Step 7: Footer Box Divider Styles**
Styles the divider within each footer box with a specific height, width, background color, and margin.


```css
.container footer .footerBoxes .footerBox hr {
    height: ;
    width: ;
    background: ;
    border: ;
    margin-bottom: ;
}
```


#### **Step 8: Footer Box Text Styles**
Styles the text paragraph within each footer box with a specific font size and color.


```css
.container footer .footerBoxes .footerBox p {
    font-size: ;
    color: ;
}
```

#### **Step 9: Footer Splitter Styles**
Styles the footer splitter with a specific height, width, color, and margin.
```css
.container footer .splitter {
    height: ;
    width: ;
    margin: ;
    background: ;
    border: ;
    margin-bottom: ;
}
```


#### **Step 10: Copy-Right Text Styles**
Styles the copy-right text with a specific font size, width, alignment, opacity, and padding.


```css
.copy-right {
    font-size: ;
    width: ;
    text-align: ;
    opacity: ;
    padding: ;
}
```


### **Responsive Design:**
- Use media queries to ensure your styles adapt to different screen sizes.
- Test your design on various devices to ensure a consistent and user-friendly experience.

### **Additional Tips:**
- Pay attention to spacing, padding, and margins to create a visually balanced design.
- Experiment with color schemes that match the theme of your blog.
- Test your styles in different browsers to ensure cross-browser compatibility.

> ***Feel free to get creative and add your personal touch to the design.*** If you encounter any challenges or have questions, don't hesitate to ask for assistance. Happy styling! 🚀

