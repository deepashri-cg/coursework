import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BlogPost} from '../blog-post';
import {TruncatePipe} from '../pipes/truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostTileComponent implements OnInit {

  @Input() post: BlogPost;
  fullSummaryText: string;

  constructor(private truncatePipe: TruncatePipe) {
  }

  ngOnInit() {
    this.fullSummaryText = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 30);
  }

  showFullSummary() {
    this.post.summary = this.fullSummaryText;
  }

  toggleFav() {
    this.post.isFav = !this.post.isFav;
  }
}
