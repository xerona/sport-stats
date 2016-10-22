/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';



describe('Component: HomeComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ]
        });
    });

    it('should create the component', async(() => {
        let fixture = TestBed.createComponent(HomeComponent);
        let component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    }));

    it('should render the breadcrumbs', async(() => {
        let fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.breadcrumb')).toBeTruthy();
    }));

    it('should render the jumbotron', async(() => {
        let fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.jumbotron')).toBeTruthy();
    }));

});
