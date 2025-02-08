# 🕸️ Week 2: Web Foundations 🕸️

## **Phase 1: Spider-Man**

### **Objective:**

Learn the foundations of web design by mastering HTML and CSS, creating the structure and styling that powers the web.

---

## **1. HTML Basics – The Web’s Skeleton**

HTML (HyperText Markup Language) is the foundation of any webpage. It provides structure and meaning to content. Every HTML document consists of elements wrapped in tags that define the page layout.

### **Key Concepts:**

- **Elements & Tags**: Fundamental building blocks of HTML. Examples include `<h1>`, `<p>`, `<div>`, and `<a>`.
- **Nesting**: Placing elements inside other elements to create structure.
- **Attributes**: Providing additional information to elements (e.g., `href` for links, `alt` for images).
- **Semantic HTML**: Using meaningful tags like `<article>`, `<section>`, `<nav>` to improve readability and accessibility.

### **Basic Structure of an HTML Document:**

An HTML document follows a structured format that includes a declaration, head, and body sections:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to My Page</h1>
    <p>This is a simple paragraph.</p>
</body>
</html>
```

---

## **2. HTML Forms and Inputs – User Interaction**

Forms allow users to interact with webpages by submitting data. Forms consist of various input elements that collect user information.

### **Key Concepts:**

- **Input Types**: Text, email, password, number, radio, checkbox.
- **Validation**: Required fields, min/max values, pattern matching.
- **GET vs POST**: GET sends data in the URL, POST sends it securely in the request body.
- **Labels & Accessibility**: Labels improve usability for screen readers.

### **Common Form Elements:**

- `<input>`: Single-line text fields
- `<textarea>`: Multi-line text fields
- `<select>`: Dropdown lists
- `<button>`: Submit actions

---

## **3. CSS Basics – Styling the Web**

CSS (Cascading Style Sheets) is used to style and layout webpages. It controls the appearance of elements on a page.

### **Key Concepts:**

- **Selectors**: Apply styles to elements (e.g., `h1 { color: red; }`)
- **Box Model**: Defines the space an element takes up (content, padding, border, margin)
- **Specificity**: Determines which styles are applied when conflicts exist

### **Box Model Explanation:**

The box model consists of:

- **Margin**: Space outside the element.
- **Border**: A boundary around the element.
- **Padding**: Space between the content and the border.
- **Content**: The actual content inside the element.

### **Selectors and Specificity:**

- **Element Selectors**: `p { color: blue; }`
- **Class Selectors**: `.highlight { font-weight: bold; }`
- **ID Selectors**: `#main-title { font-size: 24px; }`

---

## **4. CSS Flexbox – Layout Mastery**

Flexbox (Flexible Box Layout) is a CSS module that provides an efficient way to align and distribute space among items in a container, even when their sizes are dynamic.

### **Key Concepts:**

- **Flex Container**: The parent element that enables Flexbox (`display: flex;`)
- **Flex Items**: The child elements inside a flex container
- **Main Axis & Cross Axis**: The primary and perpendicular axes for alignment
- **Justify Content**: Controls horizontal alignment (e.g., `justify-content: center;`)
- **Align Items**: Controls vertical alignment (e.g., `align-items: center;`)
- **Flex Direction**: Defines the direction of items (`row`, `column`, etc.)

Flexbox allows for responsive, easy-to-manage layouts without relying on floats or positioning hacks.

---

Happy Coding! 🚀
