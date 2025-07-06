// src/data/jobs.ts

export type JobStatus = 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
export type Priority = 'High' | 'Medium' | 'Low';

export interface Job {
  id: number;
  jobRequest: string;
  submitted: string;
  status: JobStatus;
  submitter: string;
  url: string;
  assigned: string;
  priority: Priority;
  dueDate: string;
  estValue: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    jobRequest: 'Launch social media campaign for product',
    submitted: '15-11-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel.com',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '20-11-2024',
    estValue: '6,200,000 ₹'
  },
  {
    id: 2,
    jobRequest: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhan.com',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    estValue: '3,500,000 ₹'
  },
  {
    id: 3,
    jobRequest: 'Finalize user testing feedback for application',
    submitted: '05-12-2024',
    status: 'In-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohnson.com',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    estValue: '4,750,000 ₹'
  },
  {
    id: 4,
    jobRequest: 'Design financial report for Q4',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen.com',
    assigned: 'Tom Wright',
    priority: 'Low',
    dueDate: '15-01-2025',
    estValue: '5,900,000 ₹'
  },
  {
    id: 5,
    jobRequest: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    dueDate: '30-01-2025',
    estValue: '2,800,000 ₹'
  }
];
