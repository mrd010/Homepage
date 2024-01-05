import { appendChildren, createElementWithClasses } from './ElementCreator';
import ghIcon from '../assets/img/github-icon.svg';
import openLinkIcon from '../assets/img/open_in_new.svg';

const createProjects = function createProjects(projectsList) {
  const listElement = createElementWithClasses('ul', 'projects');
  projectsList.forEach((project) => {
    const listItem = createElementWithClasses('li', 'project-card');
    const img = new Image();
    img.classList.add('project-image');
    img.src = project.thumbnailImg;

    const title = createElementWithClasses('h6', 'project-title');
    title.textContent = project.name;

    const desc = createElementWithClasses('p', 'project-desc');
    desc.textContent = project.description;

    const ghLink = createElementWithClasses(
      'a',
      'project-link-gh',
      ['href', `${project.githubUrl}`],
      ['target', '_blank']
    );
    let icon = new Image();
    icon.src = ghIcon;
    ghLink.appendChild(icon);

    const liveLink = createElementWithClasses(
      'a',
      'project-link-live',
      ['href', `${project.liveUrl}`],
      ['target', '_blank']
    );
    liveLink.textContent = 'Live Preview';
    icon = new Image();
    icon.src = openLinkIcon;
    appendChildren(liveLink, [icon]);

    appendChildren(listItem, [img, title, desc, ghLink, liveLink]);
    listElement.appendChild(listItem);
  });

  return listElement;
};

export default createProjects;
