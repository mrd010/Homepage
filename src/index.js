import './style.css';
import createProjects from './scripts/ProjectsLoader';
import projectsList from './scripts/ProjectsList';
import ghIcon from './assets/img/github-icon.svg';
import linkedinIcon from './assets/img/linkedin-icon.svg';
import twitterIcon from './assets/img/twitter-icon.svg';

const socialIcons = [ghIcon, linkedinIcon, twitterIcon];

const main = document.querySelector('.main');
document.querySelectorAll('.footer .footer-links .contact-link').forEach((footerLink, index) => {
  const img = new Image();
  img.src = socialIcons[index];
  footerLink.querySelector('a').appendChild(img);
});
main.appendChild(createProjects(projectsList));
