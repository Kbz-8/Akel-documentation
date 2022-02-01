---
title: Inputs
description: Akel's inputs documentation
layout: ../../../layouts/MainLayout.astro
---

## About

---

Akel's input management system is fully transparent and automatic. The retrieval of new inputs is done by the applications. And the access to them by the users is done by the components and their `void onEvent(Ak::Inputs& input)` function.

## Syntax

---

```cpp
class CustomComponent : public Ak::Component
{
    public:
        void onEvent(Ak::Input& input) override
        {
            if(input.getInKey(AK_KEY_SPACE, DOWN))
                Ak::debugPrint("Space key is pressed");
            if(input.getInKey(AK_KEY_SPACE))
                Ak::debugPrint("Space key is released");
        }
};
```

## Member functions

---

| Return type | Function                                                               | Specifiers
| ----------- | ---------------------------------------------------------------------- | -----------
|       | <a href="#constructor" style="text-decoration: none;">Input()</a> | 
|       | <a href="#destructor" style="text-decoration: none;">~Input()</a> | 
| `void`      | <a href="#update" style="text-decoration: none;">update()</a> |
| `bool`      | <a href="#getinkeyconst-AK_KEY-touche-enum-buttonaction-type--up" style="text-decoration: none;">getInKey(const AK_KEY touche, enum ButtonACTION type = UP)</a> | `const`
| `bool`      | <a href="#getinmouseconst-uint8-bouton-enum-buttonaction-type--up" style="text-decoration: none;">getInMouse(const Uint8 bouton, enum ButtonACTION type = UP)</a> | `const`
| `bool`      | <a href="#getmovmouse" style="text-decoration: none;">getMovMouse()</a> | `const`
| `int`      | <a href="#getx" style="text-decoration: none;">getX()</a> | `const`
| `int`      | <a href="#gety" style="text-decoration: none;">getY()</a> | `const`
| `int`      | <a href="#getxrel" style="text-decoration: none;">getXRel()</a> | `const`
| `int`      | <a href="#getyrel" style="text-decoration: none;">getYRel()</a> | `const`
| `void`      | <a href="#activatetextinputbool-activate" style="text-decoration: none;">activateTextInput(bool activate)</a> |
| `std::string`      | <a href="#gettextentry" style="text-decoration: none;">getTextEntry()</a> |
| `bool`      | <a href="#isended" style="text-decoration: none;">idEnded()</a> | `const`
| `void`      | <a href="#finish" style="text-decoration: none;">finish()</a> | 
| `SDL_Event*`      | <a href="#getnativeevent" style="text-decoration: none;">getNativeEvent()</a> |

### Constructor

---

Creates a new Input.

```cpp
// Prototype
Input();

// Usage

// You are not supposed to use this method.
// Akel inits the input system automatically
// when your program begins.
```

---

### Destructor

---

Deletes the Input.

```cpp
// Prototype
~Input();

// Usage

// You are not supposed to use this method.
// Akel destroys the input system automatically
// when your program ends.
```

---

### update()

---

Updates the inputs to get the new ones.

```cpp
// Prototype
void update();

// Usage

// You are not supposed to use this method.
// Akel updates the input system automatically
// when your program is running.
```

---

### getInKey(const AK_KEY touche, enum ButtonACTION type = UP)

---

Returns a boolean value if the given key is pressed/released (depending on if we require UP or DOWN).
If no action is specified (UP or DOWN) the function returns if the key is released.

```cpp
// Prototype
bool getInKey(const AK_KEY touche, enum ButtonACTION type = UP) const;

// Usage
if(input.getInKey(AK_KEY_SPACE, DOWN))
    Ak::debugPrint("Space key is pressed");
if(input.getInKey(AK_KEY_SPACE))
    Ak::debugPrint("Space key is released");
```

---

### getInMouse(const Uint8 bouton, enum ButtonACTION type = UP)

---

Returns a boolean value if the given mouse button is pressed/released (depending on if we require UP or DOWN).
If no action is specified (UP or DOWN) the function returns if the mouse button is released.

```cpp
// Prototype
bool getInMouse(const Uint8 bouton, enum ButtonACTION type = UP) const;

// Usage
if(input.getInMouse(0, DOWN))
    Ak::debugPrint("Left click pressed");
if(input.getInKey(0))
    Ak::debugPrint("Left click released");
```

---

### getMovMouse()

---

Returns a boolean value if the mouse is moving.

```cpp
// Prototype
bool getMovMouse() const;

// Usage
if(input.getMovMouse())
    Ak::debugPrint("Mouse is moving");
```

---

### getX()

---

Returns the X coordinate of the mouse.

```cpp
// Prototype
int getX() const;

// Usage
Ak::debugPrint(input.getX());
```

---

### getY()

---

Returns the Y coordinate of the mouse.

```cpp
// Prototype
int getY() const;

// Usage
Ak::debugPrint(input.getY());
```

---

### getXRel()

---

Returns the X movement of the mouse.

```cpp
// Prototype
int getXRel() const;

// Usage
Ak::debugPrint(input.getXRel());
```

---

### getYRel()

---

Returns the Y movement of the mouse.

```cpp
// Prototype
int getYRel() const;

// Usage
Ak::debugPrint(input.getYRel());
```

---

### activateTextInput(bool activate)

---

Activates the text entry system.

```cpp
// Prototype
void activateTextInput(bool activate);

// Usage
input.activateTextInput(true);
```

---

### getTextEntry()

---

Returns the text entry.

```cpp
// Prototype
std::string getTextEntry();

// Usage
Ak::debugPrint(input.getTextEntry());
```

---

### isEnded()

---

Returns a boolean value if the end of the application was sent to the input system.

```cpp
// Prototype
bool isEnded() const;

// Usage
if(input.isEnded())
    Ak::debugPrint("end of application");
```

---

### finish()

---

Ask the input system to close the application.

```cpp
// Prototype
void finish();

// Usage
input.finish();
```

---

### getNativeEvent()

---

Returns the SDL2 native event pointer.

```cpp
// Prototype
SDL_Event* getNativeEvent();

// Usage
SDL_Event* event = input.getNativeEvent();
```

---

## Key Codes

Key Name | Key Code
-------- | --------
"0"      | AK_KEY_0
"1"      | AK_KEY_1
"2"      | AK_KEY_2
"3"      | AK_KEY_3
"4"      | AK_KEY_4
"5"      | AK_KEY_5
"6"      | AK_KEY_6
"7"      | AK_KEY_7
"8"      | AK_KEY_8
"9"      | AK_KEY_9
"A"      | AK_KEY_A
"B"      | AK_KEY_B
"C"      | AK_KEY_C
"D"      | AK_KEY_D
"E"      | AK_KEY_E
"F"      | AK_KEY_F
"G"      | AK_KEY_G
"H"      | AK_KEY_H
"I"      | AK_KEY_I
"J"      | AK_KEY_J
"K"      | AK_KEY_K
"L"      | AK_KEY_L
"M"      | AK_KEY_M
"N"      | AK_KEY_N
"O"      | AK_KEY_O
"P"      | AK_KEY_P
"Q"      | AK_KEY_Q
"R"      | AK_KEY_R
"S"      | AK_KEY_S
"T"      | AK_KEY_T
"U"      | AK_KEY_U
"V"      | AK_KEY_V
"W"      | AK_KEY_W
"X"      | AK_KEY_X
"Y"      | AK_KEY_Y
"Z"      | AK_KEY_Z
"Ac Back"| AK_KEY_AC_BACK
"AC Bookmarks" | AK_KEY_AC_BOOKMARKS
"AC Forward" (the Forward key (application control keypad)) | AK_KEY_AC_FORWARD
"AC Home" (the Home key (application control keypad)) | AK_KEY_AC_HOME
"AC Refresh" (the Refresh key (application control keypad)) | AK_KEY_AC_REFRESH
"AC Search" (the Search key (application control keypad)) | AK_KEY_AC_SEARCH
"AC Stop" (the Stop key (application control keypad)) | AK_KEY_AC_STOP
"Again" (the Again key (Redo)) | AK_KEY_AGAIN
"AltErase" (Erase-Eaze) | AK_KEY_ALTERASE
" ' " | AK_KEY_APOSTROPHE
"Application" (the Application / Compose / Context Menu (Windows) key) | AK_KEY_APPLICATION
"AudioMute" (the Mute volume key) | AK_KEY_AUDIOMUTE
"AudioNext" (the Next Track media key) | AK_KEY_AUDIONEXT
"AudioPlay" (the Play media key) | AK_KEY_AUDIOPLAY
"AudioPrev" (the Previous Track media key) | AK_KEY_AUDIOPREV
"AudioStop" (the Stop media key) | AK_KEY_AUDIOSTOP
"\\" (Located at the lower left of the return key on ISO keyboards and at the right end of the QWERTY row on ANSI keyboards. Produces REVERSE SOLIDUS (backslash) and VERTICAL LINE in a US layout, REVERSE SOLIDUS and VERTICAL LINE in a UK Mac layout, NUMBER SIGN and TILDE in a UK Windows layout, DOLLAR SIGN and POUND SIGN in a Swiss German layout, NUMBER SIGN and APOSTROPHE in a German layout, GRAVE ACCENT and POUND SIGN in a French Mac layout, and ASTERISK and MICRO SIGN in a French Windows layout.) | AK_KEY_BACKSLASH
"Backspace" | AK_KEY_BACKSPACE
"BrightnessDown" (the Brightness Down key) | AK_KEY_BRIGHTNESSDOWN
"BrightnessUp" (the Brightness Up key) | AK_KEY_BRIGHTNESSUP
"Calculator" (the Calculator key) | AK_KEY_CALCULATOR
"Cancel" | AK_KEY_CANCEL
"CapsLock" | AK_KEY_CAPSLOCK
"Clear" | AK_KEY_CLEAR
"Clear / Again" | AK_KEY_CLEARAGAIN
"," | AK_KEY_COMMA
"Computer" (the My Computer key) | AK_KEY_COMPUTER
"Copy" | AK_KEY_COPY
"CrSel" | AK_KEY_CRSEL
"CurrencySubUnit" (the Currency Subunit key) | AK_KEY_CURRENCYSUBUNIT
"CurrencyUnit" (the Currency Unit key) | AK_KEY_CURRENCYUNIT
"Cut" | AK_KEY_CUT
"DecimalSeparator" (the Decimal Separator key) | AK_KEY_DECIMALSEPARATOR
"Delete" | AK_KEY_DELETE
"DisplaySwitch" (display mirroring/dual display switch, video mode switch) | AK_KEY_DISPLAYSWITCH
"Down" (the Down arrow key (navigation keypad)) | AK_KEY_DOWN
"Eject" (the Eject key) | AK_KEY_EJECT
"End" | AK_KEY_END
"=" | AK_KEY_EQUALS
"Escape" (the Esc key) | AK_KEY_ESCAPE
"Execute" | AK_KEY_EXECUTE
"ExSel" | AK_KEY_EXSEL
"F1" | AK_KEY_F1
"F10" | AK_KEY_F10
"F11" | AK_KEY_F11
"F12" | AK_KEY_F12
"F13" | AK_KEY_F13
"F14" | AK_KEY_F14
"F15" | AK_KEY_F15
"F16" | AK_KEY_F16
"F17" | AK_KEY_F17
"F18" | AK_KEY_F18
"F19" | AK_KEY_F19
"F2" | AK_KEY_F2
"F20" | AK_KEY_F20
"F21" | AK_KEY_F21
"F22" | AK_KEY_F22
"F23" | AK_KEY_F23
"F24" | AK_KEY_F24
"F3" | AK_KEY_F3
"F4" | AK_KEY_F4
"F5" | AK_KEY_F5
"F6" | AK_KEY_F6
"F7" | AK_KEY_F7
"F8" | AK_KEY_F8
"F9" | AK_KEY_F9
"Find" | AK_KEY_FIND
" ` " (Located in the top left corner (on both ANSI and ISO keyboards). Produces GRAVE ACCENT and TILDE in a US Windows layout and in US and UK Mac layouts on ANSI keyboards, GRAVE ACCENT and NOT SIGN in a UK Windows layout, SECTION SIGN and PLUS-MINUS SIGN in US and UK Mac layouts on ISO keyboards, SECTION SIGN and DEGREE SIGN in a Swiss German layout (Mac: only on ISO keyboards), CIRCUMFLEX ACCENT and DEGREE SIGN in a German layout (Mac: only on ISO keyboards), SUPERSCRIPT TWO and TILDE in a French Windows layout, COMMERCIAL AT and NUMBER SIGN in a French Mac layout on ISO keyboards, and LESS-THAN SIGN and GREATER-THAN SIGN in a Swiss German, German, or French Mac layout on ANSI keyboards.) | AK_KEY_GRAVE
"Help" | AK_KEY_HELP
"Home" | AK_KEY_HOME
"Insert" (insert on PC, help on some Mac keyboards (but does send code 73, not 117)) | AK_KEY_INSERT
"KBDIllumDown" (the Keyboard Illumination Down key) | AK_KEY_KBDILLUMDOWN
"KBDIllumToggle" (the Keyboard Illumination Toggle key) | AK_KEY_KBDILLUMTOGGLE
"KBDIllumUp" (the Keyboard Illumination Up key) | AK_KEY_KBDILLUMUP
"Keypad 0" (the 0 key (numeric keypad)) | AK_KEY_KP_0
"Keypad 00" (the 00 key (numeric keypad)) | AK_KEY_KP_00
"Keypad 000" (the 000 key (numeric keypad)) | AK_KEY_KP_000
"Keypad 1" (the 1 key (numeric keypad)) | AK_KEY_KP_1
"Keypad 2" (the 2 key (numeric keypad)) | AK_KEY_KP_2
"Keypad 3" (the 3 key (numeric keypad)) | AK_KEY_KP_3
"Keypad 4" (the 4 key (numeric keypad)) | AK_KEY_KP_4
"Keypad 5" (the 5 key (numeric keypad)) | AK_KEY_KP_5
"Keypad 6" (the 6 key (numeric keypad)) | AK_KEY_KP_6
"Keypad 7" (the 7 key (numeric keypad)) | AK_KEY_KP_7
"Keypad 8" (the 8 key (numeric keypad)) | AK_KEY_KP_8
"Keypad 9" (the 9 key (numeric keypad)) | AK_KEY_KP_9
"Keypad A" (the A key (numeric keypad)) | AK_KEY_KP_A
"Keypad &" (the & key (numeric keypad)) | AK_KEY_KP_AMPERSAND
"Keypad @" (the @ key (numeric keypad)) | AK_KEY_KP_AT
"Keypad B" (the B key (numeric keypad)) | AK_KEY_KP_B
"Keypad Backspace" (the Backspace key (numeric keypad)) | AK_KEY_KP_BACKSPACE
"Keypad Binary" (the Binary key (numeric keypad)) | AK_KEY_KP_BINARY
"Keypad C" (the C key (numeric keypad)) | AK_KEY_KP_C
"Keypad Clear" (the Clear key (numeric keypad)) | AK_KEY_KP_CLEAR
"Keypad ClearEntry" (the Clear Entry key (numeric keypad)) | AK_KEY_KP_CLEARENTRY
"Keypad :" (the : key (numeric keypad)) | AK_KEY_KP_COLON
"Keypad ," (the Comma key (numeric keypad)) | AK_KEY_KP_COMMA
"Keypad D" (the D key (numeric keypad)) | AK_KEY_KP_D
"Keypad &&" (the && key (numeric keypad)) | AK_KEY_KP_DBLAMPERSAND
"Keypad Decimal" (the Decimal key (numeric keypad)) | AK_KEY_KP_DECIMAL
"Keypad /" (the / key (numeric keypad)) | AK_KEY_KP_DIVIDE
"Keypad E" (the E key (numeric keypad)) | AK_KEY_KP_E
"Keypad Enter" (the Enter key (numeric keypad)) | AK_KEY_KP_ENTER
"Keypad =" (the = key (numeric keypad)) | AK_KEY_KP_EQUALS
"Keypad = (AS400)" (the Equals AS400 key (numeric keypad)) | AK_KEY_KP_EQUALSAS400
"Keypad !" (the ! key (numeric keypad)) | AK_KEY_KP_EXCLAM
"Keypad F" (the F key (numeric keypad)) | AK_KEY_KP_F
"Keypad >" (the Greater key (numeric keypad)) | AK_KEY_KP_GREATER
"Keypad #" (the # key (numeric keypad)) | AK_KEY_KP_HASH
"Keypad Hexadecimal" (the Hexadecimal key (numeric keypad)) | AK_KEY_KP_HEXADECIMAL
"Keypad " (the Left Brace key (numeric keypad)) | AK_KEY_KP_LEFTBRACE
"Keypad (" (the Left Parenthesis key (numeric keypad)) | AK_KEY_KP_LEFTPAREN
"Keypad <" (the Less key (numeric keypad)) | AK_KEY_KP_LESS
"Keypad MemAdd" (the Mem Add key (numeric keypad)) | AK_KEY_KP_MEMADD
"Keypad MemClear" (the Mem Clear key (numeric keypad)) | AK_KEY_KP_MEMCLEAR
"Keypad MemDivide" (the Mem Divide key (numeric keypad)) | AK_KEY_KP_MEMDIVIDE
"Keypad MemMultiply" (the Mem Multiply key (numeric keypad)) | AK_KEY_KP_MEMMULTIPLY
"Keypad MemRecall" (the Mem Recall key (numeric keypad)) | AK_KEY_KP_MEMRECALL
"Keypad MemStore" (the Mem Store key (numeric keypad)) | AK_KEY_KP_MEMSTORE
"Keypad MemSubtract" (the MemSubtract key (numeric keypad)) | AK_KEY_KP_MEMSUBTRACT
"Keypad -" (the 0-key (numeric keypad)) | AK_KEY_KP_MINUS
"Keypad *" (the * key (numeric keypad)) | AK_KEY_KP_MULTIPLY
"Keypad Octal" (the Octal key (numeric keypad)) | AK_KEY_KP_OCTAL
"Keypad %" (the Percent key (numeric keypad)) | AK_KEY_KP_PERCENT
"Keypad ." (the . key (numeric keypad)) | AK_KEY_KP_PERIOD
"Keypad +" (the + key (numeric keypad)) | AK_KEY_KP_PLUS
"Keypad +/-" (the +/- key (numeric keypad)) | AK_KEY_KP_PLUSMINUS
"Keypad ^" (the Power key (numeric keypad)) | AK_KEY_KP_POWER
"Keypad }" (the Right Brace key (numeric keypad)) | AK_KEY_KP_RIGHTBRACE
"Keypad )" (the Right Parenthesis key (numeric keypad)) | AK_KEY_KP_RIGHTPAREN
"Keypad Space" (the Space key (numeric keypad)) | AK_KEY_KP_SPACE
"Keypad Tab" (the Tab key (numeric keypad)) | AK_KEY_KP_TAB
"Keypad \|" (the \| key (numeric keypad)) | AK_KEY_KP_VERTICALBAR
"Keypad XOR" (the XOR key (numeric keypad)) | AK_KEY_KP_XOR
"Left Alt" | AK_KEY_LALT
"Left Ctrl" | AK_KEY_LCTRL
"Left" (the Left arrow key (navigation keypad)) | AK_KEY_LEFT
"[" | AK_KEY_LEFTBRACKET
"Left GUI" (windows, command (apple), meta) | AK_KEY_LGUI
"Left Shift" | AK_KEY_LSHIFT
"Mail" (the Mail/eMail key) | AK_KEY_MAIL
"MediaSelect" (the Media Select key) | AK_KEY_MEDIASELECT
"Menu" | AK_KEY_MENU
"-" | AK_KEY_MINUS
"ModeSwitch" | AK_KEY_MODE
"Mute" | AK_KEY_MUTE
"Numlock" (the Num Lock key (PC) / the Clear key (Mac)) | AK_KEY_NUMLOCKCLEAR
"Oper" | AK_KEY_OPER
"Out" | AK_KEY_OUT
"PageDown" | AK_KEY_PAGEDOWN
"PageUp" | AK_KEY_PAGEUP
"Paste" | AK_KEY_PASTE
"Pause" (the Pause / Break key) | AK_KEY_PAUSE
"." | AK_KEY_PERIOD
"Power" (The USB document says this is a status flag, not a physical key - but some Mac keyboards do have a power key.) | AK_KEY_POWER
"PrintScreen" | AK_KEY_PRINTSCREEN
"Prior" | AK_KEY_PRIOR
"Right Alt" (alt gr, option) | AK_KEY_RALT
"Right Ctrl" | AK_KEY_RCTRL
"Return" (the Enter key (main keyboard)) | AK_KEY_RETURN
"Return" | AK_KEY_RETURN2
"Right GUI" (windows, command (apple), meta) | AK_KEY_RGUI
"Right" (the Right arrow key (navigation keypad)) | AK_KEY_RIGHT
"]" | AK_KEY_RIGHTBRACKET
"Right Shift" | AK_KEY_RSHIFT
"ScrollLock" | AK_KEY_SCROLLLOCK
"Select" | AK_KEY_SELECT
";" | AK_KEY_SEMICOLON
"Separator" | AK_KEY_SEPARATOR
"/" | AK_KEY_SLASH
"Sleep" (the Sleep key) | AK_KEY_SLEEP
"Space" (the Space Bar key(s)) | AK_KEY_SPACE
"Stop" | AK_KEY_STOP
"SysReq" (the SysReq key) | AK_KEY_SYSREQ
"Tab" (the Tab key) | AK_KEY_TAB
"ThousandsSeparator" (the Thousands Separator key) | AK_KEY_THOUSANDSSEPARATOR
"Undo" | AK_KEY_UNDO
"" (no name, empty string) | AK_KEY_UNKNOWN
"Up" (the Up arrow key (navigation keypad)) | AK_KEY_UP
"VolumeDown" | AK_KEY_VOLUMEDOWN
"VolumeUp" | AK_KEY_VOLUMEUP
"WWW" (the WWW/World Wide Web key) | AK_KEY_WWW

These physical keys do not have corresponding virtual key values

Key Name | Key Code
-------- | --------
"" (no name, empty string; used on Asian keyboards, see footnotes in USB doc) | AK_KEY_INTERNATIONAL1
"" (no name, empty string) | AK_KEY_INTERNATIONAL2
"" (no name, empty string; Yen) | AK_KEY_INTERNATIONAL3
"" (no name, empty string) | AK_KEY_INTERNATIONAL4
"" (no name, empty string) | AK_KEY_INTERNATIONAL5
"" (no name, empty string) | AK_KEY_INTERNATIONAL6
"" (no name, empty string) | AK_KEY_INTERNATIONAL7
"" (no name, empty string) | AK_KEY_INTERNATIONAL8
"" (no name, empty string) | AK_KEY_INTERNATIONAL9
"" (no name, empty string; Hangul/English toggle) | AK_KEY_LANG1
"" (no name, empty string; Hanja conversion) | AK_KEY_LANG2
"" (no name, empty string; Katakana) | AK_KEY_LANG3
"" (no name, empty string; Hiragana) | AK_KEY_LANG4
"" (no name, empty string; Zenkaku/Hankaku) | AK_KEY_LANG5
"" (no name, empty string; reserved) | AK_KEY_LANG6
"" (no name, empty string; reserved) | AK_KEY_LANG7
"" (no name, empty string; reserved) | AK_KEY_LANG8
"" (no name, empty string; reserved) | AK_KEY_LANG9
"" (no name, empty string) | AK_KEY_LOCKINGCAPSLOCK
"" (no name, empty string) | AK_KEY_LOCKINGNUMLOCK
"" (no name, empty string) | AK_KEY_LOCKINGSCROLLLOCK
"" (no name, empty string; This is the additional key that ISO keyboards have over ANSI ones, located between left shift and Y. Produces GRAVE ACCENT and TILDE in a US or UK Mac layout, REVERSE SOLIDUS (backslash) and VERTICAL LINE in a US or UK Windows layout, and LESS-THAN SIGN and GREATER-THAN SIGN in a Swiss German, German, or French layout. | AK_KEY_NONUSBACKSLASH
"#" (ISO USB keyboards actually use this code instead of 49 for the same key, but all OSes I've seen treat the two codes identically. So, as an implementor, unless your keyboard generates both of those codes and your OS treats them differently, you should generate AK_KEY_BACKSLASH instead of this code. As a user, you should not rely on this code because SDL will never generate it with most (all?) keyboards.) | AK_KEY_NONUSHASH
