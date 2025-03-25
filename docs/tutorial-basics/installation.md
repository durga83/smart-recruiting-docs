---
sidebar_position: 2
---

# Installation & Deployment

This guide provides step-by-step instructions to install and deploy **Smart_Recruiting**, an AI-powered resume screening tool by BintyByte Technologies.

---

## Prerequisites

Before proceeding, ensure your system meets the following requirements:

- **Operating System**: Windows
- **Minimum RAM**: 8GB
- **Storage**: At least 2GB free space
- **Binary File**: `ai_smart_resume_match` (provided with the license)
- **Additional Dependencies**:
  - `GEMINI_API_KEY` (Required for AI processing)
  - `GEMINI_MODEL_NAME` (AI model configuration)
  - License key (provided by BintyByte Technologies)

---

## Step 1: Download the Binary File and Folder Structure

1. Download the **Smart_Recruiting** executable file and folder structure from the provided Git repository or zipped archive.
2. Extract the contents to a preferred working directory on your system.

---

## Step 2: Configure Dependencies

### `.env File Configuration`
The `.env` file contains environment variables that configure the application. Follow these steps to set it up:

1. Open the `.env` file in a text editor.
2. Modify the following variables according to your setup:

```plaintext
GEMINI_API_KEY=your_api_key_here
GEMINI_MODEL_NAME=gemini-1.5-flash
BASE_JD_DIR=/DATA/INPUT/JDS
SUMMARY_OUTPUT_FILE=/DATA/OUTPUT/results.csv
JSON_INPUT_DIR=/DATA/INPUT/JSON
TEMPLATE_DIR=/DATA/TEMPLATES
LOGO_PATH=/DATA/LOGO/logo.png
INPUT__LLM_PROMPT=gemini_1
OUTPUT__RESUME_FORMAT=docx,html,md,pdf
USERNAME=your_username
EMAIL=your_email@example.com
SECRET_KEY=auto_generated
LICENSE_KEY=auto_generated
TESSERACT_MODE=ON