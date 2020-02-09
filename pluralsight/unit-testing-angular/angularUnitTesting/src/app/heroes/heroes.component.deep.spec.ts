import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeroesComponent} from './heroes.component';
import {Component, Input} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {HeroComponent} from '../hero/hero.component';

describe('HeroesComponent (deep tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful Woman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55}
    ];
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroComponent
      ],
      providers: [
        {provide: HeroService, useValue: mockHeroService}
      ]
    });
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should be true', () => {
    expect(true).toBe(true);
  });
});
