import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import TagCloud from 'TagCloud';

@Component({
  selector: 'app-expedsk',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './expedsk.component.html',
  styleUrl: './expedsk.component.css'
})
export class ExpedskComponent {

  roles = [
    {
      "kywds": "Collaboration",
      "text": "Collaborated closely with clients and Subject Matter Experts (SMEs) to gather and analyze business requirements, ensuring clear communication throughout the project lifecycle."
    },
    {
      "kywds": "Leadership",
      "text": "Led project sections and contributed to other projects, driving performance enhancements and successful implementations, demonstrating leadership and teamwork."
    },
    {
      "kywds": "Change Management",
      "text": "Managed change requests, including migration, testing, and validation, meeting deadlines and maintaining high-quality standards."
    },
    {
      "kywds": "Automation",
      "text": "Developed VBA macros in Excel, automating tasks and reducing manual workload by up to 90%, showcasing proficiency in automation techniques."
    },
    {
      "kywds": "Knowledge Transfer",
      "text": "Conducted Knowledge Transfer (KT) sessions, fostering a collaborative learning environment and promoting skill development among team members."
    },
    {
      "kywds": "Database Optimization",
      "text": "Optimized database queries in Oracle SQL, achieving a 40% reduction in query execution time and enhancing software performance and scalability. Leveraged advanced techniques such as indexing, query tuning, and normalization to improve response times and accommodate growing data volumes."
    },
    {
      "kywds": "Reporting",
      "text": "Generated comprehensive reports using Oracle SQL for decision-making and project evaluation, demonstrating strong data analysis and reporting skills."
    }
];




  ngAfterViewInit() {
    const words = [
      'Html', 'Angular', 'JavaScript',
      'CSS3', 'Nodejs', 'Sql',
      'MongoDb', 'C/C++', 'Java',
      'Agile', 'Git', 'Github'
    ];

    const container: string = '.sphere';
    const options: any = {
      radius: 190,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      keep: true
    }; // You can define the options object with appropriate types

    TagCloud(container, words, options);

  }
}
