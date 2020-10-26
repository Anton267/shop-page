import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {

  public isShowMenu = false;
  public currentType: string;
  @Input() public typeList: string[];
  @Output() public type: EventEmitter<string> = new EventEmitter();

  constructor(
    private auth: AuthService,
    private router: Router,
    private filterService: FilterService,
  ) { }

  public eventString(type: string): void {
    this.type.emit(type);
    this.currentType = type;
    this.filterService.saveType = type;
  }

  public reset(): void {
    this.type.emit('reset');
    this.currentType = null;
    this.filterService.saveType = null;
  }

  public toggleMenu(): void {
    this.isShowMenu = !this.isShowMenu;
  }

  public closeMenu(): void {
    this.isShowMenu = false;
  }

  public logout(): void {
    this.auth.logout()
      .subscribe(e => {
        if (e) {
          this.router.navigateByUrl('/');
        }
      });
  }

}

