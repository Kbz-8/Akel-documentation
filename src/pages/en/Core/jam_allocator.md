---
title: JamAllocator
description: Core's memory system documentation
layout: ../../../layouts/MainLayout.astro
---

## About

---

The JamAllocator is a memory optimisation oriented allocator. It is based on the Pool Allocator model but has the particularity of being able to allocate objects like the C++ "new" allocator. Like many game engine allocators, it is based on a main allocation (the allocator heap) and the allocation requested by the user will take bits of this heap. The JamAllocator uses a system of flags to describe pruned memory areas and differentiate them from the "pure" area of the heap (the one that has not yet been allocated). Flags are 16-byte chunks allocated just before the pointer returned to the user. They contain the offset of the pointer in the heap and the size of the memory area that the pointer occupies so that when the pointer is freed, the allocator can know if it can reallocate that memory area for a next pointer.

Akel has an internal safety feature that allows the heap to be freed of all instantiated JamAllocators and FixedAllocators when a FATAL_ERROR is sent to the [logs system](../Core/logs) and to the kernel's error core system (which will cause the program to be stopped in an emergency).

<p align="center">
    <img src="https://raw.githubusercontent.com/SpinWaves/Akel/main/Ressources/assets/jam_alloc_diagram.png" alt="drawing" width="80%"/>
</p>

## Syntax

---

```cpp
class CustomComponent : public Ak::Component
{
    private:
        MyClass* ptr = nullptr;
        Ak::JamAllocator allocator;

    public:
        void CustomComponent::onAttach() override
        {
            allocator.init(255/*bytes*/);
            ptr = allocator.alloc<MyClass>(/* Args to pass to MyClass constructor */);

            Ak::debugPrint(allocator.contains((void*)ptr)) // prints "1" for true in blue
        }

        void CustomComponent::onQuit() override
        {
            allocator.free(ptr); // free the pointer
            allocator.destroy();
        }
};
```

## Member functions

---

| Return type | Function                                                               | Specifiers                      
| ----------- | ---------------------------------------------------------------------- | ------------------------------- 
|     | <a href="#constructor" style="text-decoration: none;">JamAllocator()</a>                              | `explicit`                      
|     | <a href="#destructor" style="text-decoration: none;">~JamAllocator()</a>                              |                         
| `void`      | <a href="#initsize_t-size" style="text-decoration: none;">init(size_t size)</a>                       |                         
| `bool`      | <a href="#canholdsize_t-size" style="text-decoration: none;">canHold(size_t size)</a>                 | `inline - constexpr - noexcept` 
| `void`      | <a href="#auto_increase_sizebool-set" style="text-decoration: none;">auto_increase_size(bool set)</a> | `inline - constexpr - noexcept` 
| `bool`      | <a href="#containsvoid-ptr" style="text-decoration: none;">contains(void\* ptr)</a>                   | `inline - constexpr - noexcept` 
| `bool`      | <a href="#is_init" style="text-decoration: none;">is_init()</a>                                       | `inline - constexpr - noexcept` 
| `void`      | <a href="#increase_sizesize_t-size" style="text-decoration: none;">increase_size(size_t size)</a>     |                         
| `void`      | <a href="#destroy" style="text-decoration: none;">destroy()</a>                                       |                         
| `T*`        | <a href="#allocargs--args" style="text-decoration: none;">alloc(Args&& ... args)</a>                  |                         
| `void`      | <a href="#freet-ptr" style="text-decoration: none;">free(T\* ptr)</a>                                 |                         

---

### Constructor

---

Creates a new JamAllocator.

```cpp
// Prototype
explicit JamAllocator();

// Usage
Ak::JamAllocator allocator;
```

---

### Destructor

---

Deletes the JamAllocator.

```cpp
// Prototype
~JamAllocator();
```

---

### init(size_t size)

---

Init all the attributes and allocate the heap.

```cpp
// Prototype
void init(size_t Size);

// Usage
allocator.init(1024 /*size of the heap in bytes*/);
```

---

### canHold(size_t size)

---

Returns a boolean value if the allocator can or cannot allocate the size required.

```cpp
// Prototype
inline constexpr bool canHold(size_t Size) noexcept;

// Usage
allocator.canHold(15/*bytes*/);
allocator.canHold(sizeof(MyClass));
```

---

### auto_increase_size(bool set)

---

Enable or disable the auto resize system.

```cpp
// Prototype
inline constexpr void auto_increase_size(bool set) noexcept;

// Usage
allocator.auto_increase_size(true);
allocator.auto_increase_size(false);
```

---

### contains(void\* ptr)

---

Returns a boolean value if the pointer was allocated by this allocator.

```cpp
// Prototype
inline constexpr bool contains(void* ptr) noexcept;

// Usage
allocator.contains(my_ptr);
```

---

### is_init()

---

Returns a boolean value if the allocator was init.

```cpp
// Prototype
inline constexpr bool is_init() noexcept;

// Usage
allocator.is_init();
```

---

### increase_size(size_t size)

---

Manually increase the size of the allocator's heap.

```cpp
// Prototype
void increase_size(size_t Size);

// Usage
allocator.increase_size(255/*bytes*/);
```

---

### destroy()

---

Release all the attributes and the heap of the allocator.

```cpp
// Prototype
void destroy();

// Usage
allocator.destroy();
```

---

### alloc(Args&& ... args)

---

Allocates memory.

```cpp
// Prototype
template <typename T = void, typename ... Args>
T* alloc(Args&& ... args);

// Usage
MyClass* my_ptr = allocator.alloc<MyClass>(/*Args to pass to MyClass contructor*/);
std::string* str_ptr = allocator.alloc<std::string>("This is my string");
```

---

### free(T\* ptr)

---

Frees memory.

```cpp
// Prototype
template <typename T = void>
void free(T* ptr);

// Usage
allocator.free(my_ptr);
```
