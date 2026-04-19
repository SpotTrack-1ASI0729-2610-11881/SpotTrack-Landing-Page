import { Component, signal } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  animations: [
    trigger('headerFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' })),
      ])
    ]),
    trigger('navbarFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' })),
      ])
    ]),
    trigger('hover', [
      state('hovered', style({ color: 'white'})),
      state('normal', style({color: 'gray'})),
      transition("normal <=> hovered", animate('300ms ease-in-out'))
    ])

  ]
})

export class HeroSectionComponent {
  private _title : string = "OptiFlow";
  btnStates = Array.from({ length: 4 }, () => signal<'normal' | 'hovered'>('normal'));

  get Title() {
    return this._title;
  }



  public setHover(index: number, isHovered: boolean): void {
    const newState = isHovered ? 'hovered' : 'normal';
    this.btnStates[index].set(newState);
  }

  protected readonly onmouseenter = onmouseenter;
}

