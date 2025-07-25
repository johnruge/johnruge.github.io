---
title: "Unix Shell"
description: "A fully functional Unix shell in C supporting job control, output redirection, path resolution, and both batch and interactive input modes."
status: "done"
technologies: ["C"]
date: "December 2024"
featured: false
---

# Unix Shell

A robust Unix shell implemented in C as part of the CS14400 course, designed to provide a practical understanding of system-level programming and process management.

## Key Features

- **Job Control**: Supports foreground and background job execution
- **Output Redirection**: Implements `>` and `>+` operators for output redirection, with input validation to prevent file overwrite and enable safe appending
- **Path Resolution**: Resolves executable paths for external programs
- **Batch & Interactive Modes**: Can run in both batch mode (from file) and interactive mode (user input)
- **Built-in Commands**: Includes support for `cd`, `pwd`, and `exit`
- **External Programs**: Executes external programs using `fork()`, `execvp()`, and `wait()`