document.addEventListener('DOMContentLoaded', function() {

    // Get the document's language setting
    const lang = document.documentElement.lang || 'en'; // Default to 'en' if lang attribute is missing

    // Dynamically generate the path to the CV data JSON file based on the language
    const cvFilePath = `cv.data.${lang}.json`;

    // Path to the vocabulary JSON file
    const vocabFilePath = 'vocabulary.json';

    // Load the vocabulary JSON data
    fetch(vocabFilePath)
        .then(response => response.json())
        .then(vocabulary => {
            const langLabels = vocabulary[lang] || vocabulary['en']; // Default to 'en' if language is missing

            // Load the CV data
            fetch(cvFilePath)
                .then(response => {
                    if (!response.ok) {
                        // If the file doesn't exist, show an alert
                        alert('Please create the cv.data.' + lang + '.json file. You can start from the dist file.');
                        throw new Error('CV data file not found');
                    }
                    return response.json();
                })
                .then(data => {
                    // Populate Contact Information Section
                    const contactInfo = document.getElementById('contact-info');
                    contactInfo.innerHTML = `
                        <h3>${langLabels.contact_info}</h3>
                        <p><strong>${langLabels.birth}:</strong> ${data.contact_information.birth}</p>
                        <p><strong>${langLabels.address}:</strong> ${data.contact_information.address}</p>
                        <p><strong>${langLabels.email}:</strong> <a href="mailto:${data.contact_information.email}">${data.contact_information.email}</a></p>
                        <p><strong>${langLabels.phone}:</strong> <a href="tel:${data.contact_information.phone}">${data.contact_information.phone}</a></p>
                        <p><strong>${langLabels.github}:</strong> <a href="${data.contact_information.github}" target="_blank">${data.contact_information.github}</a></p>
                        <p><strong>${langLabels.linkedin}:</strong> <a href="${data.contact_information.linkedin}" target="_blank">${data.contact_information.linkedin}</a></p>
                        <p><strong>${langLabels.instagram}:</strong> <a href="${data.contact_information.instagram}" target="_blank">${data.contact_information.instagram}</a></p>

                    `;

                    // Populate Education Section
                    const education = document.getElementById('education');
                    education.innerHTML = `
                        <h3>${langLabels.education}</h3>
                        <ul>
                            ${data.education.map(item => `
                                <li>
                                    <strong>${item.degree}</strong>, ${item.institution} - ${item.location} (${item.year || item.years})
                                    ${item.grade ? ` - ${langLabels.grade}: ${item.grade}` : ` - ${langLabels.no_grade}`}
                                </li>
                            `).join('')}
                        </ul>
                    `;

                    // Populate Languages Section
                    const languages = document.getElementById('languages');
                    languages.innerHTML = `
                        <h3>${langLabels.languages}</h3>
                        <ul>
                            <li><strong>Italian:</strong> ${data.languages.Italian}</li>
                            <li><strong>English:</strong> ${data.languages.English}</li>
                        </ul>
                    `;

                    // Populate Technical Skills Section
                    const technicalSkills = document.getElementById('technical-skills');
                    let skillsHtml = `<h3>${langLabels.technical_skills}</h3>`;

                    // Loop through technical skills categories
                    Object.keys(data.technical_skills).forEach(category => {
                        const categoryData = data.technical_skills[category];
                        skillsHtml += `
                            <h4>${langLabels[category.replace(/_/g, ' ')] || category.replace(/_/g, ' ')}</h4>
                            <ul>
                                ${Object.keys(categoryData).map(subcategory => {
                            return `
                                        <li><strong>${langLabels[subcategory.replace(/_/g, ' ')] || subcategory.replace(/_/g, ' ')}</strong>: ${categoryData[subcategory].join(', ')}</li>
                                    `;
                        }).join('')}
                            </ul>
                        `;
                    });

                    technicalSkills.innerHTML = skillsHtml;


                    // Populate Interests Section
                    const interests = document.getElementById('interests');
                    interests.innerHTML = `
                        <h3>${langLabels.interests}</h3>
                        <ul>
                            ${data.interests.map(interest => `
                                <li>${interest}</li>
                            `).join('')}
                        </ul>
                    `;

                    // Populate Summary Section
                    const summary = document.getElementById('summary');
                    const summaryDescription = data.summary.description.replace(/\n/g, '<br>');  // Replace newline with <br>
                    summary.innerHTML = `
                        <h3>${langLabels.summary}</h3>
                        <p>${summaryDescription}</p>
                    `;

                    // Populate Key Qualities Section
                    const keyQualities = document.getElementById('key-qualities');
                    keyQualities.innerHTML = `
                        <h3>${langLabels.key_qualities}</h3>
                        <ul>
                            ${data.key_points.map(point => `
                                <li>
                                    <strong>${point.title}</strong>: ${point.description}
                                </li>
                            `).join('')}
                        </ul>
                    `;

                    // Populate Work Experience Section
                    const workExperience = document.getElementById('work-experience');
                    workExperience.innerHTML = `
                        <h3>${langLabels.work_experience}</h3>
                        <ul>
                            ${data.work_experience.map(job => `
                                <li>
                                    <strong>${job.title}</strong>, ${job.company} - ${job.location} (${job.dates})
                                    ${job.companyLink ? `<p><a href="${job.companyLink}">${job.companyLink}</a></p>` : ''}
                                    <p>${job.description}</p>
                                    <p><strong>${langLabels.technologies}:</strong> <span class="tech-stack">${job.technologies.join(', ')}</span></p>
                                </li>
                            `).join('')}
                        </ul>
                    `;
                });
        });
});