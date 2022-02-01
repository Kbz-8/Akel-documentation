---
title: Audio Manager
description: Akel's audio manager
layout: ../../../layouts/MainLayout.astro
---

## About

---

Akel's audio manager is currently only able to play 2D sounds and only supports the formats supported by the [SND files](https://libsndfile.github.io/libsndfile/formats.html) library in 16 bits and 8 bits.
However, it is extremely easy to use. You just load an audio file into a buffer, play it whenever you want and free it at the end.
The audio manager is simply a static wrapper around an OpenAL module.

## Syntax

---

```cpp
class CustomComponent : public Ak::Component
{
    public:
        void CustomComponent::onAttach() override
        {
            sound = Ak::AudioManager::loadSound("../sound.wav");
        }

        void CustomComponent::update() override
        {
            Ak::AudioManager::playSound(sound);
        }

        void CustomComponent::onQuit() override
        {
            Ak::AudioManager::freeSound(sound);
        }

    private:
        Ak::audioFile sound;
};
```

## Audio Files

---

The audio manager has a type specific to audio files which is `Ak::audioFile`. This is a buffer containing information about a sound loaded from an audio file.
It is advisable to use this type with the Akel audio manager for simplicity and compatibility.

```cpp
// Declaration
using audioFile = ALuint;

// Usage
Ak::audioFile my_sound = Ak::AudioManager::loadSound("sound.wav");
```

---

## Member functions

---

| Return type | Function                                                               | Specifiers
| ----------- | ---------------------------------------------------------------------- | -----------
|       | <a href="#constructor" style="text-decoration: none;">AudioManager()</a> | `delete`
|       | <a href="#destructor" style="text-decoration: none;">~AudioManager()</a> | `delete`
| `void`      | <a href="#initaudiomanager" style="text-decoration: none;">initAudioManager()</a> | `static`
| `Ak::audioFile`      | <a href="#loadsoundstdstring-filename" style="text-decoration: none;">loadSound(std::string filename)</a> | `static`
| `void`      | <a href="#playsoundakaudiofile-sound" style="text-decoration: none;">playSound(audioFile sound)</a> | `static`
| `void`      | <a href="#freesoundakaudiofile-sound" style="text-decoration: none;">freeSound(audioFile sound)</a>  | `static`
| `void`      | <a href="#newsource" style="text-decoration: none;">newSource()</a>  | `static`
| `void`      | <a href="#freesourceint-index" style="text-decoration: none;">freeSource(int index)</a>  | `static`
| `void`      | <a href="#switch_to_sourceint-index" style="text-decoration: none;">switch_to_source(int index)</a>  | `static`
| `void`      | <a href="#shutdownaudiomanager" style="text-decoration: none;">shutdownAudioManager()</a>  | `static`

---

### Constructor

---

Creates a new AudioManager.

```cpp
// Prototype
AudioManager() = delete;

// Usage

// You can't use it because it is a deleted method.
// AudioManager is used like a static class.
// It is init automatically by Akel at the begenning of your program.
```

---

### Destructor

---

Deletes the AudioManager.

```cpp
// Prototype
~AudioManager() = delete;

// Usage

// You can't use it because it is a deleted method.
// AudioManager is used like a static class.
// It is deleted automatically by Akel at the end of your program.
```

---

### initAudioManager()

---

Inits the AudioManager.

```cpp
// Prototype
static void initAudioManager();

// Usage

// You are not supposed to use this method.
// It is init automatically by Akel at the begenning of your program.
```

---

### loadSound(std::string filename)

---

Loads a new sound from the sound file given.

```cpp
// Prototype
static void loadSound(std::string filename);

// Usage
Ak::audioFile my_sound = Ak::AudioManager::loadSound("../sound.wav");
```

---

### playSound(Ak::audiofile sound)

---

Plays the sound given with its source.

```cpp
// Prototype
static void playSound(audiofile sound);

// Usage
Ak::AudioManager::playSound(my_sound);
```

---

### freeSound(Ak::audiofile sound)

---

Frees the sound given.

```cpp
// Prototype
static void freeSound(audiofile sound);

// Usage
Ak::AudioManager::freeSound(my_sound);
```

---

### newSource()

---

Creates a new source from which a sound can be played.

```cpp
// Prototype
static void newSource();

// Usage
Ak::AudioManager::newSource();
```

---

### freeSource(int index)

---

Frees an existing source corresponding to the given index.

```cpp
// Prototype
static void freeSource(int index);

// Usage
Ak::AudioManager::freeSource(2); // frees the third source (it starts from 0)
```

---

### switch_to_source(int index)

---

Switches to the source corresponding to the given index.

```cpp
// Prototype
static void switch_to_source(int index);

// Usage
Ak::AudioManager::switch_to_source(2); // switches to the third source (it starts from 0)
```

---

### shutdownAudioManager()

---

Shutdowns the audio manager.

```cpp
// Prototype
static void shutdownAudioManager();

// Usage

// You are not supposed to use this method.
// It is init automatically by Akel at the ending of your program.
```

---
