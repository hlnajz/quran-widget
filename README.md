# Quran Ayat Widget

This project provides an API that serves random Quranic Ayat in both Arabic and English, along with the ability to generate images of Ayat for use in GitHub profiles, websites, or other projects.

The API can be used to display a random Quranic Ayah in various formats (JSON or image) with customizable themes and layouts.

## Features

- Retrieve random Quranic Ayat in both **Arabic** and **English**.
- Generate dynamic images of the Ayat with customizable themes (`dark` or `light`) and layouts (`vertical` or `horizontal`).
- Simple API for easy integration into GitHub profiles, personal websites, or other projects.

## API Endpoints

### 1. Random Ayah as JSON

Get a random Ayah in JSON format.

**Endpoint**:  
GET https://quran-widget.vercel.app/api/ayat/json

css
Copy code

**Response Example**:

```json
{
  "surah": "Al-Fatiha",
  "ayah": 1,
  "text": {
    "english": "In the name of Allah, the Most Gracious, the Most Merciful.",
    "arabic": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
  }
}
2. Random Ayah as Image
Get a random Ayah as an image. The image can be customized with language, theme, and layout.

Endpoint:

ruby
Copy code
GET https://quran-widget.vercel.app/api/ayat/image
Query Parameters:
lang: Language of the Ayah. Use arabic or english.
theme: Theme for the image. Choose dark or light.
type: Layout of the image. Choose vertical or horizontal.
Example Request:

bash
Copy code
GET https://quran-widget.vercel.app/api/ayat/image?lang=english&theme=light&type=vertical
Image Example: You can display an image of the Ayah on your website or GitHub profile:

markdown
Copy code
![Quran Ayah](https://quran-widget.vercel.app/api/ayat/image?lang=arabic&theme=dark&type=vertical)
Or in your HTML:

html
Copy code
<img src="https://quran-widget.vercel.app/api/ayat/image?lang=english&theme=light&type=horizontal" alt="Quran Ayah">
How to Use
On GitHub
To use the widget on your GitHub profile or README:

markdown
Copy code
![Quran Ayah](https://quran-widget.vercel.app/api/ayat/image?lang=arabic&theme=dark&type=vertical)
You can replace arabic with english to display the Ayah in English and switch between dark and light themes.

On Your Website
To display a Quranic Ayah image on your website:

html
Copy code
<img src="https://quran-widget.vercel.app/api/ayat/image?lang=english&theme=light&type=horizontal" alt="Quran Ayah">
You can also customize the query parameters (lang, theme, type) as needed.

Example Usage
GitHub Profile
markdown
Copy code
![Quran Ayah](https://quran-widget.vercel.app/api/ayat/image?lang=english&theme=light&type=horizontal)
This will display a random Ayah image in English with a light theme and horizontal layout.

HTML Example
html
Copy code
<img src="https://quran-widget.vercel.app/api/ayat/image?lang=arabic&theme=dark&type=vertical" alt="Quran Ayah">
This will display a random Ayah image in Arabic with a dark theme and vertical layout.

Contributing
Contributions are welcome! If you'd like to add more Ayat or improve the API, feel free to fork the repository and submit a pull request.

Steps for Contributing:
Fork the repository.
Add more Ayat to the ayat.json file (following the existing format).
Commit your changes and push them to your fork.
Create a pull request with a description of your changes.
License
This project is open-source and available under the MIT License.

Contact
For any questions or issues, feel free to reach out to the project creator:

Hamza Labbaalli
GitHub
Website https://hlnajz.com
```
