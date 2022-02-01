---
title: Message Box
description: Akel's message boxes
layout: ../../../layouts/MainLayout.astro
---

## About

---

Akel's message boxes are very simple and based on those of the SDL2 (they will be changed to use those of the system). They have a main message, an "Ok" button and a "More details" button which leads to a second message, this one saved by the [logs system](../Core/logs) with the level of importance given to the box.

<p align="center">
    <img src="/message_box_1.png" alt="drawing" width="35%"/>
    <img src="/message_box_2.png" alt="drawing" width="36%"/>
</p>

## Syntax

---

```cpp
class CustomComponent : public Ak::Component
{
    public:
        void onAttach() override
        {
            Ak::messageBox(MESSAGE, "Main Message", "Second message (saved by the logs)");
            Ak::messageBox(WARNING, "Main Message", "Second message (saved by the logs)");
            Ak::messageBox(ERROR, "Main Message", "Second message (saved by the logs)");
            Ak::messageBox(FATAL_ERROR, "Main Message", "Second message (saved by the logs)");
        }
};
```

### messageBox(enum LogType type, std::string message, std::string logReport)

---

Creates a new message box and send the second message to the logs with the importance level given.

```cpp
// Prototype
void messageBox(enum LogType type, std::string message, std::string logReport);

// Usage
Ak::messageBox(MESSAGE, "Main Message", "Second message (saved by the logs)");
Ak::messageBox(WARNING, "Main Message", "Second message (saved by the logs)");
Ak::messageBox(ERROR, "Main Message", "Second message (saved by the logs)");
Ak::messageBox(FATAL_ERROR, "Main Message", "Second message (saved by the logs)");
```

---
