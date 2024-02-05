import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastCommonComponent } from './toast-common.component';



describe('ToastCommonComponent', () => {
    let component: ToastCommonComponent;
    let fixture: ComponentFixture<ToastCommonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ToastCommonComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ToastCommonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
