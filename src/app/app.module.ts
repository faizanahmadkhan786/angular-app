import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AddmisionComponent } from './components/addmision/addmision.component';
import { NavComponent } from './components/nav/nav.component';
import { TestComponent } from './components/test/test.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TestingComponent } from './components/testing/testing.component';
import { HorizontalComponent } from './components/horizontal/horizontal.component';
import { ToastComponent } from './components/toast/toast.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { FocusComponent } from './components/focus/focus.component';
import { OffconvasComponent } from './components/offconvas/offconvas.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopoverComponent } from './components/popover/popover.component';
import { PbarComponent } from './components/pbar/pbar.component';
import { TemplateComponent } from './components/template/template.component';
import { ScrollpsyComponent } from './components/scrollpsy/scrollpsy.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        HomeComponent,
        AddmisionComponent,
        NavComponent,
        TestComponent,
        CarouselComponent,
        TestingComponent,
        HorizontalComponent,
        ToastComponent,
        TooltipComponent,
        FocusComponent,
        OffconvasComponent,
        PaginationComponent,
        PopoverComponent,
        PbarComponent,
        TemplateComponent,
        ScrollpsyComponent,
        TableComponent,
        
        
      
       
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
    ]
})
export class AppModule { }
