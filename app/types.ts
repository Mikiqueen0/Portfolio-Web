export interface Project {
  title: string;
  year: string;
  subject: string;
  shortDes: string;
  tools: string[];
  image: string;
  githubLink: string;
  longDes: string[];
  roles: string[];
}

interface ContactInfo {
  text: string;
  link: string;
}
export interface Contacts {
  Email: ContactInfo;
  GitHub: ContactInfo;
  "Phone Number": ContactInfo;
  Facebook: ContactInfo;
  Line: ContactInfo;
}