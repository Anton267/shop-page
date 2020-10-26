import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { UserProduct } from '../models/product-list.model';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.sass']
})
export class BigCardComponent implements OnInit, OnDestroy {

  public product: UserProduct;
  private unsubscribe$ = new Subject();

  constructor(
    private sanitization: DomSanitizer,
    private api: ApiService,
    private route: ActivatedRoute,
    private filterService: FilterService,
  ) { }

  public getImg(img: string): SafeUrl {
    return this.sanitization.bypassSecurityTrustUrl(` https://scoop.co.za/download/marketing/images/${img}.jpg`);
  }

  private getProduct(id: string): void {
    this.api.getProductById(+id).subscribe(product => {
      this.product = product;
      this.filterService.filterByType$.next(product.type);
    });
  }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.unsubscribe$))
      .subscribe(params => this.getProduct(params.id));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.filterService.filterByType$.next(null);
  }

}
