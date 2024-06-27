import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { NgForOf } from '@angular/common';
import { ProjectsService } from '../../Services/Customer/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  projectsStatic: any[] = [];
  searchWord: string = '';

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    const userId = localStorage.getItem('Id');
    if (userId) { // Ensuring userId is not null
      this.projectService.getMyProjects(userId).subscribe(
        (data: any[]) => {
          console.log(data);
          this.projects = data;
          this.projectsStatic = data.slice();
        },
        (error: any) => {
          console.log('Error while getting projects:', error);
        }
      );
    } else {
      console.log('No user ID found in local storage');
    }
  }

  onSearchChange(event: any) {
    this.searchWord = event.target.value;
    this.searchProject();
    console.log(this.projects);
    console.log(this.projectsStatic);
  }

  searchProject() {
    if (this.searchWord.trim() === '') {
      this.projects = this.projectsStatic.slice();
      return;
    }

    const searchFilter = (project: any) =>
      project.projectName.toLowerCase().includes(this.searchWord.toLowerCase());

    this.projects = this.projectsStatic.filter((project: any) => {
      const result = searchFilter(project);
      console.log(`Project: ${project.projectName}, Matched: ${result}`);
      return result;
    });
  }
}

