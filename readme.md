---

## README: How to Use the App

### Introduction

This application dynamically generates a personalized CV based on data provided in JSON format. It automatically loads the appropriate language for the user and populates the CV sections based on the available data.

### Steps to Use the App

1. **Prepare JSON Data:**
    - Create a JSON file for the CV data. The file should be named `cv.data.{lang}.json`, where `{lang}` is the language code (e.g., `cv.data.en.json` for English).
    - The application will look for a language-specific file and use it to populate the CV.

2. **Language Selection:**
    - The language for the CV is automatically detected based on the `lang` attribute in the `<html>` tag of the document. If the `lang` attribute is not set, it defaults to `en` (English).
    - If the file for a specific language does not exist, the app will alert the user to create it or fallback to a default file.

3. **JSON Structure:**
    - The `cv.data.{lang}.json` file should contain structured data for each section of the CV (contact information, education, work experience, etc.).
    - The structure also includes a `vocabulary.json` file that holds the labels for various sections in different languages.

### Sample Expected JSON Structure

See the full [json guide](json-guide.md) or start modifying one of the dist files.

### Key Sections Explained

1. **Contact Information**: This section holds personal details such as birth date, address, email, phone, and links to social media profiles like GitHub and LinkedIn.

2. **Summary**: A brief description of the user’s background, experience, and personality.

3. **Key Points**: Lists important qualities and skills such as leadership, adaptability, and focus on improvement.

4. **Work Experience**: A list of the user’s previous jobs, companies, technologies used, and descriptions of the role.

5. **Education**: The user's academic qualifications and relevant achievements.

6. **Languages**: Specifies languages spoken by the user, including their proficiency level.

7. **Technical Skills**: This section categorizes the user’s technical expertise into software development, frontend, DevOps, and more.

8. **Interests**: A list of personal interests or hobbies outside of professional work.

---

### How the App Works

- **Dynamically Loads Data**: The app dynamically loads data based on the JSON file corresponding to the current language.
- **Populates the CV**: The app then uses the loaded data to populate various sections of the CV, such as contact information, work experience, technical skills, and more.

For each section in the JSON, the app updates the relevant HTML elements (such as `#contact-info`, `#work-experience`, etc.) with the corresponding data.

---

### Troubleshooting

- **File Not Found**: If the file `cv.data.{lang}.json` is not found, the app will alert you to create the file or use a default file.
- **Missing Language Data**: If a translation is missing for the selected language, the app will default to English (`en`).

