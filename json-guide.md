### **1. Contact Information**
- **Purpose**: Displays personal details about the individual (e.g., name, address, contact info).
- **Expected JSON Structure**:
    ```json
    "contact_information": {
        "birth": "Date of birth",
        "address": "Full address",
        "email": "email@example.com",
        "phone": "phone number",
        "github": "https://github.com/username",
        "linkedin": "https://linkedin.com/in/username",
        "instagram": "https://www.instagram.com/username/"
    }
    ```
- **How to populate**: Each element under the `contact_information` will be populated into corresponding HTML tags:
    - Birth date and address will be displayed as simple text.
    - Email will be shown as a clickable mailto link.
    - Phone number will be a clickable tel link.
    - Social media links (GitHub, LinkedIn, Instagram) will be clickable and open in a new tab.

---

### **2. Summary**
- **Purpose**: A brief description of the individual’s background, career focus, and expertise.
- **Expected JSON Structure**:
    ```json
    "summary": {
        "description": "Summary text about the person, their experience, and work philosophy."
    }
    ```
- **How to populate**: The summary description text will be inserted into a `<p>` tag. Any newline characters (`\n`) in the description will be replaced with `<br>` to ensure proper formatting.

---

### **3. Key Qualities**
- **Purpose**: Lists key personal qualities or strengths of the individual (leadership, focus, adaptability, etc.).
- **Expected JSON Structure**:
    ```json
    "key_points": [
        {
            "title": "Leadership",
            "description": "Description of the leadership quality."
        },
        {
            "title": "Focus on Improvement",
            "description": "Description of how they focus on improvement."
        }
    ]
    ```
- **How to populate**: Each item in the `key_points` array will be displayed as a list item with the title in bold and the description as normal text.

---

### **4. Work Experience**
- **Purpose**: A list of previous jobs or projects with details about the company, role, technologies used, and job descriptions.
- **Expected JSON Structure**:
    ```json
    "work_experience": [
        {
            "title": "Job Title",
            "company": "Company Name",
            "location": "Location",
            "dates": "Employment dates",
            "companyLink": "URL to company website (optional)",
            "description": "Job description or role details.",
            "technologies": ["Tech1", "Tech2", "Tech3"]
        }
    ]
    ```
- **How to populate**:
    - Each job will be listed with job title, company name, location, and employment dates.
    - The company’s website link, if available, will be displayed as a clickable link.
    - The job description will be displayed in normal text.
    - Technologies used will be listed as comma-separated values under a specific section.

---

### **5. Education**
- **Purpose**: A list of educational qualifications and institutions attended, along with grades (if applicable).
- **Expected JSON Structure**:
    ```json
    "education": [
        {
            "degree": "Degree Title",
            "institution": "Institution Name",
            "location": "Institution Location",
            "years": "Start and End Years",
            "grade": "Grade (optional)"
        }
    ]
    ```
- **How to populate**: Each degree will be listed with the degree title, institution name, location, and years attended. If available, the grade will be included next to the degree.

---

### **6. Languages**
- **Purpose**: Lists languages spoken with proficiency levels.
- **Expected JSON Structure**:
    ```json
    "languages": {
        "Martian": "Fluent",
        "Human English": "Intermediate",
        "Binary": "Expert"
    }
    ```
- **How to populate**: Each language and proficiency will be displayed as a list, with the language name in bold and the proficiency level in normal text.

---

### **7. Technical Skills**
- **Purpose**: A categorized list of technical skills the individual possesses, often segmented by skill type (e.g., programming languages, frameworks, DevOps, etc.).
- **Expected JSON Structure**:
    ```json
    "technical_skills": {
        "Sviluppo_Software": {
            "Linguaggi": ["Language1", "Language2"],
            "Framework": ["Framework1", "Framework2"],
            "Paradigmi": ["Paradigm1", "Paradigm2"]
        },
        "Sviluppo_Frontend": {
            "Tecnologie": ["Tech1", "Tech2"]
        }
    }
    ```
- **How to populate**:
    - Each category (e.g., `Sviluppo_Software`, `Sviluppo_Frontend`) will be shown as a header.
    - Subcategories (like `Linguaggi`, `Framework`, etc.) will be shown as bullet points with technologies or tools listed.

---

### **8. Interests**
- **Purpose**: A list of hobbies or activities the individual is interested in.
- **Expected JSON Structure**:
    ```json
    "interests": [
        "Interest1",
        "Interest2"
    ]
    ```
- **How to populate**: Each interest will be displayed as a list item.

---

### **How to Set Up the JSON Files**
1. **Vocabulary File (`vocabulary.json`)**:
   This file holds translations for the labels displayed in the app. It allows for internationalization (i18n). The structure looks like:
   ```json
   {
       "en": {
           "contact_info": "Contact Information",
           "birth": "Date of Birth",
           "address": "Address",
           "email": "Email",
           "phone": "Phone",
           "github": "GitHub",
           "linkedin": "LinkedIn",
           "instagram": "Instagram",
           "education": "Education",
           "languages": "Languages",
           "technical_skills": "Technical Skills",
           "key_qualities": "Key Qualities",
           "work_experience": "Work Experience",
           "interests": "Interests",
           "summary": "Summary",
           "technologies": "Technologies",
           "grade": "Grade",
           "no_grade": "No grade available"
       },
       "it": {
           "contact_info": "Informazioni di contatto",
           "birth": "Data di nascita",
           "address": "Indirizzo",
           "email": "Email",
           "phone": "Telefono",
           "github": "GitHub",
           "linkedin": "LinkedIn",
           "instagram": "Instagram",
           "education": "Istruzione",
           "languages": "Lingue",
           "technical_skills": "Competenze tecniche",
           "key_qualities": "Qualità chiave",
           "work_experience": "Esperienza lavorativa",
           "interests": "Interessi",
           "summary": "Riassunto",
           "technologies": "Tecnologie",
           "grade": "Voto",
           "no_grade": "Nessun voto disponibile"
       }
   }
   ```

2. **CV Data File (`cv.data.en.json`, `cv.data.it.json`)**:
   This file contains personal information and details to be displayed on the page. It should match the structure outlined earlier.

---

### **Expected JSON Sample (`cv.data.en.json`)**
```json
{
    "contact_information": {
        "birth": "Mars, 03 July 2120",
        "address": "Galaxy Drive 88, Moonville, Mars",
        "email": "superguy2120@marsmail.com",
        "phone": "+39 555 123 4567",
        "github": "https://github.com/marsman007",
        "linkedin": "https://linkedin.com/in/superguy-onmars",
        "instagram": "https://www.instagram.com/marstronaut/"
    },
    "summary": {
        "description": "With 15 years of experience in intergalactic software development, I have conquered numerous planets, from building teleportation apps to coding AI for alien communications. I’ve worked on projects like Mars-Rover 2.0 and Martian agriculture optimization. I also led the development of a holographic social network for the Martian Society. My leadership style is all about laser-focused goal achievement and ensuring every alien species on the team feels valued, even when they have tentacles instead of hands."
    },
    "key_points": [
        {
            "title": "Leadership",
            "description": "I view leadership as a cosmic force that binds my team together, creating a galaxy of ideas and strategies. While sometimes I get carried away thinking I’m the Emperor of the Universe, I always ensure everyone gets their fair share of space cookies."
        }
    ],
    "work_experience": [
        {
            "title": "Supreme Leader of Code",
            "company": "Galactic Coders Inc.",
            "location": "Planet Zog",
            "dates": "January 2060 - Present",
            "companyLink": "https://galacticcoders.com",
            "description": "At Galactic Coders, I command a fleet of 25 cybernetic engineers, building software that can communicate with distant galaxies. We implemented interstellar travel scheduling apps and artificial gravity simulators, pushing the boundaries of code and space-time.",
            "technologies": [
                "Python",
                "JavaScript",
                "Quantum Computing",
                "AI",
                "Blockchain",
                "Space-Time Algorithms"
            ]
        }
    ],
    "education": [
        {
            "degree": "Cosmic Web Development Degree",
            "institution": "Interstellar Tech University",
            "location": "Jupiter's Moons",
            "years": "2040 - 2044",
            "grade": "11/10 (Extra credits for creating a self-aware AI)"
        }
    ],
    "languages": {
        "Martian": "Fluent",
        "Human English": "Intermediate",
        "Binary": "Expert"
    },
    "technical_skills": {
        "Sviluppo_Software": {
            "Linguaggi": ["ZogScript", "QuantumC", "TimeWarp", "Martian Java"],
            "Framework": ["SpaceFrame", "QuantumFlux"]
        },
        "Sviluppo_Frontend": {
            "Tecnologie": ["Anti-Gravity CSS", "Hyperloop JS", "Plasma Framework"]
        }
    },
    "interests": [
        "Lunar Hiking",
        "Cosmic Yoga",
        "Time Travel",
        "Alien Herbology",
        "Intergalactic Travel"
    ]
}
```

By following the structure and rules for each section, the app can automatically display the information correctly when the appropriate JSON data is provided.