# Stylumia NXT Hackathon 2024

**Deployment Link:** **[https://stylumia-out-wear.vercel.app/](https://stylumia-out-wear.vercel.app/)**

## Problem Statement
The fashion industry is an ever-evolving domain characterized by diverse categories, intricate styles, and rapidly changing trends. Despite its growth, existing systems struggle to address significant challenges, including:

- **Inadequate tools** to extract and analyze attributes such as fabrics, patterns, and styles from images, videos, and text.
- **Lack of robust mechanisms** to track and adapt to emerging fashion trends.
- **Limited personalization options** for recommendations tailored to individual preferences, body types, and occasions.
- **Insufficient integration** of sustainability insights for eco-friendly fashion choices.
- **Challenges in bridging the gap** between AI automation and human expertise for fashion-related decisions.

## Objective
This project aims to revolutionize the fashion industry by introducing a universal ontology and AI-driven feature extraction system that:

- Enables seamless categorization and trend adaptation.
- Provides real-time, personalized insights for brands and consumers.
- Promotes sustainability through eco-conscious fashion practices.
- Offers an avatar-based feature for users to visualize how clothes will look on their personalized avatars.
- Includes an extension that allows users to upload a photo and visualize how clothes will look on them directly from any page.
- Features a Trend Radar that displays global and regional fashion trends in real-time.
- Introduces a Personalized Fashion Assistant that provides tailored fashion recommendations based on individual preferences and body features.

## Methodology
1. **Ontology Development**: Build and maintain a hierarchical taxonomy of fashion attributes using RDF (Resource Description Framework) and OWL (Web Ontology Language).
2. **Data Ingestion and Feature Extraction**: Collect data through web scraping, images, videos, and textual content using machine learning technologies like TensorFlow and PyTorch.
3. **Personalized AI Solutions**: Implement an AI Smart Stylist for personalized recommendations, an avatar-based feature, and integrate a Personalized Fashion Assistant.
4. **Trend Radar and Insights**: Use Natural Language Processing (NLP) for developing the Trend Radar to display global trends.
5. **Dashboard and Search Engine**: Create user-friendly dashboards for real-time insights with natural language search capabilities.

## Technologies and Frameworks Used
- **AI & ML**: TensorFlow, PyTorch
- **Data Processing**: Pandas, NumPy
- **Web Scraping & NLP**: BeautifulSoup, Scrapy
- **Frontend & Backend**: React.js, Next.js

## Frontend Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js (v18 or higher)
- Git

### Clone the Repository
1. Open your terminal.
2. Execute the following commands:
   ```bash
   git clone <repository-url>
   cd fashion-ontology-system/frontend
   ```

### Install Dependencies
1. Install the necessary packages:
   ```bash
   npm install
   ```

### Configure Environment Variables
1. Create a local environment configuration:
   ```bash
   cp .env.example .env.local
   ```
2. Edit `.env.local` with the following keys (replace placeholders with your actual keys):
   ```env
   FAL_KEY=<YOUR_FAL_KEY>
   NEXT_PUBLIC_GEMINI_API_KEY=<YOUR_GEMINI_API_KEY>
   NEXT_PUBLIC_HUGGINGFACE_API_KEY=<YOUR_HUGGINGFACE_API_KEY>
   NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=<YOUR_UNSPLASH_ACCESS_KEY>
   SERPAPI_API_KEY=<YOUR_SERPAPI_API_KEY>
   PEXELS_API_KEY=<YOUR_PEXELS_API_KEY>
   SAMBANOVA_API_KEY=<YOUR_SAMBANOVA_API_KEY>
   NEXT_PUBLIC_COHERE_API_KEY=<YOUR_COHERE_API_KEY>
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<YOUR_STRIPE_PUBLISHABLE_KEY>
   STRIPE_SECRET_KEY=<YOUR_STRIPE_SECRET_KEY>
   REPLICATE_API_KEY=<YOUR_REPLICATE_API_KEY>
   AZURE_VISION_KEY=<YOUR_AZURE_VISION_KEY>
   AZURE_VISION_ENDPOINT=<YOUR_AZURE_VISION_ENDPOINT>
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>
   CLERK_SECRET_KEY=<YOUR_CLERK_SECRET_KEY>
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm run dev
   ```

## Chrome Extension Setup (Try-On Feature)

To set up the Chrome extension for the try-on feature:

1. **Download the Backend Extension Repository**
    - Clone the backend repository using the following command:
      ```bash
      git clone https://github.com/CroWzblooD/Stylumia-OutWear-Backend.git
      ```
    - Alternatively, you can download it as a zip file from [this link](https://github.com/CroWzblooD/Stylumia-OutWear-Backend/archive/refs/heads/main.zip).

2. **Backend Structure**
    - The backend repository contains two folders:
        - `tryon-backend`: This folder contains the server code required for the try-on feature.
        - `extension`: This folder contains the code related to the Chrome extension.

3. **Running the Try-On Backend**
    - Change into the `tryon-backend` directory:
      ```bash
      cd Stylumia-OutWear-Backend/tryon-backend
      ```
    - Install dependencies using Nodemon (if not already installed globally):
      ```bash
      npm install -g nodemon  # Install Nodemon globally if you haven't already
      ```
    - Start the server using Nodemon:
      ```bash
      nodemon server.js  # This will run your backend server with live reload capabilities.
      ```

4. **Load Chrome Extension**
    - Navigate to the `extension` directory:
      ```bash
      cd ../extension  # Adjust path as necessary based on your structure.
      ```
    - Install dependencies:
      ```bash
      npm install  # Install necessary packages for the Chrome extension.
      ```
    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable **Developer Mode**.
    - Click **Load unpacked** and select the `extension` folder.

## Future Scope 
The project has potential for expansion into related industries like cosmetics and lifestyle retail while continuously improving through modular architecture for easy iteration.

This README provides detailed instructions for setting up both the frontend of the Universal Fashion Ontology & Feature Extraction System as well as the backend extension while addressing key challenges in the fashion industry through innovative solutions during the Stylumia NXT Hackathon 2024.

For more details on the backend setup, visit: [Stylumia-OutWear-Backend Repository](https://github.com/CroWzblooD/Stylumia-OutWear-Backend).

Citations:
[1] https://github.com/CroWzblooD/Stylumia-OutWear-Backend.git
