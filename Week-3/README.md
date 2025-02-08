# 🕸️ Week 3: Styling the Web 🕸️

# **Phase 1: Spider-Man**

### **Objective:**

Deepen your understanding of CSS by mastering layouts, advanced styling, and frameworks to create visually appealing and responsive webpages.

---

## **1. CSS Grid – Creating Complex Layouts**

CSS Grid is a powerful layout system designed to handle complex webpage structures with ease.

### **Key Concepts:**

- **Grid Container**: The parent element that enables grid layout (`display: grid;`)
- **Grid Items**: The child elements inside a grid container
- **Grid Template Columns & Rows**: Define the structure of the grid (`grid-template-columns: 1fr 2fr;`)
- **Gap Property**: Controls spacing between grid items (`gap: 20px;`)
- **Alignment Properties**: `justify-items`, `align-items`, and `place-items` for precise positioning

#### **Example:**

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}
.item {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}
```

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
</div>
```

Grid provides a two-dimensional approach, allowing items to be placed efficiently without the need for floats or extra divs.

---

## **2. Responsive Design & Media Queries**

Responsive design ensures that webpages look great on all screen sizes. Media queries allow CSS rules to adapt based on the device's width, height, or other properties.

### **Key Concepts:**

- **Viewport Meta Tag**: Ensures proper scaling (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`)
- **Media Queries**: Apply styles based on screen size (`@media (max-width: 768px) { body { background: lightgray; } }`)
- **Fluid Layouts**: Use percentages or `vh/vw` units instead of fixed pixel values
- **Mobile-First Approach**: Design for smaller screens first, then expand styles for larger devices

#### **Example:**

```css
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
```

This ensures that the background color changes when the screen width is below 768px.

---

## **3. Advanced CSS Styling**

Enhance user experience with pseudo-classes, animations, and transitions.

### **Key Concepts:**

- **Pseudo-Classes**: Apply styles based on user interaction (`:hover`, `:focus`, `:nth-child`)
- **Pseudo-Elements**: Style specific parts of elements (`::before`, `::after`)
- **Transitions**: Create smooth animations between states (`transition: all 0.3s ease-in-out;`)
- **Animations**: Use `@keyframes` to define custom animations

#### **Example:**

```css
button {
  background-color: blue;
  color: white;
  padding: 10px;
  transition: background-color 0.3s ease-in-out;
}
button:hover {
  background-color: darkblue;
}
```

This smoothly transitions the button's background color when hovered over.

---

## **4. CSS Frameworks – Speeding Up Development**

Using frameworks like Bootstrap simplifies styling and layout tasks, allowing for faster development.

### **Key Concepts:**

- **Grid System**: Predefined layout structure (`.container`, `.row`, `.col`)
- **Utility-First Design**: Classes for quick styling (`.text-center`, `.bg-primary`)
- **Responsive Components**: Pre-built UI elements like buttons, modals, and navbars
- **Customization**: Overriding default styles using custom CSS

#### **Example:**

```html
<div class="container text-center">
  <h1 class="bg-primary text-white p-3">Hello Bootstrap</h1>
</div>
```

Bootstrap accelerates development by providing pre-styled components and a powerful grid system, making it easy to build responsive designs efficiently.

---
