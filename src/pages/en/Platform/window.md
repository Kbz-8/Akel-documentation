---
title: Window
description: Akel's window manager
layout: ../../../layouts/MainLayout.astro
---

## About

---

Akel windows are components that are added to the application. Their parameters can be modified through functions. They are all linked to a renderer. Because of the youth of Akel, their functioning will change a lot during its development.

## Syntax

---

```cpp
class CustomComponent : public Ak::WindowComponent
{
    public:
        void onAttach() override
        {
            Ak::WindowComponent::onAttach();
            Ak::WindowComponent::title = "My Window";
            Ak::WindowComponent::size = Ak::Maths::Vec2<int>(1280, 750);
            Ak::WindowComponent::resizable = true;
            Ak::WindowComponent::fetchSettings;
        }

        void onEvent(Ak::Input& input) override
        {
            Ak::WindowComponent::onEvent(input);
        }
        void onQuit() override
        { 
            Ak::WindowComponent::onQuit();
        }
};
```

## Member functions

---

| Return type | Function                                                               | Specifiers
| ----------- | ---------------------------------------------------------------------- | -----------
|       | <a href="#constructor" style="text-decoration: none;">WindowComponent()</a> | 
|       | <a href="#destructor" style="text-decoration: none;">~WindowComponent()</a> | 
| `void`      | <a href="#onattach" style="text-decoration: none;">onAttach()</a> | `override`
| `void`      | <a href="#oneventakinput-input" style="text-decoration: none;">onEvent(Ak::Input& input)</a> | `override`
| `void`      | <a href="#onquit" style="text-decoration: none;">onQuit()</a> | `override`
| `SDL_Window*`      | <a href="#getnativewindow" style="text-decoration: none;">getNativeWindow()</a> | `inline - const - noexcept`

### Constructor

---

Creates a new WindowComponent.

```cpp
// Prototype
WindowComponent();

// Usage
class CustomComponent : public Ak::WindowComponent
{
    public :
        CustomComponent() : Ak::WindowComponent() {}
};
```

---

### Destructor

---

Deletes the WindowComponent.

```cpp
// Prototype
~WindowComponent();

// Usage

// Automatic
```

---

### onAttach()

---

Inits the component at the begenning of the application call.

```cpp
// Prototype
void onAttach() override;

// Usage
CustomComponent::onAttach() override
{
    Ak::WindowComponent::onAttach();
    /* ... */
}
```

---

### onEvent(Ak::Input& input)

---

Updates the window when the application that contains that component will update the events.

```cpp
// Prototype
void onEvent(Ak::Input& input) override;

// Usage
CustomComponent::onEvent(Ak::Input& input) override
{
    Ak::WindowComponent::onEvent(input);
    /* ... */
}
```

---

### onQuit()

---

Quit function that is called when the component is destroyed.

```cpp
// Prototype
void onQuit() override;

// Usage
CustomComponent::onQuit() override
{
    Ak::WindowComponent::onQuit();
    /* ... */
}
```

---

### getNativeWindow()

---

Get the native SDL2 window pointer.

```cpp
// Prototype
inline SDL_Window* getNativeWindow() const noexcept

// Usage
SDL_Window* win = Ak::WindowComponent::getNativeWindow();
```

---

## Settings

---

| Type | Setting
| ---- | -------
| `std::string` | title
| `std::string` | icon
| `Ak::Maths::Vec2<int>` | size
| `Ak::Maths::Vec2<int>` | pos
| `Ak::Maths::Vec2<int>` | minSize
| `Ak::Maths::Vec2<int>` | maxSize
| `float` | brightness
| `float` | opacity
| `bool` | fullscreen
| `bool` | border
| `bool` | resizable
| `bool` | visible
| `bool` | vsync
| `bool` | maximize
| `bool` | minimize
