---
title: "Unix Shell"
description: "A fully functional Unix shell in C supporting job control, output redirection, path resolution, and both batch and interactive input modes."
status: "done"
technologies: ["C"]
date: "December 2024"
featured: false
---

The Unix Shell is a fully functional command-line interpreter built in C as part of the CS14400 course, offering hands-on experience in system-level programming and process control. Designed to mimic core behaviors of traditional Unix shells, it supports job control with foreground and background execution, allowing users to manage multiple processes with ease. The shell features robust output redirection using `>` and `>+`, including safeguards to prevent unintended file overwrites and support for safe appending. It accurately resolves executable paths for running external programs and supports both interactive and batch modes, accommodating a variety of usage scenarios. With built-in commands like `cd`, `pwd`, and `exit`, and full support for launching external programs via `fork()`, `execvp()`, and `wait()`, this project demonstrates a comprehensive understanding of Unix internals, system calls, and user-level process management.
