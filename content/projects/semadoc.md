---
title: "SemaDoc"
description: "An in-house AI-powered documentation tool used across 8 teams, reducing documentation time from hours to minutes using LLM-powered workflows"
status: "in-development"
technologies: ["FastAPI", "MongoDB", "Python", "Ollama", "LLMs", "Trello API"]
github: "https://github.com/uchicago-cs/semadoc"
date: "2024-03-01"
featured: false
---

# SemaDoc

SemaDoc is an innovative AI-powered documentation tool developed for the UChicago Computer Science Instructional Laboratory (CSIL). This tool revolutionizes the documentation process by leveraging large language models to automate and streamline documentation workflows.

## Key Features

- **AI-Powered Documentation**: Utilizes LLM-powered workflows to automate documentation generation
- **Multi-Team Integration**: Used across 8 different teams at CSIL
- **Trello Integration**: Seamlessly integrates with async Trello APIs for project management
- **High Performance**: Supports 500+ concurrent users with sub-100ms database operations
- **Scalable Architecture**: Built with FastAPI and MongoDB for optimal performance

## Technical Implementation

The system is architected with a FastAPI backend that integrates several key technologies:
- **FastAPI Backend**: Provides high-performance async API endpoints
- **MongoDB Database**: Ensures fast data operations and scalability
- **Ollama Integration**: Hosts and manages local LLM instances
- **Async Trello APIs**: Enables real-time project management integration

## Impact

SemaDoc has dramatically improved documentation efficiency at CSIL:
- **Time Reduction**: Documentation time reduced from hours to minutes
- **Wide Adoption**: Used across 8 teams within the organization
- **Performance**: Maintains sub-100ms database operations even with 500+ concurrent users
- **Workflow Integration**: Seamlessly fits into existing development workflows

## Use Cases

The tool serves various documentation needs:
- Code documentation generation
- Project status reports
- API documentation
- Meeting notes and summaries
- Technical specification writing

This project showcases the practical application of AI in software development workflows, demonstrating how LLMs can be effectively integrated into enterprise tools to solve real-world productivity challenges. 