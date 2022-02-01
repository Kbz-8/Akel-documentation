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
            Ak::WindowComponent::setSetting(Ak::winsets::title, "My window");
            Ak::WindowComponent::setSetting(Ak::winsets::size, 1280, 750);
            Ak::WindowComponent::setSetting(Ak::winsets::resizable, true);
        }

        void onEvent(Ak::Input& input) override
        {
            Ak::WindowComponent::onEvent(input);
        }
        void update() override
        {
            Ak::WindowComponent::update();
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
| `void`      | <a href="#update" style="text-decoration: none;">update()</a> | `override`
| `void`      | <a href="#oneventakinput-input" style="text-decoration: none;">onEvent(Ak::Input& input)</a> | `override`
| `void`      | <a href="#onquit" style="text-decoration: none;">onQuit()</a> | `override`
| `void`      | <a href="#setsettingakwinsets-setting-const-char-value" style="text-decoration: none;">setSetting(Ak::winsets setting, const char* value)</a> | 
| `void`      | <a href="#setsettingakwinsets-setting-bool-value" style="text-decoration: none;">setSetting(Ak::winsets setting, bool value)</a> | 
| `void`      | <a href="#setsettingakwinsets-setting-float-value" style="text-decoration: none;">setSetting(Ak::winsets setting, float value)</a> | 
| `void`      | <a href="#setsettingakwinsets-setting-uint16_t-x-uint16_t-y" style="text-decoration: none;">setSetting(Ak::winsets setting, uint16_t x, uint16_t y)</a> | 
| `const std::string&`      | <a href="#gettitle" style="text-decoration: none;">getTitle()</a> | `inline - const - noexcept`
| `const Ak::Maths::Vec2<uint16_t>&`      | <a href="#getposition" style="text-decoration: none;">getPosition()</a> | `inline - const - noexcept`
| `const Ak::Maths::Vec2<uint16_t>&`      | <a href="#getsize" style="text-decoration: none;">getSize()</a> | 
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

// Since the WindowComponent is intended to be inherited by a
// custom component class, it is destroyed with the destructor
// of that class.
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

### update()

---

Updates the window when the application that contains that component will update.

```cpp
// Prototype
void update() override;

// Usage
CustomComponent::update() override
{
    Ak::WindowComponent::update();
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

### setSetting(Ak::winsets setting, const char* value)

---

Window settings modifier used to modify the title or icon by giving the path to the image.

```cpp
// Prototype
void setSetting(Ak::winsets setting, const char* value);

// Usage
setSetting(Ak::winset::title, "New Title");
setSetting(Ak::winset::icon, "assets/new_icon.png");
```

---

### setSetting(Ak::winsets setting, float value)

---

Window settings modifier used to modify the brightness or opacity.

```cpp
// Prototype
void setSetting(Ak::winsets setting, float value);

// Usage
setSetting(Ak::winset::brightness, 0.5);
setSetting(Ak::winset::opacity, 0.3);
```

---

### setSetting(Ak::winsets setting, bool value)

---

Window settings modifier used to enable/disable :
* borders
* fullscreen
* resizable
* visibility
* vsync
* maximization

```cpp
// Prototype
void setSetting(Ak::winsets setting, const char* value);

// Usage
setSetting(Ak::winset::fullscreen, true);
setSetting(Ak::winset::border, true);
setSetting(Ak::winset::resizable, false);
setSetting(Ak::winset::visible, true);
setSetting(Ak::winset::vsync, true); // not working for now
setSetting(Ak::winset::maximize, false);
```

---

### setSetting(Ak::winsets setting, uint16_t x, uint16_t y)

---

Window settings modifier used to modify :
* the position
* the size
* the minimum size
* the maximum size

```cpp
// Prototype
void setSetting(Ak::winsets setting, uint16_t x, uint16_t y);

// Usage
setSetting(Ak::winset::size, 800, 600);
setSetting(Ak::winset::position, 100, 200);
setSetting(Ak::winset::maximumSize, 1200, 1000);
setSetting(Ak::winset::minimumSize, 300, 100);
```

---

### getTitle()

---

Get the window's title.

```cpp
// Prototype
inline const std::string& getTitle() const noexcept

// Usage
std::cout << Ak::WindowComponent::getTitle() << std::endl;
```

---

### getPosition()

---

Get the window's position.

```cpp
// Prototype
inline const Maths::Vec2<uint16_t>& getPosition() const noexcept

// Usage
Ak::Maths::Vec2<uint16_t> vector = Ak::WindowComponent::getPosition();
```

---

### getSize()

---

Get the window's size.

```cpp
// Prototype
const Maths::Vec2<uint16_t>& getSize();

// Usage
Ak::Maths::Vec2<uint16_t> vector = Ak::WindowComponent::getSize();
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
