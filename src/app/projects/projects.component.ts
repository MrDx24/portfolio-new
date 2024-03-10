import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
        "id": "prj1",
        "class": "col-lg-6 col-md-6",
        "title": "Portfolio Website for Photographer",
        "timeline": ["June 2023 - July 2023"],
        "techstack": ["Angular", " Express", " Node", " MongoDB", " REST API"],
        "keywords": ["MEAN Stack", " responsive design", " admin page", " image management", " RESTful APIs"],
        "description": "Designed and implemented a responsive portfolio website using the MEAN Stack to showcase a photographer's work across various categories. Developed an admin page for easy content updates and image management. Introduced an intuitive image thumbnail selection feature for improved user navigation. Implemented RESTful APIs for seamless communication between the frontend Angular application and the backend Express server",
        "image": "../../assets/images/projects/pr1/pr1.jpg"
      },
    {
        "id": "prj2",
        "class": "col-lg-6 col-md-6",
        "title": "Text Summarization using TFIDF and Textrank Algorithm",
        "timeline": ["June 2020 - July 2021"],
        "techstack": ["Angular", " Flask", " REST API"],
        "keywords": ["text summarization", " TFIDF", " Textrank", " web application", " PDF reports"],
        "description": "Built a user-friendly web application for text summarization, allowing users to obtain concise summaries from different input sources (text, URLs, files). Implemented TFIDF and Textrank algorithms to generate accurate summaries. Created downloadable PDF reports with essential information including time, date, summary generation method, original content source, and result summary. Integrated RESTful APIs to enable communication between the Angular frontend and Flask backend, facilitating data exchange and processing",
        "image": "../../assets/images/projects/pr1/pr1.jpg"
      },
    {
        "id": "prj3",
        "class": "col-lg-4 col-md-4",
        "title": "Canteen Automation System",
        "timeline": ["January 2019 - April 2019"],
        "techstack": ["Android", " Java", " MySQL"],
        "keywords": ["food ordering", " Android application", " Java", " MySQL", " inventory management"],
        "description": "Developed an Android application using Java and integrated it with a MySQL database to streamline food ordering in a college canteen. Enabled users to place orders conveniently, reducing waiting times and improving user satisfaction. Provided canteen owners with an intuitive interface to manage orders and inventory efficiently",
        "image": "../../assets/images/projects/pr1/pr1.jpg"
      },
    {
        "id": "prj4",
        "class": "col-lg-4 col-md-4",
        "title": "Smart Parking System",
        "timeline": ["June 2017 - July 2018"],
        "techstack": ["Android", " Java", " MySQL"],
        "keywords": ["parking reservation", "Android application", "Google Maps integration", "Java", "MySQL"],
        "description": "Designed and developed an Android application using Java, integrated with a MySQL database, allowing users to reserve parking slots in advance. Integrated Google Maps for seamless navigation to reserved slots, enhancing user convenience. Empowered parking administrators to update slot details efficiently, ensuring accurate availability information",
        "image": "../../assets/images/projects/pr1/pr1.jpg"
      },
    {
        "id": "prj5",
        "class": "col-lg-4 col-md-4",
        "title": "My Portfolio",
        "timeline": ["February 2024 - February 2024"],
        "techstack": ["Angular"],
        "keywords": ["web portfolio", "projects", "landing page", "design", "responsive"],
        "description": "This is my Portfolio. It has my Experience & Skills, Projects, About Me and my Contact details",
        "image": "../../assets/images/projects/pr1/pr1.jpg"
      }
];
modal: any;

}
