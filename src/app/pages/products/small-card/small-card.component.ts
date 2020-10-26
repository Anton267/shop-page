import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserProduct } from '../models/product-list.model';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.sass']
})
export class SmallCardComponent {

  @Input() public product: UserProduct;
  @Input() public isSimilar: boolean;

  constructor(
    private sanitization: DomSanitizer
  ) { }

  public getImg(img: string): SafeUrl {
    return this.sanitization.bypassSecurityTrustUrl(` https://scoop.co.za/download/marketing/images/${img}.jpg`);
  }
}
