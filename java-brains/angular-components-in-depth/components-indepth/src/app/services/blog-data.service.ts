import {Injectable} from '@angular/core';
import {BlogPost} from '../blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() {
  }

  getData(): BlogPost[][] {
    return [
      [
        {
          title: 'Blog Post 1',
          summary: 'Summary 1 Lorem ipsum dolor sit amet orci aliquam.'
        },
        {
          title: 'Blog Post 2',
          summary: 'Summary 2 Lorem ipsum dolor sit amet orci aliquam.'
        },
        {
          title: 'Blog Post 3',
          summary: 'Summary 3 Lorem ipsum dolor sit amet orci aliquam.'
        },
        {
          title: 'Blog Post 4',
          summary: 'Summary 4'
        }
      ],
      [
        {
          title: 'Blog Post 5',
          summary: 'Summary 5'
        },
        {
          title: 'Blog Post 6',
          summary: 'Lorem ipsum dolor sit amet orci aliquam.'
        },
        {
          title: 'Blog Post 7',
          summary: 'Summary 7'
        },
        {
          title: 'Blog Post 8',
          summary: 'Summary 8'
        }
      ],
      [
        {
          title: 'Blog Post 9',
          summary: 'Summary 9'
        },
        {
          title: 'Blog Post 10',
          summary: 'Lorem ipsum dolor sit amet orci aliquam.'
        },
        {
          title: 'Blog Post 11',
          summary: 'Summary 11'
        },
        {
          title: 'Blog Post 12',
          summary: 'Summary 12'
        }
      ]
    ];
  }
}
