---
title: Logs
description: Core's logs management
layout: ../../../layouts/MainLayout.astro
---

## About

---

Akel has a log system based on 4 levels of importance :
* Message : just a simple message that will be printed in blue in the console
* Warning : a warning message that will be printed in purple in the console
* Error : an error message that will be printed in red in the console but the program will continue to work
* Fatal Error : like the Error message but the program will be stop in emergency and will try to free all the allocator's heaps for a safety exit

All messages are saved in a session file. Akel creates one per day and deletes those that are 10 days old or older.

## Syntax

---

```cpp
class CustomComponent : public Ak::Component
{
    public:
        void CustomComponent::onAttach() override
        {
            int i = 42;
            Ak::Core::log::report(MESSAGE, "My message with var i = %d", i);
        }
};
```

## Member functions

---

| Return type | Function                                                               | Specifiers
| ----------- | ---------------------------------------------------------------------- | -----------
|       | <a href="#constructor" style="text-decoration: none;">log()</a> | `explicit - delete`
|       | <a href="#destructor" style="text-decoration: none;">~log()</a> | `delete`
| `void`      | <a href="#init" style="text-decoration: none;">Init()</a> | `static`
| `void`      | <a href="#reportenum-logtype-type-stdstring-message-" style="text-decoration: none;">report(enum LogType type, std::string message, ...)</a> | `static`
| `void`      | <a href="#reportstdstring-message-" style="text-decoration: none;">report(std::string message, ...)</a>  | `static`

---

### Constructor

---

Creates a new log system.

```cpp
// Prototype
explicit log() = delete;

// Usage

// You can't use it because it is a deleted method.
// Log system is used like a static class.
// It is init automatically by Akel at the begenning of your program.
```

---

### Destructor

---

Deletes the log system.

```cpp
// Prototype
~log() = delete;

// Usage

// You can't use it because it is a deleted method.
// Log system is used like a static class.
// It is deleted automatically by Akel at the end of your program.
```

---

### Init()

---

Inits the log system.

```cpp
// Prototype
static void Init();

// Usage

// You are not supposed to use this method.
// It is init automatically by Akel at the begenning of your program.
```

---

### report(enum LogType type, std::string message, ...)

---

Sends a message the log system.

```cpp
// Prototype
static void report(enum LogType type, std::string message, ...);

// Usage
Ak::Core::log::report(MESSAGE, "My message %s", "some var");
Ak::Core::log::report(WARNING, "My warning");
Ak::Core::log::report(ERROR, "My error");
Ak::Core::log::report(FATAL_ERROR, "My fatal error");
```

---

### report(std::string message, ...)

---

Sends a message the log system without level of importance and without console print.
It is used only for adding message in the session's file.

```cpp
// Prototype
static void report(std::string message, ...);

// Usage
Ak::Core::log::report("My message");
```

---

## Other functions

---

| Return type | Function                                                               | Specifiers
| ----------- | ---------------------------------------------------------------------- | -----------
| `void`      | <a href="#messagestdstring-message-" style="text-decoration: none;">Message(std::string message, ...)</a> | `None`
| `void`      | <a href="#warningstdstring-message-" style="text-decoration: none;">Warning(std::string message, ...)</a> | `None`
| `void`      | <a href="#errorstdstring-message-" style="text-decoration: none;">Error(std::string message, ...)</a> | `None`
| `void`      | <a href="#fatalerrorstdstring-message-" style="text-decoration: none;">FatalError(std::string message, ...)</a> | `None`

---

### Message(std::string message, ...)

---

Sends a message the log system.

```cpp
// Prototype
void Message(std::string message, ...);

// Usage
Ak::Core::Message("My message");
```

---

### Warning(std::string message, ...)

---

Sends a warning the log system.

```cpp
// Prototype
void Warning(std::string message, ...);

// Usage
Ak::Core::Warning("My warning");
```

---

### Error(std::string message, ...)

---

Sends an error the log system.

```cpp
// Prototype
void Error(std::string message, ...);

// Usage
Ak::Core::Error("My error");
```

---

### FatalError(std::string message, ...)

---

Sends a fatal error the log system.

```cpp
// Prototype
void FatalError(std::string message, ...);

// Usage
Ak::Core::FatalError("My fatal error");
```

---
