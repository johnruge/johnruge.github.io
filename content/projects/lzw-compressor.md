---
title: "LZW File Compressor"
description: "Implemented a Lempel-Ziv-Welch compression and decompression system in C, enabling lossless file encoding with edge case handling for recursive decoding"
status: "done"
technologies: ["C", "Algorithms", "Data Structures", "File Compression"]
github: "https://github.com/johnruge/lzw-compressor"
date: "2024-11-01"
featured: false
---

# LZW File Compressor

A complete implementation of the Lempel-Ziv-Welch (LZW) compression algorithm in C, providing lossless data compression with robust error handling.

## Key Features

- **Lossless Compression**: Complete LZW algorithm implementation
- **File I/O**: Efficient file reading and writing operations
- **Edge Case Handling**: Robust handling of recursive decoding scenarios
- **Unknown Code Management**: Prefix-based table traversal for error recovery
- **Memory Efficient**: Optimized memory usage for large file processing

## Technical Implementation

The compressor implements the LZW algorithm from scratch in C, featuring:
- Dynamic dictionary building during compression/decompression
- Efficient bit packing for compressed output
- Error detection and recovery mechanisms
- Cross-platform compatibility

## Algorithm Details

The LZW algorithm builds a dictionary of strings during compression, allowing for efficient encoding of repeated patterns. This implementation handles all standard LZW edge cases and provides reliable compression ratios for various file types.

## Use Cases

Perfect for understanding compression algorithms and file processing in systems programming. Demonstrates low-level C programming skills and algorithmic thinking.