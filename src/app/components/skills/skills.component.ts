import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Front-end & Maquettage',
      skills: ['Figma', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular']
    },
    {
      title: 'Back-end',
      skills: ['Java', 'C', 'Python', 'Node.js', 'Spring Boot']
    },
    {
      title: '3D & Graphismes',
      skills: ['Babylon.js', 'Three.js']
    },
    {
      title: 'Base de données',
      skills: ['SQL', 'MongoDB']
    },
    {
      title: 'Environnements & systèmes',
      skills: ['Unix', 'Linux (Debian, Ubuntu)']
    },
    {
      title: 'Outils & Gestion',
      skills: ['Git', 'GitHub', 'VS Code']
    }
  ];
}