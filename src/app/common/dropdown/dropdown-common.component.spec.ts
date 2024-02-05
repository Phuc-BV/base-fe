import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownCommonComponent } from './dropdown-common.component';

describe('DropdownCommonComponent', () => {
    let component: DropdownCommonComponent;
    let fixture: ComponentFixture<DropdownCommonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownCommonComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownCommonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
