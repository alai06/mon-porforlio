import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit(): void {
    this.projects = [
      {
        title: 'MeteoApp',
        description: 'Application météo en temps réel permettant de consulter les prévisions météorologiques détaillées pour n\'importe quelle ville du monde',
        tech: ['HTML', 'CSS', 'JavaScript', 'Angular'],
        link: 'https://meteoapp13.netlify.app'
      },
      {
        title: 'Plateforme de Gestion des Assignments',
        description: 'Développement Full-Stack (Angular/MongoDB). Implémentation de la Sécurité (Guards, JWT), Refonte UI/UX (Sidenav Material), Gestion des données CRUD et formulaires avancés.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Angular', 'MongoDB'],
        link: 'https://angularprojectm1info06.onrender.com'
      },
      {
        title: "Visualisation d'un jeu de données",
        description: 'Application web interactive pour visualiser et analyser un jeu de données complexe à l\'aide de graphiques dynamiques et de filtres personnalisés.',
        tech: ['HTML', 'CSS', 'JavaScript (D3.js)'],
        link: 'https://tubular-panda-913f72.netlify.app/' 
      },
      {
        title: "Jeu en 2d multijoueur",
        description : "Création d’un jeu 2D multijoueur où jusqu’à 4 joueurs s’affrontent sur 20 niveaux avec obstacles.",
        tech: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://alai06.github.io/Jeu-en-javascript/'
      }

    ];
  }
}