---
title: ELTM
description: ELTM Language
layout: ../../../layouts/MainLayout.astro
---

## About

---

ELTM (Extension Language for Text Management) is a C++ extension language to manage more easily the texts and translations of your projects in Akel.
Its use is not dissociable from C++ because it needs an instantiated ELTM context to use it. It is extremely simple and requires little time to learn it.

## Syntax

---

```
// main.eltm
set my_id = my text

set my_long_id = (this is
a very
very long
text)

set something = get(my_long_id)

begin module my_module

    set some_text = this is a text from my_module
    set another_text = get(something)

end module
```

```cpp
class CustomComponent : public Ak::Component
{
    public:
        void onAttach() override
        {
            Ak::ELTM eltm;
            eltm.newContext("main.eltm");

            std::cout << eltm.getText("my_long_id") << std::endl;
            std::cout << Ak::ELTM::getText("my_module.some_text") << std::endl;
        }
};
```

## Member functions

---

| Return type | Function | Specifiers |
| ----------- | -------- | ---------- |
